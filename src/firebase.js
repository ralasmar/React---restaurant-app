
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBgfWXQIGx3zFImN3ImjYMQeyAUh2N68_M",
  authDomain: "restaurant-app-3860f.firebaseapp.com",
  projectId: "restaurant-app-3860f",
  storageBucket: "restaurant-app-3860f.appspot.com",
  messagingSenderId: "784325827288",
  appId: "1:784325827288:web:0cd168e8cdf043e501d5ad"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const postsCollection = collection(db, "posts")