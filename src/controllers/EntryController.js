import { EntryService } from "../services/EntryService.js";

export class EntriyController {
    constructor() {
        this.service = new EntryService();
        this.cache = entryCache;
    }

    async handelEntry(req, res) {
        const id = req.params.id;
        const cacheKey = `user_${id}`
        
        if(this.service.isUnresolved(id)) {
            this.service.updateUnresolved(id);
            res.status(200).json({msg: `Entry updated successfuly.`})
        } else {
            const entry =  await this.service.createEntry(id);
            res.status(200).json({msg: `Entry successfuly created at ${entry.exitTIme}`});
        }
    }


}