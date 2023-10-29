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
router.get("/content/:contentId", getBlogById);
router.put("/content/:contentId", updateBlog);
router.delete("/content/:contentId", deleteBlog);

module.exports = router;
