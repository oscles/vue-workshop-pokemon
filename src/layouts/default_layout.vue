<template>
    <div class="base-layout">
        <header-partial></header-partial>

        <slot name="filters"></slot>

        <main class="main-section mb-5">
            <div class="container">
                <slot name="content"></slot>
            </div>
        </main>
        <footer-partial></footer-partial>
    </div>
</template>


<script>
import HeaderPartial from '@/partials/header_partial'
import FooterPartial from '@/partials/footer_partial'
export default {
    name: 'DefaultLayout',
    components: {
        HeaderPartial,
        FooterPartial
    }
}
</script>