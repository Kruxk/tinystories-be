const { Router } = require("express");
const authMiddleWare = require("../auth/middleware");
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

router.post("/new", authMiddleWare, async (req, res, next) => {
  const { userId, description, name } = req.body;
  try {
    const newPrompt = await Prompt.create({ userId, description, name });
    res.send(newPrompt);
  } catch (e) {
    next(e);
  }
});

router.patch("/edit/:id", authMiddleWare, async (req, res, next) => {
  const { description, name } = req.body;
  const id = req.params.id;
  try {
    const promptEdit = await Prompt.update(
      { description, name },
      { where: { id: id } }
    );
    res.send(promptEdit);
  } catch (e) {
    next(e);
  }
});

router.delete("/delete/:id", authMiddleWare, async (req, res, next) => {
  try {
    await Story.destroy({ where: { promptId: req.params.id } });
    const deletePrompt = await Prompt.destroy({ where: { id: req.params.id } });
    if (deletePrompt) {
      res.send("received and destroyed");
    } else {
      res.send("is already deleted");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
