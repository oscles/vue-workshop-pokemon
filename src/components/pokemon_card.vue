<template>
    <div class="pokedex-card">
        <img class="pokedex-card-img" :src="pokemon.ThumbnailImage"/>
        <div class="pokedex-card-details">
            <small class="pokedex-card-details__number">
                #{{pokemon.number}}
            </small>

            <h4 class="pokedex-card-details__title">
                {{pokemon.name}}
            </h4>

            <div class="pokedex-card-details__types">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PokemonCard',
    props: {
        pokemon:{
            type:Object,
            required:true
        }
    }
}
</script>