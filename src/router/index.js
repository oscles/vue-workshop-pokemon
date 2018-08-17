import Vue from 'vue'
import Router from 'vue-router'
import HomeViewPokemon from '@/views/pokemon/home'
import DetailPokemon from '@/views/pokemon/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Home',
      component: HomeViewPokemon,
    },
    {
      path: '/detail/:pokemonName',
      name:'DetailPokemon',
      component: DetailPokemon,
    }
  ]
})
