<template>
  <div class="notfound">
    <div class="error">
      <div class="error-code m-b-10 m-t-20">404 <i class="fa fa-warning"></i></div>
      <h3 class="font-bold">We couldn't find the page..</h3>
      <div class="error-desc">
        Sorry, but the page you are looking for was either not found or does not exist. <br/> Try refreshing the page or click the button below to go back to the Homepage.
        <div>
          <a class="scroll"><i class="fa fa-arrow-left"></i><router-link to="/home" class="a-link">Go back to Homepage</router-link>  </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .notfound {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -150px;
    width: 300px;
    height: 300px;
  }
  
  .error {
    margin: 0 auto;
    text-align: center;
  }
  
  .error-code {
    bottom: 60%;
    color: white;
    font-size: 96px;
    line-height: 100px;
  }
  
  .font-bold {
    color: white;
  }
  
  .error-desc {
    font-size: 12px;
    color: white;
  }
  
  .m-b-10 {
    margin-bottom: 10px !important;
  }
  
  .m-b-20 {
    margin-bottom: 20px !important;
  }
  
  .m-t-20 {
    margin-top: 20px !important;
  }
</style>
