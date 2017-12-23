<template>
  <div class="hello">
    <!-- Navigation -->
    <div class="container-fluid">
      <div class="header-bottom">
          <div class="bigpi-logo">
            <h1>
              <a href="index.html">AltCoin</a>
            </h1>
          </div>
          <div class="top-nav">
                <nav class="navbar navbar-default">
                  <!-- Collect the nav links, forms, and other content for toggling -->
                  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                      <li class="first-list"><router-link to="/home" class="scroll active">Home</router-link></li>
                      <li><a href="#about" class="scroll">About</a></li>
                      <li><a href="#team" class="scroll">Team</a></li>
                      <li><a href="#rate" class="scroll">Rates</a></li>
                      <li><router-link to="/profile" class="scroll">Profile</router-link></li>
                      <li><a v-on:click="logout" class="scroll">Logout</a></li>
                    </ul>	
                    <div class="clearfix"> </div>
                  </div>	
                </nav>		
          </div>
          <div class="clearfix"> </div>
        </div>
    </div>
    <!-- Content -->
    
    
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  data() {
    console.log(firebase.auth().currentUser)
    return {
      msg: "Welcome to Your Portfolio"

    };
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-bottom {
background: rgb(125,126,125); /* Old browsers */
background: -moz-linear-gradient(top, rgba(125,126,125,1) 0%, rgba(14,14,14,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7d7e7d', endColorstr='#0e0e0e',GradientType=0 ); /* IE6-9 */
  padding: 1em 2em;
  margin-top: -3px;
  width: 99%;
  height: 75px;
  border-radius: 2px;
}
.bigpi-logo {
  text-align: center;
  float: left;
}
.bigpi-logo h1 {
  margin: 0;
}
.bigpi-logo h1 a {
  color: #fff;
  font-size: 1.2em;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/*-- top-nav --*/
.top-nav {
  float: left;
  text-align: center;
  width: 70%;
  margin: 0.8em 0 0 0;
}
.navbar-default {
  border: none !important;
  background: none !important;
  margin: 0 !important;
  min-height: 0 !important;
  padding: 0 !important;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  background: none !important;
}
.top-nav ul {
  padding: 0;
  margin: 0;
  float: none;
}
.top-nav ul li {
  display: inline-block;
  float: none;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  background: none;
  box-shadow: 1px 0px 0px 0px rgba(72, 72, 72, 0);
  outline: none;
  border-right: none;
}
.top-nav ul li a {
  color: #ffffff !important;
  font-size: 1em;
  margin: 0 2em;
  padding: 0;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  border-right: none;
  text-transform: uppercase;
}
.top-nav ul li a.list-border {
  border-left: none;
}
.top-nav ul li a:hover {
  color: #fec303 !important;
}
.top-nav ul li a.active {
  color: #fec303 !important;
  background: none;
}
ul.dropdown-menu {
  background: #fec303;
  box-shadow: 0 0 0;
  border: none;
  margin: 0;
  top: 2.8em;
  left: 0px;
  min-width: 106px;
}
ul.dropdown-menu li {
  width: 100% !important;
  margin: 0 !important;
}
ul.dropdown-menu li:after {
  background: none !important;
}
.dropdown-menu > li > a {
  display: block;
  padding: 0.5em 1em !important;
  text-align: center;
  clear: both;
  margin: 0.2em 0 !important;
  font-weight: normal;
  line-height: 1.42857143;
  color: #fff !important;
  border: none !important;
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  background: #ffffff;
}
.dropdown-submenu {
  position: relative;
}

.dropdown-submenu > .dropdown-menu {
  top: 0;
  left: 103%;
  margin-top: -6px;
  margin-left: -1px;
  -webkit-border-radius: 0 6px 6px 6px;
  -moz-border-radius: 0 6px 6px;
  border-radius: 0 6px 6px 6px;
}

.dropdown-submenu:hover > .dropdown-menu {
  display: block;
}

.dropdown-submenu > a:after {
  display: block;
  content: " ";
  float: right;
  width: 0;
  height: 0;
  border-color: transparent;
  border-width: 5px 0 5px 5px;
  margin-top: 5px;
  margin-right: -10px;
}

.dropdown-submenu:hover > a:after {
  border-left-color: #fff;
}

.dropdown-submenu.pull-left {
  float: none;
}

.dropdown-submenu.pull-left > .dropdown-menu {
  left: -100%;
  margin-left: 10px;
  -webkit-border-radius: 6px 0 6px 6px;
  -moz-border-radius: 6px 0 6px 6px;
  border-radius: 6px 0 6px 6px;
}
/*-- //top-nav --*/
</style>
