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
        uploadMoney();
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

function uploadMoney() {
    // open transaction on db
    const transaction = db.transaction(['new_money'], 'readwrite');

    // access the object store
    const moneyObjectStore = transaction.objectStore('new_money');

    // get all records from store and set to variable
    const getAll = moneyObjectStore.getAll();

    // upon successful getAll, run...
    getAll.onsuccess = function() {
        // if there is data in the store, send to api server
        if (getAll.result.length > 0) {
            fetch('/api/transaction', {
                method: 'POST',
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(serverResponse => {
                    if (serverResponse.message) {
                        throw new Error(serverResponse);
                    }
                    // open one more transaction
                    const transaction = db.transaction(['new_money'], 'readwrite');
                    // access the store
                    const moneyObjectStore = transaction.objectStore('new_money');
                    // clear all items in the store
                    moneyObjectStore.clear();

                    alert('All saved transactions have been submitted!');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };
};

// listen for app coming back online
window.addEventListener('online', uploadMoney);