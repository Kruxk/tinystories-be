const { Router } = require("express");
const Story = require("../models").story;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const stories = await Story.findAll();
    res.send(stories);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
