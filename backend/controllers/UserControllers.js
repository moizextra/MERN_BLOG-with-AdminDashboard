const ErrorHandler = require('../utils/errorhandler');
const User = require('../models/UserModel');
// const cloudinary = require('cloudinary');
const sendGeneratedToken = require('../utils/sendToken');
const crypto = require('crypto');
const sendEmail = require('../utils/sendemail');
// Register a User
exports.registerUser = async (req, res, next) => {
    try {
        // const mycloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        //     folder: 'avatars',
        //     width: 150,
        //     crop: 'scale',
        // });
        const { name, password, email } = req.body;
        const user = await User.create({
            name,
            email,
            password,
            avatar: {
                public_id: "mycloud.public_id",
                url: "mycloud.secure_url",
            },
        });
        res.status(201).json({
            success: true,
            user,
        })
        // getting token by running method we have defined in jwt
        sendGeneratedToken(user, 200, res);
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

exports.LoginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Checking if either email or password is missing
        if (!password || !email) {
            return next(new ErrorHandler('Please Enter Email and Password', 400));
        }

        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return next(new ErrorHandler('User does not exist', 404));
        }

        // Check if the provided password matches the stored password
        const IsPasswordMatched = await user.comparepassword(password);

        if (!IsPasswordMatched) {
            return next(new ErrorHandler('Invalid Email or Password', 401)); // 401 for unauthorized
        }

        // Password is correct, generate and send a token
        sendGeneratedToken(user, 200, res);
        res.status(200).json({
            success: true,
            user,
        })
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

exports.Logout = async (req, res, next) => {
    try {
        const cookieOptions = {
            expires: new Date(Date.now()),
            domain: 'localhost',
            path: '/api/v1',
            httpOnly: true, // Limit the cookie to be accessible only through HTTP
            sameSite: 'None', // Allow cross-origin cookies (if applicable)
        };
        res.cookie('token', null, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: '/',
        })
            .status(200)
            .json({
                success: true,
            });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

// Forgot Password
exports.ForgotPassword = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return next(new ErrorHandler("User doesn't exist", 404));
        }
        // Get resetPassword Token
        const resetToken = await user.GeneratePasswordResetToken();
        await user.save({ validateBeforeSave: false }); // *
        const resetPasswordUrl = `${req.protocol}://${req.get(
            'host'
        )}/api/password/reset/${resetToken}`;
        const message = `Your Password Reset Token: ${resetPasswordUrl} \n\n If you have not requested to reset your password, please ignore this email. Have a nice day!`;
        try {
            await sendEmail(
                user.email,
                'Mern stack Course - Password Reset',
                message
            );
        } catch (error) {
            // Handle error sending email
            user.resetpasswordToken = undefined;
            user.resetpasswordexpire = undefined;
            await user.save({ validateBeforeSave: false });
            return next(new ErrorHandler(error.message, 500));
        }
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

exports.ResetPassword = async (req, res, next) => {
    try {
        // Creating hash of token that is received by user
        console.log(req.params.token);
        // const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

        const user = await User.findOne({
            resetpasswordToken: req.params.token,
            resetpasswordexpire: { $gt: Date.now() },
        });

        if (!user) {
            return next(
                new ErrorHandler(
                    'Reset Password Token is Invalid or has been expired :(',
                    400
                )
            );
        }

        if (req.body.password !== req.body.confirmpassword) {
            return next(new ErrorHandler('Passwords do not match :(', 400));
        }

        user.password = req.body.password;
        user.resetpasswordToken = undefined;
        user.resetpasswordexpire = undefined;
        await user.save();
        sendGeneratedToken(user, 200, res); // Login
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

exports.getUserDetail = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);

        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

exports.UpdatePassword = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).select('+password');
        const IsPasswordMatched = user.camparepassword(req.body.oldPassword);
        if (!IsPasswordMatched) {
            return next(new ErrorHandler('InCorrect Old Password', 500));
        }
        if (req.body.password != req.body.confirmpassword) {
            return next(new ErrorHandler('Passwords do not match', 400));
        }
        user.password = req.body.password;
        await user.save();
        sendGeneratedToken(user, 200, res);
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

exports.UpdateProfile = async (req, res, next) => {
    try {
        const newUserData = {
            name: req.body.name,
            email: req.body.email,
            // Todo: we will add avatar later
        };
        const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

// if admin wants all users (admin)
exports.GetAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            users,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

// Now Admin wants to access only one particular User
exports.GetUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return next(new ErrorHandler("User Doesn't exist", 404));
        }
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

// This route is for admin if they want to update the profile of Users, usually admin will update the user Role
exports.UpdateUserProfile = async (req, res, next) => {
    try {
        const newUserData = {
            name: req.body.name,
            email: req.body.email,
            role: req.body.role,
            // Todo: we will add avatar later
        };
        const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });
        await user.save();
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

// This route is for admin if they want to delete the profile of a User
exports.DeleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return next(new ErrorHandler('User not found', 404));
        }

        res.status(200).json({
            success: true,
            message: 'User Deleted Successfully',
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};
