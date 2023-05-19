<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data () {
    return {
      coins: [],
      activeCoin: '',
      coinName: '',
      coinList: [],
      tipsArray: [],
      cstErr: false
    }  
  },
  created() {
    if(JSON.parse(localStorage.getItem('coins')!== null)){
          this.coins = JSON.parse(localStorage.getItem('coins'))
    }
    fetch('https://min-api.cryptocompare.com/data/all/coinlist?summary=true')
    .then(response => response.json())
    .then(data => {
      for(let item in data['Data']){
        this.coinList.push(data['Data'][item])
      }
    })
    if(this.coins.length){
        this.coins.forEach(coin => {
         this.updatePrice(coin.name)
        })
    }
  },
  methods: {
    addCoin(tipName){
      this.tipsArray = []
      const newCoin = {
        name: tipName,
        price: '-',
      }
      this.updatePrice(tipName)
      this.coins.push(newCoin)
      this.coinName = ''
      localStorage.setItem('coins', JSON.stringify(this.coins))
    },
    deleteCoin(coin){
      this.coins = this.coins.filter(c => c.name !== coin)
      localStorage.setItem('coins', JSON.stringify(this.coins))
    },
    makeActiveCoin(coin){
      coin == this.activeCoin ? this.activeCoin = '' : this.activeCoin = coin
    },
    showTips(){
      this.tipsArray = []
      if(this.coinName.length > 1){
       this.tipsArray = this.coinList.filter(coin=>coin["Symbol"] == (this.coinName).toUpperCase() || coin["Symbol"].includes((this.coinName).toUpperCase()))
        this.tipsArray = this.tipsArray.splice(0, 4)
      }
    },
    clearStorage(){
      localStorage.clear()
    },
    validation(tipname){
      if(tipname.hasOwnProperty("Symbol")){
        if(this.coins.length > 0){      
          const find = this.coins.find(coin=> coin.name === tipname["Symbol"])   
          if(find == undefined){
            this.addCoin(tipname["Symbol"])
          } else {
            this.customError("Данная монета уже существует в вашем списке")
          }
        } else {
          this.addCoin(tipname["Symbol"])
        }
      } else if (this.coinName.length > 0) {
        if(this.coins.length > 0){
          const find = this.coins.find(coin=> coin.name === this.coinName.toUpperCase())   
          if (find == undefined){
            this.addCoin(this.coinName.toUpperCase())
          } else {
            this.customError("Данная монета уже существует в вашем списке")
          }
        } else {
          this.addCoin(this.coinName.toUpperCase())
        }
      }
      this.coinName = ''
    },
    customError(msg){
      this.cstErr = msg
      setTimeout(()=> {this.cstErr = false}, 5000)
    },
    updatePrice(currencyName){
      setInterval(async ()=> {
        const resp = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${currencyName}&tsyms=USD&api_key=59adcc39eb6473933a0b437e8dc72bd33dd77522a66c6145b6494295459c7d79`)
        const data = await resp.json()
        if(data["Response"] !== "Error"){
        data.USD > 1 && data.USD ? data.USD = data.USD.toFixed(2) : data.USD = data.USD.toPrecision(2)
        this.coins.find(coin=> coin.name == currencyName) ? this.coins.find(coin=> coin.name == currencyName).price = data.USD : ''
        }
      }, 5000) 
    }
  }
}
</script>

<template>
  <div class="input-wrap">
    <input type="text" name="coinSearch" v-model="coinName" @input="showTips"/>
    <p class="cstErr" v-if="cstErr">{{cstErr}}</p>
    <template v-if="tipsArray.length">
      <div class ="tips-wrap">
    <div v-for="tip in tipsArray" class="tips" @click="validation(tip)">{{tip["Symbol"]}}</div>
      </div>
    </template>
    <button class="addBtn" type="submit" @click.prevent="validation">Добавить</button>
  </div>
  <template v-if="coins.length">
  <hr>
  <div class="coins-wrap">
    <template v-for="coin in coins">
      <div class="coin" @click="makeActiveCoin(coin.name)" :class="[activeCoin == coin.name ? 'active' : '']">
        <div>{{coin.name}} - USD</div>
        <div>{{coin.price}}</div>
        <button @click.stop="deleteCoin(coin.name)">Удалить</button>
      </div>
    </template>
  </div>
  <hr>
  <div class="coins-graphic"></div>
  </template>
  <button @click="clearStorage">Очистить ЛС</button>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.coins-wrap {
  display: flex;
  width: 90%;
  justify-content: space-between;
}
.coin {
  width: 250px;
  height: 250px;
  border: 0.01px solid rgba(102, 102, 102, 0.185);
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px;
  color: gray;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-around;
  transition: 1s ease-in-out;
}
.coin:hover {
  cursor: pointer;
}
.active {
  border: 1px solid darkviolet;
}
.input-wrap {
  width: 500px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.tips-wrap {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.tips {
 padding: 3px 5px;
 border: 1px solid purple;
 border-radius: 5px;
  margin: 5px;
}
.tips:hover {
  cursor: pointer;
  background-color: lightgrey;
}
input[type="text"]{
  width: 100%;
  padding: 10px 15px;
}
#app {
  display: flex;
  align-content: center;
  flex-flow: column wrap;
  
}
.addBtn {
  background-color: white;
  padding: 10px 0;
}
.addBtn:hover {
  cursor: pointer;
  background-color: gainsboro;
}
.cstErr{
  width: 100%;
  background-color: rgba(255, 0, 0, 0.226);
  padding: 5px 10px;
}
</style>
