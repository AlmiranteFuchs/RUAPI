import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    console.log("Test");
    res.send("Test");
});

export default router;
    