import { Router } from "express";
import { getall } from "../controllers/course";

const router = Router();

router.get("/", getall);

export default router;
