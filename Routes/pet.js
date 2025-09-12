import express from "express";
import { authenticate, restrict } from "../utils/verifyToken.js";

import {
  addPet,
  deletePet,
  getUserPets,
  updatePet,
} from "../Controllers/petController.js";
const router = express.Router();

router.post("/", authenticate, restrict(["viewer"]), addPet);
router.get("/", authenticate, restrict(["viewer"]), getUserPets);
router.put("/:petId", authenticate, restrict(["viewer"]), updatePet);
router.delete("/:petId", authenticate, restrict(["viewer"]), deletePet);

export default router;
