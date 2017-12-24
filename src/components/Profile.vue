<template>
  <div class="card">
    <img v-bind:src="photoURL" alt="John" class="profile-picture">
    <h1>{{ displayName }}</h1>
    <p class="title">{{ email }}</p>
    <a href="#"><i class="fa fa-dribbble"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-facebook"></i></a>
    <p><button>Contact</button></p>
  </div>
</template>

<script>
  import firebase from "firebase";
  import toastr from "toastr";
  
  export default {
    name: "UserProfile",
    data: function() {
      console.log(firebase.auth().currentUser)

      return {
        displayName: firebase.auth().currentUser.displayName,
        photoURL: firebase.auth().currentUser.photoURL,
        email: firebase.auth().currentUser.email,
        error: ""
      };
    },
    methods: {}
  };
</script>

<style scoped>
.profile-picture{
  height: 216px;
  width: 216px;
}
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: auto;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 500px;
    width: 720px;
    margin: -250px 0 0 -360px;
  }
  
  .title {
    color: grey;
    font-size: 18px;
  }
  
  button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }
  
  a {
    text-decoration: none;
    font-size: 22px;
    color: black;
  }
  
  button:hover,
  a:hover {
    opacity: 0.7;
  }
</style>
