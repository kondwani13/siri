<template>
    <div class="lg:px-6 xl:px-0">
        <div ref="home" class="container mx-auto relative z-20">
            <nav class="w-full lg:px-16 absolute">
                <div class="hidden lg:flex w-full f-f-p justify-between items-center py-6 relative">
                    <div class="w-2/3">
                     <img class="w-24" src="https://i.ibb.co/Nj4g1Jf/logow.png" alt="logo" >
                    </div>
                    <div class="md:w-1/2 xl:w-1/3">
                        <ul class="flex justify-between w-full items-center text-gray-600">
                            <li class="border-b-4 border-yellow-300 pb-1">
                                <button @click="scrollToAnchorPoint('home')" class="" >Home</button>
                            </li>
                            <li class="border-b-4 border-transparent pb-1">
                                <button @click="scrollToAnchorPoint('product')" class="" >Our products</button>
                            </li>
                            <li class="border-b-4 border-transparent pb-1">
                                <button @click="scrollToAnchorPoint('order')" class="" >Order</button>
                            </li>
                            <li class="border-b-4 border-transparent pb-1">
                                <button @click="scrollToAnchorPoint('contact')" class="" >Contact</button>
                            </li>
                            <li class="border-b-4 border-transparent pb-1">
                                <button @click="scrollToAnchorPoint('about')" class="" >About us</button>
                            </li>
                            <li class="border-b-4 border-transparent pb-1">
                                <button @click="scrollToAnchorPoint('faq')" class="" >FAQ</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav class="lg:hidden">
                <div class="flex py-6 justify-between items-center px-4">
                    <div>
                        <img class="w-20 z-50" src="https://i.ibb.co/Nj4g1Jf/logow.png" alt="logo" >
                    </div>
                    <div class="visible flex items-center">
                        <ul id="list" class="hidden p-3 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 z-40">
                            <li class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-yellow-300 focus:text-yellow-300 focus:outline-none">
                                <button @click="scrollToAnchorPoint('home')" class="ml-2 font-bold" >Home</button>
                            </li>
                            <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-yellow-300 focus:text-yellow-300 focus:outline-none flex justify-center" @click="dropdownHandler(this)">
                               <button @click="scrollToAnchorPoint('product')" class="ml-2 font-bold text-left" >Our product</button>
                            </li>
                            <li class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-yellow-300 flex items-center focus:text-yellow-300 focus:outline-none">
                                <button @click="scrollToAnchorPoint('order')" class="ml-2 font-bold" >Order</button>
                            </li>
                            <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-yellow-300 focus:text-yellow-300 focus:outline-none flex justify-center" @click="dropdownHandler(this)">
                               <button @click="scrollToAnchorPoint('contact')" class="ml-2 font-bold text-left" >Contact</button>
                            </li>
                            <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-yellow-300 focus:text-yellow-300 focus:outline-none flex justify-center" @click="dropdownHandler(this)">
                              <button @click="scrollToAnchorPoint('about')" class="ml-2 font-bold text-left" >About us</button>
                            </li>
                            <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-yellow-300 focus:text-yellow-300 focus:outline-none flex justify-center" @click="dropdownHandler(this)">
                              <button @click="scrollToAnchorPoint('faq')" class="ml-2 font-bold text-left" >FAQ</button>
                            </li>
                        </ul>
                        <div class="xl:hidden">
                            <svg id="open" @click="MenuHandler(true)" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" class="show-m-menu icon icon-tabler icon-tabler-menu" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <line x1="4" y1="8" x2="20" y2="8"></line>
                                <line x1="4" y1="16" x2="20" y2="16"></line>
                            </svg>
                            <div id="close" class="hidden close-m-menu" @click="MenuHandler(false)">
                                <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    <div  class="lg:pt-40 z-20 py-8">
       <slider />
    </div>   
     
    </div>

    <div class="pb-20">
      <div style="background-color:#d29146;" class="">    
        <div class="mx-auto bg-gradient-to-l from-orange-400 to-orange-500 lg:h-96 h-72">
          <div class="mx-auto container w-full flex flex-col justify-center items-center">
            <div class="flex justify-center items-center flex-col">
              <div class="lg:mt-20 mt-9">
               
                <h2 class="lg:text-3xl pb-2 text-center md:text-2xl text-2xl font-black leading-10 text-white">Online cake store</h2>
                
                
                <h2 class="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-white">Taste the difference</h2>
              </div>
              <div class="mt-5 mx-2 md:mx-0 text-center">
                <p class="lg:text-lg md:text-base leading-6 text-sm text-white">Our primary catalog 👇🏽</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div ref="product" class="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
          <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 md:gap-y-6">
            <div class="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <div class=" text-center"><img class="w-16" src="https://i.ibb.co/CWxZ4h7/party.png" alt=""></div>
              <p class="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Party-cakes</p>
            </div>
            <div class="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <div class=" text-center"><img class="w-16" src="https://i.ibb.co/bHzqm9T/wed.png" alt=""></div>
              <p class="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Wedding-cakes</p>
            </div>
            <div class="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <div class=" text-center"><img class="w-16" src="https://i.ibb.co/HDMH5cH/cup.png" alt=""></div>
              <p class="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Cupcakes</p>
            </div>
            <div class="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <div class=" text-center"><img class="w-16" src="https://i.ibb.co/TBGqjjN/birth.png" alt=""></div>
              <p class="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Birthday-cakes</p>
            </div>
          </div>
        </div>
        </div>
        <feature />

    <img class="w-full -mt-5" src="https://i.ibb.co/425WxH3/c123.png" alt="">

     <div ref="order" class="bg-white text-center p-4">
                <p class="w-10/12 mx-auto md:w-full font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800"></p>
            
            </div>

            
            <div class="lg:px-20 lg:py-16 px-5 py-5 grid lg:grid-cols-3 grid-cols-2  gap-4">
<div @click="scrollToAnchorPoint('home')" class="rounded hover:shadow lg:p-10 p-4" >
<RouterLink to="/choc">
<img class="w-40" src="https://i.ibb.co/xXb8YDS/choc.png" alt="choc">
<h2 class="">Chocolate cake</h2>
<p class="">k320</p>
</RouterLink>
</div>
<div @click="scrollToAnchorPoint('home')" class="rounded hover:shadow lg:p-10 p-4">
<RouterLink to="/vanila">
<img class="w-40" src="https://i.ibb.co/WHXmQns/van2.png" alt="vanilla">
<h2 class="">vanilla cake</h2>
<p class="">k250</p>
</RouterLink>
</div>
<div @click="scrollToAnchorPoint('home')"  class="rounded hover:shadow lg:p-10 p-4">
<RouterLink to="/lem">
<img class="w-40" src="https://i.ibb.co/nCpNmR2/lem2.png" alt="gen">
<h2 class="">Lemon cake</h2>
<p class="">k240</p>
</RouterLink>
</div>
<div @click="scrollToAnchorPoint('home')" class="rounded hover:shadow lg:p-10 p-4">
<RouterLink to="/strew">
<img class="w-40" src="https://i.ibb.co/y6gKwHV/straw2.png" alt="Strawberry">
<h2 class="">Strawberry cake</h2>
<p class="">240</p>
</RouterLink>
</div>
<div @click="scrollToAnchorPoint('home')" class="rounded hover:shadow lg:p-10 p-4">
<RouterLink to="/velvet">
<img class="w-40" src="https://i.ibb.co/wYwML9B/velv2.png" alt="velvet">
<h2 class="">Velvet cake</h2>
<p class="">320</p>
</RouterLink>
</div>
<div @click="scrollToAnchorPoint('home')" class="rounded hover:shadow lg:p-10 p-4">
<RouterLink to="/choc">
<img class="w-40" src="https://i.ibb.co/xXb8YDS/choc.png" alt="gen">
<h2 class="">Chocolate cake</h2>
<p class="">k240</p>
</RouterLink>
</div>
</div>
<div ref="about" class="">
<stats />
</div>
<div ref="faq" class="">
<faq />
</div>

   <div ref='contact' class="container mx-auto pt-16">
        <div class="lg:flex">
            <div style="background-color:#d29146;" class="xl:w-2/5 lg:w-2/5 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
                <div class="xl:w-5/6 xl:px-0 px-8 mx-auto">
                    <h1 class="xl:text-4xl text-3xl pb-4 text-white font-bold">Get in touch</h1>
                    <p class="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">Got a question about us? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to assist you.</p>
                    <div class="flex pb-4 items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                            </svg>
                        </div>
                        <p class="pl-4 text-white text-base">+260 978 700 956</p>
                    </div>
                    <div class="flex items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                        </div>
                        <p class="pl-4 text-white text-base">caramelcakes@gmail.com</p>
                    </div>
                    <p class="text-lg text-white pt-10 tracking-wide">
                        P.O. BOX 50015, Lusaka, Zambia
                        <br />
                        .
                    </p>
                    <a href="javascript:void(0)">
                        <a  href="" class="text-white pt-16 font-bold tracking-wide underline">Location📌</a>
                    </a>
                </div>
            </div>
            <div style="z-index: 50;" class="relative xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
                <form @submit.prevent="sendEmail" class="bg-white py-4 px-8 rounded-tr rounded-br">
                    <h1 style="color:#d29146;" class="text-4xl font-extrabold mb-6">Enter Details</h1>
                    <div class="block xl:flex w-full flex-wrap justify-between mb-6">
                        <div class="w-2/4 max-w-xs mb-6 xl:mb-0">
                            <div  class="flex flex-col">
                                <label class="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Full Name</label>
                                <input name="name" type="text"  v-model="name"  class="focus:outline-none focus:border focus:border-black font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="" />
                            </div>
                        </div>
                        <div style="z-index: 50;" class="w-2/4 max-w-xs xl:flex xl:justify-end">
                            <div  class="flex flex-col">
                                <label class="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Email</label>
                                <input required name="email" v-model="email" type="email" class="focus:outline-none focus:border focus:border-black font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div class="flex w-full flex-wrap">
                        <div class="w-2/4 max-w-xs">
                            <div  class="flex flex-col">
                                <label class="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Phone</label>
                                <input name="phone" type="tel" v-model="phone" class="focus:outline-none focus:border focus:border-black font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div style="z-index: 50;" class="w-full mt-6">
                        <div  class="flex flex-col">
                            <label class="text-sm font-semibold text-gray-800 mb-2">Message</label>
                            <textarea placeholder="" name="message"  v-model="message" class="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-black" rows="8" ></textarea>
                        </div>
                        <button style="background-color:#d29146;"  type="submit" value="Send" class="focus:outline-none bg-black transition duration-150 ease-in-out hover:bg-yellow-300 rounded text-white px-8 py-3 text-sm leading-6">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <footer  class="overflow-y-hidden bottom-0 pb-0">
    <div class="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4  py-12">
      <div class="flex flex-col items-center justify-center">
        <div class="flex items-center">
          <img class="w-32" src="https://i.ibb.co/Nj4g1Jf/logow.png" alt="logo" >
        </div>
        <div class="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
          <button  @click="scrollToAnchorPoint('home')" class="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">Home</button>
          <button  @click="scrollToAnchorPoint('product')" class="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">Product</button>
          <button  @click="scrollToAnchorPoint('order')" class="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">Order</button>
          <button  @click="scrollToAnchorPoint('about')" class="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">About</button>
        </div>
        <div class="flex items-center gap-x-8 mt-6">
          <a href="https://web.facebook.com/BDreamers01" aria-label="facebook" class="focus:ring-2 focus:ring-offset-2 focus:ring-2 focus:ring-gray-800 focus:outline-none rounded-full">
            <svg class="fill-current text-gray-800 hover:text-gray-500" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 11.0631C21.5 5.26467 16.7984 0.56311 11 0.56311C5.20156 0.56311 0.5 5.26467 0.5 11.0631C0.5 16.3037 4.33906 20.6476 9.35938 21.4361V14.0992H6.69266V11.0631H9.35938V8.74983C9.35938 6.11873 10.9273 4.6642 13.3255 4.6642C14.4744 4.6642 15.6763 4.86952 15.6763 4.86952V7.45373H14.3516C13.048 7.45373 12.6402 8.2628 12.6402 9.09436V11.0631H15.552L15.087 14.0992H12.6406V21.437C17.6609 20.649 21.5 16.3051 21.5 11.0631Z" fill="currentColor" />
            </svg>
          </a>
          <button aria-label="instagram"  class="focus:ring-2 focus:ring-offset-2 focus:ring-2 focus:ring-gray-800 focus:outline-none rounded-full">
            <svg class="fill-current text-gray-800 hover:text-gray-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2969 12C14.2969 13.2686 13.2686 14.2969 12 14.2969C10.7314 14.2969 9.70312 13.2686 9.70312 12C9.70312 10.7314 10.7314 9.70312 12 9.70312C13.2686 9.70312 14.2969 10.7314 14.2969 12Z" fill="currentColor" />
              <path
                d="M17.3716 7.93616C17.2612 7.63696 17.085 7.36615 16.8561 7.14386C16.6339 6.91498 16.3632 6.73883 16.0638 6.62842C15.821 6.53412 15.4563 6.42188 14.7845 6.3913C14.0577 6.35815 13.8398 6.35101 12 6.35101C10.16 6.35101 9.94208 6.35797 9.21552 6.39111C8.5437 6.42188 8.17877 6.53412 7.93616 6.62842C7.63678 6.73883 7.36597 6.91498 7.14386 7.14386C6.91498 7.36615 6.73883 7.63678 6.62823 7.93616C6.53394 8.17896 6.42169 8.54388 6.39111 9.2157C6.35797 9.94226 6.35083 10.1602 6.35083 12.0002C6.35083 13.84 6.35797 14.0579 6.39111 14.7847C6.42169 15.4565 6.53394 15.8212 6.62823 16.064C6.73883 16.3634 6.91479 16.634 7.14368 16.8563C7.36597 17.0852 7.6366 17.2614 7.93597 17.3718C8.17877 17.4662 8.5437 17.5785 9.21552 17.6091C9.94208 17.6422 10.1598 17.6492 11.9998 17.6492C13.84 17.6492 14.0579 17.6422 14.7843 17.6091C15.4561 17.5785 15.821 17.4662 16.0638 17.3718C16.6648 17.14 17.1398 16.665 17.3716 16.064C17.4659 15.8212 17.5781 15.4565 17.6089 14.7847C17.642 14.0579 17.649 13.84 17.649 12.0002C17.649 10.1602 17.642 9.94226 17.6089 9.2157C17.5783 8.54388 17.4661 8.17896 17.3716 7.93616ZM12 15.5383C10.0457 15.5383 8.46149 13.9543 8.46149 12C8.46149 10.0457 10.0457 8.46167 12 8.46167C13.9541 8.46167 15.5383 10.0457 15.5383 12C15.5383 13.9543 13.9541 15.5383 12 15.5383ZM15.6782 9.14868C15.2216 9.14868 14.8513 8.77844 14.8513 8.32178C14.8513 7.86511 15.2216 7.49487 15.6782 7.49487C16.1349 7.49487 16.5051 7.86511 16.5051 8.32178C16.5049 8.77844 16.1349 9.14868 15.6782 9.14868Z"
                fill="currentColor"
              />
              <path
                d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM18.8491 14.8409C18.8157 15.5744 18.6991 16.0752 18.5288 16.5135C18.1708 17.4391 17.4391 18.1708 16.5135 18.5288C16.0754 18.6991 15.5744 18.8156 14.8411 18.8491C14.1063 18.8826 13.8715 18.8906 12.0002 18.8906C10.1287 18.8906 9.8941 18.8826 9.15912 18.8491C8.42578 18.8156 7.9248 18.6991 7.48663 18.5288C7.02667 18.3558 6.61029 18.0846 6.26605 17.7339C5.91559 17.3899 5.64441 16.9733 5.47137 16.5135C5.30109 16.0754 5.18445 15.5744 5.15112 14.8411C5.11725 14.1061 5.10938 13.8713 5.10938 12C5.10938 10.1287 5.11725 9.89392 5.15094 9.15912C5.18427 8.4256 5.30072 7.9248 5.47101 7.48645C5.64404 7.02667 5.91541 6.61011 6.26605 6.26605C6.61011 5.91541 7.02667 5.64423 7.48645 5.47119C7.9248 5.3009 8.4256 5.18445 9.15912 5.15094C9.89392 5.11743 10.1287 5.10938 12 5.10938C13.8713 5.10938 14.1061 5.11743 14.8409 5.15112C15.5744 5.18445 16.0752 5.3009 16.5135 5.47101C16.9733 5.64404 17.3899 5.91541 17.7341 6.26605C18.0846 6.61029 18.356 7.02667 18.5288 7.48645C18.6993 7.9248 18.8157 8.4256 18.8492 9.15912C18.8828 9.89392 18.8906 10.1287 18.8906 12C18.8906 13.8713 18.8828 14.1061 18.8491 14.8409Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button  aria-label="pinterest" class="focus:ring-2 focus:ring-offset-2 focus:ring-2 focus:ring-gray-800 focus:outline-none rounded-full">
            <svg class="fill-current text-gray-800 hover:text-gray-500" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.0027 0.554382C5.37441 0.554382 0 5.94525 0 12.5938C0 17.5224 2.9578 21.7577 7.18553 23.6228C7.15338 22.7843 7.18017 21.7739 7.39451 20.8602C7.62492 19.882 8.93771 14.2976 8.93771 14.2976C8.93771 14.2976 8.55191 13.529 8.55191 12.3949C8.55191 10.6105 9.58071 9.27759 10.8667 9.27759C11.9598 9.27759 12.4849 10.0999 12.4849 11.0835C12.4849 12.1853 11.783 13.83 11.424 15.3564C11.1239 16.6356 12.0616 17.6729 13.3208 17.6729C15.5928 17.6729 17.1253 14.7437 17.1253 11.2716C17.1253 8.63262 15.3516 6.66009 12.1313 6.66009C8.49297 6.66009 6.22103 9.38508 6.22103 12.4272C6.22103 13.4753 6.53181 14.217 7.01407 14.7867C7.23376 15.0501 7.26591 15.1576 7.18553 15.4585C7.12659 15.6789 6.99799 16.211 6.93905 16.426C6.85867 16.7324 6.61219 16.8398 6.33891 16.727C4.66176 16.039 3.87944 14.2008 3.87944 12.1262C3.87944 8.70786 6.75686 4.60694 12.4581 4.60694C17.0395 4.60694 20.0563 7.9339 20.0563 11.5027C20.0563 16.2271 17.436 19.753 13.578 19.753C12.2813 19.753 11.065 19.0489 10.647 18.2534C10.647 18.2534 9.95043 21.0268 9.8004 21.5642C9.54856 22.4941 9.05023 23.4185 8.59478 24.1441C9.6996 24.471 10.8454 24.6376 11.9973 24.6386C18.6256 24.6386 24 19.2477 24 12.5992C24 5.95062 18.6309 0.554382 12.0027 0.554382Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div class="flex items-center mt-6">
          <p class="text-base  leading-4 text-gray-800">2023 <span class="font-semibold">Caramel Cakes</span></p>
          <div class="border-l border-gray-800 pl-2 ml-2">
            <p class="text-base leading-4 text-gray-800">All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>



<RouterView />

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import emailjs from 'emailjs-com';
import Slider from './components/Slider.vue'
import Dot from './components/Dot.vue'
import Feature from './components/Feature.vue'
import Stats from './components/Stats.vue'
import Faq from './components/Faq.vue'


export default {
    name: "App",
    components: {
        Slider,
        Stats,
        Faq,
        Dot,
        Feature
    },
     data() {
        return {
            show: true,
            Live: Dot,
            name: '',
            email: '',
            message: '',
            
        };
    },
   
    methods: {

        scrollToAnchorPoint(refName) {
            const el = this.$refs[refName]
            el.scrollIntoView({ behavior: 'smooth'})
        },

        selectedSmall(){
                var text =  event.target.innerText;
                var newL = document.getElementById('list');
                var newText = document.getElementById('textClicked');
                newL.classList.add('hidden');
                document.getElementById('ArrowSVG').classList.toggle('rotate-180');
                newText.innerText = text;

                document.getElementById('s1').classList.remove('hidden');
            },         

    sendEmail(e) {
      try {
        emailjs.sendForm('service_94hx0xl', 'template_jve8nil', e.target, 'user_MM0WUnr2Npkovaa02b3RT', {
          name: this.name,
          email: this.email,
          message: this.meessage
        })
        console.log('it works!!!')
      } catch (error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  

        showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
        MenuHandler(flag) {
            if (flag) {
                document.getElementById("list").classList.add("top-100");
                document.getElementById("list").classList.remove("hidden");
                document.getElementById("close").classList.remove("hidden");
                document.getElementById("open").classList.add("hidden");
            } else {
                document.getElementById("list").classList.remove("top-100");
                document.getElementById("list").classList.add("hidden");
                document.getElementById("close").classList.add("hidden");
                document.getElementById("open").classList.remove("hidden");
            }
        },
    },
};
</script>

<style>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
.top-100 {
    animation: slideDown 0.5s ease-in-out;
}
@keyframes slideDown {
    0% {
        top: -50%;
    }
    100% {
        top: 0;
    }
}
* {
    outline: none !important;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
}
</style>
