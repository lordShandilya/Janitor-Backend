import { EntryService } from "../services/Entry.service.js";

export class EntriyController {
    constructor() {
        this.service = new EntryService();
    }

    async handelEntry(req, res) {
        const id = req.params.id;
        const entryUnresolved = await this.service.fetchEntry(id);
        console.log(entryUnresolved);
        if(entryUnresolved) {
            this.service.updateUnresolved(id);
            res.status(200).json({msg: `Entry updated successfuly.`})
        } else {
            const entry =  await this.service.createEntry(id);
            res.status(200).json({msg: `Entry successfuly created at ${entry.exitTIme}`});
        }
    }

    async fetchAllEntries(req, res) {
        const entries = await this.service.fetchAllEntries();
        res.status(200).json({msg: entries});
    }

    async fetchEntry(req, res) {
        const id = req.params.id;
        const entry = await this.service.fetchEntry(id);
        res.status(200).json({msg: entry});
        
    }


}