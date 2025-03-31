import { Router } from "express";
import { EntriyController } from "../controllers/EntryController.js";

const router = Router();
const controller = new EntriyController();

router.post('/{id}', (req, res) => {
    controller.handelEntry(req, res);

});

export {
    entryRouter as router
}