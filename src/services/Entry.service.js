import { EntryRepository } from "../repositories/Entry.repository.js";
import { setCache, getCache, deleteCache } from "../cache/entry.cache.js";

export class EntryService {
    constructor() {
        this.repo = new EntryRepository();
    }

    async fetchAllEntries() {
        const entries = await this.repo.getAllEntries();
        return entries;
    }

    async fetchEntry(id) {
        const entry = await this.repo.findEntry(id);
        return entry;
    }

   async fetchAllUnresolved() {
        const entries = await this.repo.findAllUnresolvedEntries();
        return entries;
    }

    async createEntry(id) {
        const entry =  await this.repo.createEntry(id);
        const cacheKey = `user_${id}`;
        setCache(cacheKey, entry);
        if(!entry) return null;
        return entry;
    }

    async updateUnresolved(id) {
        const cacheKey = `user_${id}`;
        
        await this.repo.updateUnresolvedEntry(id);

        deleteCache(cacheKey);

    }

    async isUnresolved(id) {
        const cacheKey = `user_${id}`;
        const entry = getCache(cacheKey);
        console.log(entry);
        if(!entry) {
            const entry = await this.repo.findUnresolvedEntry(id);
            console.log(entry);
            if(entry) {
                setCache(cacheKey, entry);
            }
        }

        if(!entry) {
            return false;
        }

        return true;
    }
}