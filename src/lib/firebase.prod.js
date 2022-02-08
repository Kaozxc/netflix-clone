import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBHuPYmFyqPSQJMHHCzUl31zmEpGfzGh_U",
    authDomain: "netflix-clone-aebf9.firebaseapp.com",
    projectId: "netflix-clone-aebf9",
    storageBucket: "netflix-clone-aebf9.appspot.com",
    messagingSenderId: "944424470969",
    appId: "1:944424470969:web:4db5c020a35426bc034e68"
};

const firebase = Firebase.initializeApp(config);

export { firebase };