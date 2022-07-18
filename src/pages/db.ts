const add = (db: IDBDatabase, name: string, surname: string, email: string) => {
  const tx = db.transaction(["Players"], "readwrite");
  const store = tx.objectStore("Players");
  const note = { name, surname, email };
  store.add(note);
};

let db: IDBDatabase;
function newDb(): void {
  const dbReg = indexedDB.open("Si9num", 1);
  dbReg.onerror = (e) => {
    console.log(e);
  };
  dbReg.onsuccess = (e) => {
    db = (<IDBOpenDBRequest>e.target).result;
  };
  dbReg.onupgradeneeded = (e) => {
    (<IDBOpenDBRequest>e.target).result.createObjectStore("Players", {
      autoIncrement: true,
    });
  };
}
const read = (): IDBRequest => {
  const results: string[] = [];
  const tx = db.transaction(["Players"], "readwrite");
  const store = tx.objectStore("Players");
  const cursor = store.openCursor();
  const items = db.transaction("Players").objectStore("Players").getAll();
  return items;
};

export { add, read, newDb };
