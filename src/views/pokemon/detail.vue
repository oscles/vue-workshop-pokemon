<script>
import DefaultLayout from '@/layouts/default_layout'

export default {
    name: 'DetailPokemon',
    render(h){
        let pokemon = this.$route.params.pokemon;

        if(!pokemon){
            return this.$router.push({
                name:'Home'
            });
        } else {
            return <DefaultLayout>
                <section slot="content" class="pokedex-item mt-5">
                    <div class="row">
                        <div class="col-sm-12">
                            <h1 class="pokedex-detail__title text-center mb-5">
                                {pokemon.name}
                                <span class="text-muted">#{pokemon.number}</span>
                            </h1>
                            <hr/>
                        </div>
                        <div class="row">
                            <div class="col-md-5">
                                <img src={pokemon.ThumbnailImage}  class="pokedex-detail__image"/>
                            </div>
                        </div>
                    </div>
                </section>
            </DefaultLayout>
        }
    }
}  
</script>

