import { Request, Response, Router } from "express";
import { AccountDocument } from "../model/account";
import { Scene, SceneDocument } from "../model/scene";
import { User, UserDocument } from "../model/user";

const scenesRouter = Router();

scenesRouter.get("/", async (req: Request, res: Response) => {
  const user = req.user as AccountDocument;
  const userScenes = (await Scene.find({ user: user._id }).populate(
    "user"
  )) as SceneDocument[];
  res.json(userScenes);
});

scenesRouter.get("/:id", async (req: Request, res: Response) => {
  const user = req.user as AccountDocument;
  const scene = (await Scene.findById(req.params.id).populate(
    "user"
  )) as SceneDocument;

  if (scene.user.id === user.id) {
    res.json(scene);
  } else {
    res.status(403).json({ error: "Unauthorized" });
  }
});

scenesRouter.post("/", async (req: Request, res: Response) => {
  const user = req.user as AccountDocument;
  const body = req.body;

  const scene = new Scene({
    title: body.title,
    public: body.public,
    steps: body.steps,
    editor: body.editor,
    user: user.id,
  });

  const savedScene = await scene.save();
  user.scenes = user.scenes.concat(savedScene.id);

  res.status(201).json(savedScene);
});

scenesRouter.put("/:id", async (req: Request, res: Response) => {
  const user = req.user as AccountDocument;
  const body = req.body;
  const scene = (await Scene.findById(req.params.id).populate(
    "user"
  )) as SceneDocument;

  if (scene.user.id !== user.id) {
    res.status(403).json({ error: "Unauthorized" });
  }

  const newScene = {
    title: body.title,
    public: body.public,
    steps: body.steps,
    editor: body.editor,
    user: user.id,
  };

  const updatedScene = (await Scene.findByIdAndUpdate(req.params.id, newScene, {
    new: true,
  })) as SceneDocument;

  await User.updateOne(
    { _id: user.id },
    { $set: { "scenes.$[elem]": updatedScene._id } },
    { arrayFilters: [{ elem: scene._id }] }
  );

  res.status(200).json(updatedScene);
});

scenesRouter.delete("/:id", async (req: Request, res: Response) => {
  const user = req.user as UserDocument;
  const scene = (await Scene.findById(req.params.id).populate(
    "user"
  )) as SceneDocument;

  if (scene.user.id !== user.id) {
    res
      .status(403)
      .json({ error: "User not authorized to delete this document. " });
  }

  await Scene.findByIdAndDelete(req.params.id);
  await User.updateOne(
    { _id: user.id },
    { $pull: { scenes: scene.id.toString() } }
  );

  res.status(204).end();
});

export default scenesRouter;
