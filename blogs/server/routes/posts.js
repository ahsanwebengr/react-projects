import express from 'express';
const router = express.Router();

import Post from '../models/Post.js';

//CREATE POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);

    }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatePost = await Post.findByIdAndUpdate(req.params.id,
                    { $set: req.body },
                    { new: true }
                );
                res.status(200).json(updatePost);
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(401).json('You can only update your post');
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json("Post not found!");
        }

        if (post.username === req.body.username) {
            try {
                await Post.findByIdAndDelete(req.params.id);
                res.status(200).json('Post has been deleted');
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json('You can only delete your post');
        }

    } catch (err) {
        res.status(500).json("User not found!");
    }
});


//GET POST
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL POSTS 
router.get("/", async (req, res) => {
    try {
        const { user: username, cat: catName } = req.query;
        let posts;

        if (username && catName) {
            posts = await Post.find({ username, categories: catName });
        } else if (username) {
            posts = await Post.find({ username });
        } else if (catName) {
            posts = await Post.find({ categories: catName });
        } else {
            posts = await Post.find();
        }

        res.status(200).json(posts);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

export default router;
