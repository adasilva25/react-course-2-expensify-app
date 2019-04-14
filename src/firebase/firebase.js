import * as firebase from 'firebase'; // takes all the named exports from firebase

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })



// NO SE USÓ
// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });

//         console.log(expenses);
//     })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });

//         console.log(expenses);
//     })

// CHALLENGE
// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 1928309291
// })

// database.ref('expenses').push({
//     description: 'Phone Bill',
//     note: '',
//     amount: 5900,
//     createdAt: 1928309291
// })

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 1928309291
// })



// database.ref('notes/-LcHg4qI1E0_AXP9x4Qp').remove();

// database.ref('notes').push({
//     title: 'To Do',
//     body: 'Go for a run'
// });

// database.ref('notes/-LcHg4qI1E0_AXP9x4Qp').update({
//     body: 'Testing'
// });

// database.ref().set({
//     name: 'Andrea Da Silva',
//     age: 20,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     isSingle: true,
//     location: {
//         city: 'Caracas',
//         country: 'Venezuela'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('Error: ', error);
// })

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} in ${val.location.city}`)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error with data fetching', e);
// })

// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500);

// setTimeout(() => {
//     database.ref('age').off(); // stops subscribing
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);


// database.ref().once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('Error', e)
// })


// UPDATE
// database.ref().update({
//     name: 'Jen',
//     age: 46,
//     job: 'Software developer',
//     isSingle: null
// })
// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Boston'
// })
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })


// SET
// database.ref().set('This is my data.')

// database.ref('age').set(27);
// database.ref('location/city').set('New York');

// database.ref('attributes').set({
//     height: 162,
//     weight: 60
// }).then((data) => {
//     console.log('Second data is saved')
// }).catch((error) => {
//     console.log('Error: ', error)
// })


// REMOVE
// database.ref('isSingle').remove().then(() => {
//     console.log('Removed successfully');
// }).catch((error) => {
//     console.log('Error: ', error);
// })

// database.ref('isSingle').set(null);