<template>
  <div class="user-profile centerelem">
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
    <div class="container">
      <div class="row">
        <div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
          <div class="well profile">
            <div class="col-sm-12">
              <div class="col-xs-12 col-sm-8">
                <h2>Nicole Pearson</h2>
                <p><strong>About: </strong> Web Designer / UI. </p>
                <p><strong>Hobbies: </strong> Read, out with friends, listen to music, draw and learn new things. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from "firebase";
  import toastr from "toastr";
  
  export default {
    name: "UserProfile",
    data: function() {
      return {
        error: ""
      };
    },
    methods: {
  
    }
  };
</script>

<style scoped>
  .user-profile{
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -300px 0 0 -300px;
    width: 600px;
    height: 600px;
    background-color: rgb(54, 54, 54);
    border-radius: 5px;
    padding: 25px;
  }
  .profile {
    min-height: 355px;
    display: inline-block;
  }
  
  figcaption.ratings {
    margin-top: 20px;
  }
  
  figcaption.ratings a {
    color: #f1c40f;
    font-size: 11px;
  }
  
  figcaption.ratings a:hover {
    color: #f39c12;
    text-decoration: none;
  }
  
  .divider {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .emphasis {
    border-top: 4px solid transparent;
  }
  
  .emphasis:hover {
    border-top: 4px solid #1abc9c;
  }
  
  .emphasis h2 {
    margin-bottom: 0;
  }
  
  span.tags {
    background: #1abc9c;
    border-radius: 2px;
    color: #f5f5f5;
    font-weight: bold;
    padding: 2px 4px;
  }
  
  .dropdown-menu {
    background-color: #34495e;
    box-shadow: none;
    -webkit-box-shadow: none;
    width: 250px;
    margin-left: -125px;
    left: 50%;
  }
  
  .dropdown-menu .divider {
    background: none;
  }
  
  .dropdown-menu>li>a {
    color: #f5f5f5;
  }
  
  .dropup .dropdown-menu {
    margin-bottom: 10px;
  }
  
  .dropup .dropdown-menu:before {
    content: "";
    border-top: 10px solid #34495e;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    position: absolute;
    bottom: -10px;
    left: 50%;
    margin-left: -10px;
    z-index: 10;
  }
</style>
