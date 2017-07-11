import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBWrmIgqNDIfBKTbtONRiGlNNQ7taJp2do",
  authDomain: "chat-c9f9a.firebaseapp.com",
  databaseURL: "https://chat-c9f9a.firebaseio.com",
  projectId: "chat-c9f9a",
  storageBucket: "",
  messagingSenderId: "86594182466"
}

firebase.initializeApp(config)

export default firebase