import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCHRhl1oAa3i6u-gvQEYlBZ9IzSef_USXc",
    authDomain: "clone-16abe.firebaseapp.com",
    databaseURL: "https://clone-16abe.firebaseio.com",
    projectId: "clone-16abe",
    storageBucket: "clone-16abe.appspot.com",
    messagingSenderId: "890413156112",
    appId: "1:890413156112:web:9cbf54cf28a55d4e830795",
    measurementId: "G-ELXR6366XD"
  };

// 내가 찾은 것
// firebaseConfig 정보로 firebase 시작
// firebase.initializeApp(firebaseConfig);
// firebase의 firestore 인스턴스를 변수에 저장
// const firestore = firebase.firestore();

// 틴더 클론 코딩에서
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export default database;