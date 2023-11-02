const express = require('express');
const router = express.Router();
const { IsAuthenticated, authorizeRoles } = require("../middleware/Auth");
const {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
} = require('../controllers/BlogControllers');

router.post("/content/create", IsAuthenticated, createBlog);
router.get("/content", getBlogs);
router.get("/content/:id", getBlogById);
router.put("/content/:id", updateBlog);
router.delete("/content/:id", deleteBlog);

module.exports = router;
