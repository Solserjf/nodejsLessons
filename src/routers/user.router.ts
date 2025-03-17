import {Router} from "express";
import {userController} from "../controllers/user.controller";

const router = Router();

router.get("/", userController.getAll)
router.post("/", userController.create)
router.get("/:id", userController.getById)
router.delete("/:id", userController.deleteById)
router.put("/:id", userController.updateById)

export const userRouter = router

