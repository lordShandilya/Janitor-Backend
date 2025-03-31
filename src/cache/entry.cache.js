const entryCache = {
    data: {},
    set(key, value, ttl = 3600) {
        this.data[key] = {
            value,
            expiresAt: Date.now() + ttl*1000
        }
    },
    get(key) {
        const item = this.data[key];
        if(!item) return null;

        if(item.expiresAt < Date.now()) {
            delete this.data[key];
            return null;
        }

        return item.value;
    },
    delete(key) {
        delete this.data[key];
    }

}