import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore/lite';

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAssqkOi5rVNBe5iW-kwDLBzJouL95ZzMY",
  authDomain: "treino-para-iniciante.firebaseapp.com",
  databaseURL: "https://treino-para-iniciante-default-rtdb.firebaseio.com",
  projectId: "treino-para-iniciante",
  storageBucket: "treino-para-iniciante.appspot.com",
  messagingSenderId: "701147047966",
  appId: "1:701147047966:web:71a054f6da0ed1ae19660f",
  measurementId: "G-K3KZKEGXF0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseConfig);
const db = getFirestore(firebaseConfig);
db.collection('todos').getDocs();
const todosCol = collection(db, 'todos');
const Snapshot = await getDocs(todosCol);
const analytics = getAnalytics(firebaseConfig);


async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

onAuthStateChanged(auth, user => {
    if (user == null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
})