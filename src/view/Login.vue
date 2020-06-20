<template>
  <div>
    <!-- <button @click="handleSign">구글 로그인</button>
    <div id="firebaseui-auth-container"/>
    <div id="login-layout">
      <div class="container">
        <div class="title-area">
          <h1>to do list</h1>
          <span>일정관리앱</span>
        </div>
        <div class="login-area">
          <div>kakao</div>
          <div>naver</div>
          <div>facebook</div>
          <div>google</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

  <!-- <button @click="handleSign">구글 로그인</button> -->

<script>
// import firebase from 'firebase'
// import * as firebaseui from 'firebaseui'

export default {
  name: 'Login',
  data() {
    return {
      formData: {
        id: '',
        pw: ''
      }
    }
  }
  // mounted() {
  //   var uiConfig = {
  //     signInOptions: [
  //       // Leave the lines as is for the providers you want to offer your users.
  //       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //       firebase.auth.FacebookAuthProvider.PROVIDER_ID
  //     ],
  //     // tosUrl and privacyPolicyUrl accept either url string or a callback
  //     // function.
  //     // Terms of service url/callback.
  //     // Privacy policy url/callback.
  //     privacyPolicyUrl: function() {
  //       window.location.assign('<your-privacy-policy-url>')
  //     }
  //   }

  //   // Initialize the FirebaseUI Widget using Firebase.
  //   var ui = new firebaseui.auth.AuthUI(firebase.auth())
  //   // The start method will wait until the DOM is loaded.
  //   ui.start('#firebaseui-auth-container', uiConfig)
  // },
//   methods: {
//     handleSign() {
//       const provider = new firebase.auth.GoogleAuthProvider()
//       // 구글 로그인은 팝업, 리다이렉트 선택
//       // signInWithPopup, signInWithRedirect
//       firebase.auth().signInWithRedirect(provider).then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//         const token = result.credential.accessToken
//         // The signed-in user info.
//         const user = result.user
//         console.log('token', token)
//         console.log('user', user)
//       // ...
//       }).catch(error => {
//         console.log(error)
//       })
//     }
//   }
}
</script>

<style lang="scss">
// .firebaseui-container {
//     background-color: #fff;
//     box-sizing: border-box;
//     -moz-box-sizing: border-box;
//     -webkit-box-sizing: border-box;
//     color: rgba(0,0,0,.87);
//     direction: ltr;
//     font: 16px Roboto,arial,sans-serif;
//     margin: 0 auto;
//     max-width: 360px;
//     overflow: visible;
//     position: relative;
//     text-align: left;
//     width: 100%;
// }

.firebaseui-idp-button {
  direction: ltr;
    font-weight: 500;
    height: auto;
    line-height: normal;
    max-width: 220px;
    min-height: 40px;
    padding: 8px 16px;
    text-align: left;
    width: 100%;
}
</style>
