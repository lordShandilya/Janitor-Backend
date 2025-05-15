import { Router } from "express";
import { EntriyController } from "../controllers/Entry.controller.js";

const entryRouter = Router();
const controller = new EntriyController();

entryRouter.post('/handle/:id', (req, res) => {
    controller.handelEntry(req, res);
});

entryRouter.get('/fetch', (req, res) => {
    controller.fetchAllEntries(req, res);
});

entryRouter.get('/fetch/:id', (req, res) => {
    controller.fetchEntry(req, res);
})

export {
    entryRouter
}