// variable to hold db connection
let db;

// establish connection to IndexedDB database
const request = indexedDB.open('money_db', 1);

// emit if db version changes
request.onupgradeneeded = function(event) {
    // save a reference to the database
    const db = event.target.result;
    //create an object store and auto increment
    db.createObjectStore('new_money', { autoIncrement: true });
};

// upon success
request.onsuccess = function(event) {
    // save reference to db global variable
    db = event.target.result;

    // check if online, if yes run function to send all local data to api
    if (navigator.onLine) {

    }
};

request.onerror = function(event) {
    // log error
    console.log(event.target.errorCode);
};

// if there is a submit with no internet
function saveRecord(record) {
    // open new transaction with db with read/write permissions
    const transaction = db.transaction(['new_money'], 'readwrite');

    // access the object store for 'new_money"
    const moneyObjectStore = transaction.objectStore('new_money');

    // add record to store with add method
    moneyObjectStore.add(record);
}