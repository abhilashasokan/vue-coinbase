<template>
  <div class="currentMarket">
  
    <div id="crypto-container" v-for="(value, key) in this.availableCoins">
      <span class="left"> {{ value.CoinName }}</span>
      <p>
      <img v-bind:src="BaseImageUrl + value.ImageUrl" />
      </p>
    </div>
  
  
  </div>
</template>

<script>
  import axios from 'axios'
  
  export default {
    name: 'HelloWorld',
    data: () => ({
      cryptos: [],
      errors: [],
      coins: "BTC,ETH,DASH,IOT",
      BaseImageUrl: '',
      availableCoins: [],
      coinList: [],
    }),
    created() {
  
      //Get the list of all coins availabe - https://www.cryptocompare.com/api/data/coinlist/
      axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
        .then(response => {
          this.availableCoins = response.data.Data
          this.BaseImageUrl = response.data.BaseImageUrl
          // let arr = Object.keys(this.availableCoins).map((k) => this.availableCoins[k])
          // var tempCoinList = []
          // for (let entry of arr) {
          //   tempCoinList[entry['Id']] = [entry['CoinName'], this.BaseImageUrl + entry['ImageUrl'], entry['FullName'], entry['Symbol']]
          // }
          // this.coinList = tempCoinList
          // console.log(this.coinList)
        })
        .catch(e => {
          this.errors.push(e)
        })
  
      //Load all cryto values to dashboard
      // axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms='+this.coins+'&tsyms=USD')
      //   .then(response => {
      //     this.cryptos = response.data
      //     console.log(response)
      //   })
      //   .catch(e => {
      //     this.errors.push(e)
      //   })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .currentMarket {
    margin-top: 10px;
  }
  
  div#crypto-container {
    background: white;
    width: 224px;
    height: 260px;
    padding: 1em;
    box-shadow: 1px 1px 0 lightgrey;
    text-align: left;
    float: left;
    margin-right: 1em;
    margin-top: 1em;
  }
  
  span.left {
    font-weight: bold;
    color: darkslategrey
  }
  
  span.right {
    float: right;
  }
  
  img {
    width: 190px;
    height: 190px;
    clear: both;
  }
</style>
