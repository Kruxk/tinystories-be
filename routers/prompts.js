const { Router } = require("express");
const Prompt = require("../models").prompt;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    console.log("req received");
    const prompts = await Prompt.findAll();
    res.send(prompts);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
