<template>
    <default-layout>
        <section slot="filters" class="pokedex-filters mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-6 ml-auto mr-auto">
                        <div class="text-center">
                            
                            <label>Search to your pokemon favority:</label>
                            
                            <input type="text"
                            class="form-control"
                            placeholder="Insert your pokemon"
                            v-model="filter">

                            <small id="emailHelp" class="form-text text-muted">
                                You can Actually to make searching for name
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section slot="content" class="pokedex-items">
            <div class="row">
                <div class="col-md-4"
                v-for="(item, index) in filteredPokemon"
                :key="index"
                @click="gotToDetail(item)">
                <pokemon-card :pokemon="item"></pokemon-card>
                </div>
            </div>
        </section>
    </default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/default_layout'
import {getPokemon} from '@/services/pokemon'
import PokemonCard from "@/components/pokemon_card";

export default {
    name: 'HomeViewPokemon',
    data() {
        return {
            pokemon:[],
            filter: ''
        }
    },
    created(){
        getPokemon().then(response => {
            this.pokemon = response.data
        }).catch(err => console.log(err));
    },
    computed:{
        filteredPokemon() {
            return this.filter === '' ? this.pokemon :
            this.pokemon.filter(item => {
                return item.name.toLowerCase().includes(this.filter);
            });
        }
    },
    methods:{
        gotToDetail(pokemon){
            this.$router.push({
                params: {
                    pokemonName:pokemon.slug,
                    pokemon
                },
                name:'DetailPokemon'
            });
        }
    },
    components:{
        DefaultLayout,
        PokemonCard
    }
}
</script>