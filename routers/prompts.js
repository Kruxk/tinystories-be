const { Router } = require("express");
const Prompt = require("../models").prompt;
const Story = require("../models").story;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const prompts = await Prompt.findAll({ include: [Story] });
    res.send(prompts);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const prompt = await Prompt.findByPk(req.params.id, { include: [Story] });
    res.send(prompt);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
