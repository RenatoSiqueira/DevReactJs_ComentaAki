import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyA5o2K2iBAH0t1-euleYpvcWSgoWeOUHwo",
    authDomain: "devreactjs-comentaaki.firebaseapp.com",
    databaseURL: "https://devreactjs-comentaaki.firebaseio.com",
    projectId: "devreactjs-comentaaki",
    storageBucket: "devreactjs-comentaaki.appspot.com",
    messagingSenderId: "106801622879",
    appId: "1:106801622879:web:3cac5948457fa00e7f10ea"
}

firebase.initializeApp(firebaseConfig)

export default firebase