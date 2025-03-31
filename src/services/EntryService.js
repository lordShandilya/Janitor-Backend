import { EntryRepository } from "../repositories/EntryRepository.js";

export class EntryService {
    constructor() {
        this.repo = new EntryRepository();
        this.cache = entryCache;
    }

    async createEntry(id) {
        const entry =  await this.repo.createEntry(id);
        const cacheKey = `user_${id}`;
        this.cache.set(cacheKey, entry);
    }

    async updateUnresolved(id) {
        const cacheKey = `user_${id}`;
        
        await this.repo.updateUnresolvedEntry(id);

        this.cache.delete(cacheKey);

    }

    async isUnresolved(id) {
        const cacheKey = `user_${id}`;
        const entry = this.cache.get(cacheKey);
        if(!entry) {
            const entry = await this.repo.findUnresolvedEntry(id);
            if(entry) {
                this.cache.set(cacheKey, entry);
            }
        }

        if(entry === null) {
            return false;
        }

        return true;
    }
}