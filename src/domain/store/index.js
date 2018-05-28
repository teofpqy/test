const request = indexedDB.open('bootCDN');

request.onupgradeneeded = () => {
  const db = request.result;
  const store = db.createObjectStore("libraries", { keypath: 'libraryName'})
}
