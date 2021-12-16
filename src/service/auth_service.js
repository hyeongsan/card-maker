/*
import firebase from "./firebase"; // 먼저 firebase를 받아오고
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    //공식문서에서 providerName에 google이든 깃헙이든 그 사용하고자하는 이름이 뭐가 들어오냐에 따라 사용할 수있게 해놈.
    // 그래서 이런식으로 짜줬고.
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    // 공식문서에 이렇게 사용하라고 되있음. 그래서 우리가 이렇게 세팅한 변수를 signInWithPopup에 인자로 전달한다
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}
// 최종적으로 이렇게 export해줌.
export default AuthService;

*/

import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
