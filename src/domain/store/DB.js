export function openDB(name, version = 1) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(name, version);

    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('libraries')) {
        db.createObjectStore('libraries', { keyPath: "name" });
      }
    }
    request.onerror = (e) => {
      reject(e.currentTarget.error.message);
    }

    request.onsuccess = (e) => {
      resolve(e.target.result);
    }

    request.block = (e) => {
      console.error('connect not close')
    }
  });
}

export function getObjectStore(db, storeName) {
  const transaction = db.transaction(storeName,'readwrite');
  const objectStore = transaction.objectStore(storeName);
  return objectStore;
}

export function addData(db, storeName, data) {
  return new Promise((resolve, reject) => {
    const objectStore = getObjectStore(db, storeName);
    const objectStoreRequest = objectStore.add(data);
    objectStoreRequest.onsuccess = (e) => {
      resolve();
    }

    objectStoreRequest.onerror = (error) => {
      return updateData(db, storeName, data)
      .then(() => resolve())
      .catch((e) => reject(e));
    }
  })
}

export function updateData(db, storeName, data) {

  return new Promise((resolve, reject) => {
    const objectStore = getObjectStore(db, storeName);
    const objectStoreRequest = objectStore.put(data);
    objectStoreRequest.onsuccess = (e) => {
      console.log('update success');
      resolve();
    }

    objectStoreRequest.onerror = (error) => {
      console.error('update fail');
      debugger
      reject(error);
    }
  })
}

