const cache = new Map();

function setCache(key, value, ttl = 10800000) {
  cache.set(key, {
    value,
    expiresAt: ttl ? Date.now() + ttl : null
  });

  if (ttl) {
    setTimeout(() => {
      cache.delete(key);
    }, ttl);
  }
}

function getCache(key) {
  const data = cache.get(key);
  if (!data) return null;

  if (data.expiresAt && Date.now() > data.expiresAt) {
    cache.delete(key);
    return null;
  }

  return data.value;
}

function deleteCache(key) {
  cache.delete(key);
}

export {
    setCache, getCache, deleteCache
}