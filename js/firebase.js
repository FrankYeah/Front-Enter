  // Set the configuration for your app
  // TODO: Replace with your project's config object
  let config = {
    apiKey: "AIzaSyAwCTQFoTPQ5C6rugWB1S7UhkCoeApeQRw",
    authDomain: "front-enter.firebaseapp.com",
    databaseURL: "https://front-enter.firebaseio.com",
    projectId: "front-enter",
    storageBucket: "front-enter.appspot.com",
    messagingSenderId: "1043952840433"
  };

  firebase.initializeApp(config);

  let database = firebase.database();
  let storage = firebase.storage();
  let storageRef = storage.ref();

