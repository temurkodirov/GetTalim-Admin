<script >

import { defineComponent} from 'vue';
import axios from '@/plugins/axios';


export default defineComponent({
    data(){
        return{
            email: "" ,
            password: "" ,
            responseToken: "" ,
            existError: false
        }
    },
    methods:{
        async errorClose(){
            this.existError = false;
        },
        async loginAsync(){
         const loginDto = {email: this.email, password: this.password}
            let jsonContent = JSON.stringify(loginDto);
            console.log(jsonContent)
            let response = await axios.post("/api/StudentAuth/login",jsonContent,
                {
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })

            console.log(response.status);
            if(response.status === 200 )
            {
                let token = response.data.token;
                document.cookie = "access_token=" + token + "; expires: SESSION; path=/";
                this.$router.push("/dashboard");
            }
            else
            {
                this.existError = true;
            }
        }
    }

});
</script>
<template>
    <section class="bg-gray-200 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img
                    class="w-8 h-8 mr-2"
                    src="../../assets/logo.png"
                    alt="logo"
                />
                Get Ta'lim
            </a>
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <div>
                        <label for="PhoneNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your  email </label>
                        <input v-model="email" type="text" id="PhoneNumber"
                               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="+998 88 999 77 30">
                    </div>
                    <div>
                        <label for="password"
                               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input v-model="password" type="password"  id="password" placeholder="••••••••"
                               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox"
                                       class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                >
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#"
                           class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                            password?</a>
                    </div>
                    <button @click="loginAsync"
                            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Sign in
                    </button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        This site for only Get Ta'lim administrators!
                    </p>
                </div>
                <div id="popup-modal"  v-show="this.existError" class=" flex flex-col items-center justify-center fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full  ">
                    <div class="relative w-full max-w-md max-h-full">
                        <div class="relative bg-gray-300 rounded-lg shadow dark:bg-gray-700">
                            <button @click="errorClose" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="#BB2525" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="p-6 text-center">
                                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="#BB2525" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                <h3 class="mb-5 text-lg font-normal text-red-700 dark:text-gray-400">Login or password incorrect</h3>
                                <button @click="errorClose" class="py-2.5  mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 px-12">
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>