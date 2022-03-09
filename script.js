const firebaseConfig = {
    apiKey: "*************************************",
    authDomain: "************************",
    projectId: "********",
    storageBucket: "**************",
    messagingSenderId: "***********",
    appId: "******************************************"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);


  // if you want to save data in firebase database in below you write this code..

  function saveDataFirebase()
  {
      var name = document.getElementById("namebox")
      var rollno = document.getElementById("rollbox")
      var email = document.getElementById("emailbox")

      var student1=
      {
          name: namebox.value,
          rollno: rollbox.value,
          email: emailbox.value,

      }

    //   console.log(student);

    firebase.database().ref('Data').push(student)

  }

  // if you want to create own primary key 
  // which user can access his data you can create your own key. 
  // There are two ways which you create keys 

  function saveDataFirebase()
  {
      var name = document.getElementById("namebox")
      var rollno = document.getElementById("rollbox")
      var email = document.getElementById("emailbox")
      
      var student2=
      {
        name: namebox.value,
        rollno: rollbox.value,
        email: emailbox.value,
        
      }

      // 1) First way to create own primary key

      var key = Math.random() * 18251851651;
      // console.log(key);
      firebase.database().ref('Data/' + key.toFixed()).set(student2)


      // 2) Second way to create own primary key

      var key = firebase.database().ref('Data').push().key;
      // console.log(key);
      firebase.database().ref('Data/' + key).set(student2)

  }

  // if you want to remove single user data from firebase then..

  function removeDataFirebase(){
    firebase.database().ref('Data/-MxiNF5y4ZJXh154-3KI').remove()
  }

  removeDataFirebase();


  // if you want to remove Whole data from firebase then..


  function removeDataFirebase(){
    firebase.database().ref('Data').remove()
  }

  removeDataFirebase();


  // There are two ways which you get data from firebase database

  // 1)

  function getDatafirebase(){
    firebase.database().ref('Data').on('child_added',(data)=>{
      console.log(data.val());
    })
  }

  getDatafirebase()

  // 2)

  function getDatafirebase(){
    firebase.database().ref('Data').once('value',function (data){
      console.log(data.val());
    })
  }

  getDatafirebase()


  // if you edited something on user-data in firebase then..

  function editDataFirebase(){
    firebase.database().ref('Data/-MxiVlwSRngIpZJO-N5x').set({
      key: '-MxiVlwSRngIpZJO-N5x',
      name: 'Basit Ahmed',
      age: 21
    })
  }

  editDataFirebase()