<template>
<div class=" z-1000">
  <body class="overflow-hidden dark:bg-gray-900 absolute z-50 top-0">
        <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class="flex justify-center items-center lg:flex-row flex-col gap-8">
                <!-- Description Div -->
       
                <div class="w-full sm:w-96 mt-14 rounded shadow p-4 bg-white md:w-8/12 lg:w-6/12 items-center">
                   <div class="flex">
                    <p class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600  dark:text-white">Treat / Cake / vanilla</p>
                    <div @click="scrollToAnchorPoint('product')" class="focus:outline-none focus:ring-2 focus:ring-gray-800 pl-24 rounded">
                     <RouterLink to="/">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M18 6L6 18" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M6 6L18 18" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                     </RouterLink>
                    </div>
                   </div> 
                    <h2 class="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white mt-4">vanilla cake</h2>
      
                    <div class="flex flex-row justify-between mt-5">
                       <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1.svg" alt="stars">
                       <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1dark.svg" alt="stars">
                        <p class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 dark:text-white duration-100 cursor-pointer">22 reviews</p>
                    </div>
      
                    <p class="font-normal text-base leading-6 text-gray-600  mt-7">Indulge in the heavenly flavor of our Vanilla Cakes, baked fresh and delivered straight to your doorstep.</p>
                    <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 dark:text-white">K 450.89</p>
      
                    <div class="lg:mt-11 mt-10">
                        <div class="flex flex-row justify-between">
                            <p class="font-medium text-base leading-4 text-gray-600 ">Select quantity</p>
                            <div class="flex">
                                <span @click="minus()" class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">-</span>
                                <input id="counter" v-model="counter" aria-label="input" class="border dark:text-white border-gray-300 dark:bg-transparent h-full text-center w-14 pb-1" type="text"  />
                                <span @click="plus()" class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1">+</span>
                            </div>
                        </div>
                       
                    </div>
      
                     <a a href="https://wa.me/260978700956"> <button class="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">Buy</button></a>
                </div>
      
                <!-- Preview Images Div For larger Screen-->
      
                <div class="w-full -mt-6 sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div class="w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
                        <img class="w-40" src="https://i.ibb.co/WHXmQns/van2.png" alt="shot" />
                    </div>
                    <div class="w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                        <div class="bg-gray-100 flex justify-center items-center py-4">
                            <img class="w-40" src="https://i.ibb.co/WHXmQns/van2.png" alt="shot 1" />
                        </div>
                        <div class="bg-gray-100 flex justify-center items-center py-4">
                            <img class="w-40" src="https://i.ibb.co/WHXmQns/van2.png" alt="shot 2" />
                        </div>
                       
                    </div>
                </div>
            </div>
            <div class="flex justify-center bg-white p-4 rounded shadow items-center w-full">
                <div class="w-full sm:w-96 md:w-8/12 lg:w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-28 sm:gap-x-6 sm:gap-y-12 gap-y-12 sm:mt-14 mt-10">
                    
                    
                </div>
            </div>
        </div>
    </body>
    </div>
</template>

<script>
export default {
    data(){
        return{
            counter:1,
            rotateimg:false
        }
    },
    methods:{
          plus() {
                this.counter
                this.counter=this.counter + 1;
            },
      
             minus() {
                var preValue = document.getElementById("counter").value;
                if (parseInt(preValue) != 0) {
                    this.counter=this.counter - 1;
                }
            },
      
             rotate() {
                if(this.rotateimg==true){
                    this.rotateimg=false
                }else{
                    this.rotateimg=true
                }
            }
    }
}
</script>

<style>

</style>