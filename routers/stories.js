const { Router } = require("express");
const authMiddleWare = require("../auth/middleware");
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

router.post("/new", authMiddleWare, async (req, res, next) => {
  const { description, name, promptId, userId } = req.body;
  try {
    const newStory = await Story.create({
      description,
      name,
      promptId,
      userId,
    });
    res.send(newStory);
  } catch (e) {
    next(e);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  console.log("Delete story with id:", req.params.id);
  try {
    const deleteStory = await Story.destroy({ where: { id: req.params.id } });
    if (deleteStory) {
      res.send("received");
    } else {
      res.send("Already deleted");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
