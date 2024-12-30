import { Router } from "express";
import {
  getAll,
  getById,
  add,
  update,
  deleteById,
} from "../controllers/student";

const router = Router();

router.get("/", getAll);
router.get("/detail", getById);
router.post("/", add);
router.put("/update", update);
router.delete("/delete", deleteById);

export default router;
