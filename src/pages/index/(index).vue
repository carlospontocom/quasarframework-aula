<template>
  <q-page class="text-center">
     <h1>
      Bem-vindo!
     </h1>
     <h2>Site fullstack com <strong>VUEJS!</strong></h2>

     <ul>
        <li v-for="item in dados" :key="item.id">
          <span :style="{backgroundColor: item.cor}" class="tag">{{item.texto}}</span>
        </li> 
      </ul>
  </q-page>
</template>

<script setup>
const dados = [
  {
    id:"i10",
    texto:"Gestão de usuários",
    cor:"green"
  },{
    id:"i1j",
    texto:"Gestão de usuários",
    cor:"orange"
  },{
    id:"i11",
    texto:"Carteira digital",
    cor:"red"
  },
]
</script>

<style scoped>
ul{
  display:flex;
  gap:15px;
  flex-wrap:wrap;
  margin:0 auto;
  max-width: 600px;
  list-style:none;
}

.tag{
  padding:8px;
  border-radius:5px;
  color:white;
}
</style>
