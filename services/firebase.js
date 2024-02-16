import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyCiRwDJv0ZmCeL1nfrqhoFE381xSy3gAzE',
  authDomain: 'iqoptions-a503d.firebaseapp.com',
  projectId: 'iqoptions-a503d',
  storageBucket: 'iqoptions-a503d.appspot.com',
  messagingSenderId: '36622109359',
  appId: '1:36622109359:web:980abb55694d8558e3a25a'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export const auth = firebase.auth()
export const db = firebase.firestore()
export const updateDoc = firebase.firestore()
export const st = firebase.storage()
