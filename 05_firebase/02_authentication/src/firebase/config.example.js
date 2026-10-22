import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // db 객체 얻기 위한 함수
import { getAuth } from "firebase/auth";

// 실제 값은 config.js에 넣는다 (저장소에는 올리지 않음)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

// firestore 라이브러리 사용을 위한 객체 가져오기
export const db = getFirestore(app);
export const auth = getAuth(app);
