import { useState, useEffect } from "react";

let request = indexedDB.open('myDatabase', 1);

request.onupgradeneeded = function(event) {
  let db = event.target.result;
  let objectStore = db.createObjectStore('myObjectStore', { keyPath: 'id' });
  objectStore.createIndex('name', 'name', { unique: false });
};

function useIndexedDB() {
    const [db, setDb] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const request = indexedDB.open('myDatabase', 1);
      request.onerror = (event) => setError(event.target.error);
      request.onsuccess = (event) => setDb(event.target.result);
    }, []);
  
    const addData = (data) => {
      const transaction = db.transaction(['myObjectStore'], 'readwrite');
      const objectStore = transaction.objectStore('myObjectStore');
      const request = objectStore.add(data);
      request.onerror = (event) => setError(event.target.error);
    };
  
    const getData = (callback) => {
      const transaction = db.transaction(['myObjectStore'], 'readonly');
      const objectStore = transaction.objectStore('myObjectStore');
      const request = objectStore.getAll();
      request.onerror = (event) => setError(event.target.error);
      request.onsuccess = (event) => callback(event.target.result);
    };
  
    return { addData, getData, error };
};

export default useIndexedDB;