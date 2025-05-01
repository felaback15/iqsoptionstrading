import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyApDyaNSaYu96yE__ptynMWgaOEgMcfS4Q',
  authDomain: 'iqsopt.firebaseapp.com',
  projectId: 'iqsopt',
  storageBucket: 'iqsopt.firebasestorage.app',
  messagingSenderId: '985844895317',
  appId: '1:985844895317:web:af14ca4dc9bfc29a060edc'
}
const config2 = {
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
const appB = firebase.initializeApp(config2, 'appB')
export const auth = firebase.auth()
export const db = firebase.firestore()
export const updateDoc = firebase.firestore()
export const st = appB.storage()
