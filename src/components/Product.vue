<template>
    <body class="overflow-y-hidden">
        
    <img class="w-full" src="https://i.ibb.co/x2qt9Vp/hero.png" alt="">

     <div class="bg-gray-50 text-center lg:py-10 md:py-8 py-6">
                <p class="w-10/12 mx-auto md:w-full font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">Sold in packs</p>
            
            </div>


            <div class="lg:px-20 lg:py-16 px-5 py-5 grid lg:grid-cols-3 grid-cols-2  gap-4">
<div class="rounded hover:shadow lg:p-10 p-4" >
<button @click="Live='VodKa'" class="">
<img class="w-48" src="https://i.ibb.co/r5nSBnT/vod.png" alt="vod">
</button>
<h2 class="">VodKa</h2>
<p class="">k320</p>
</div>
<div class="rounded hover:shadow lg:p-10 p-4">
<img class="w-48" src="https://i.ibb.co/PtRNBtm/shot.png" alt="shot">
<h2 class="">Double shot</h2>
<p class="">k250</p>
</div>
<div class="rounded hover:shadow lg:p-10 p-4">
<img class="w-48" src="https://i.ibb.co/tLTMXZ9/gen.png" alt="gen">
<h2 class="">Genesis Red Wine</h2>
<p class="">k240</p>
</div>
<div class="rounded hover:shadow lg:p-10 p-4">
<img class="w-48" src="https://i.ibb.co/PtRNBtm/shot.png" alt="shot">
<h2 class="">Double shot</h2>
<p class="">240</p>
</div>
<div class="rounded hover:shadow lg:p-10 p-4">
<img class="w-48" src="https://i.ibb.co/r5nSBnT/vod.png" alt="vod">
<h2 class="">Vodka</h2>
<p class="">320</p>
</div>
<div class="rounded hover:shadow lg:p-10 p-4">
<img class="w-48" src="https://i.ibb.co/tLTMXZ9/gen.png" alt="gen">
<h2 class="">Genesis Red Wine</h2>
<p class="">K240</p>
</div>
</div>
           
        
    </body>
</template>

<script>


export default {
    name: "Product",


    data() {
        return {
        }
    },
    methods: {

    },
    mounted() {}
};
</script>

<style scoped>

</style>
