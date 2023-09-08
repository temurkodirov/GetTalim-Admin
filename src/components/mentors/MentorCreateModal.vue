<script>

import {defineComponent} from "vue";

import axios from '@/plugins/axios';
import IconCreate from "@/components/icons/interface/IconCreate.vue";
export default defineComponent({
    components: {
        IconCreate },
    data(){
        return{
            modalShow : false,
            vname : ""  ,
            vlname: "" ,
            vemail: "" ,
            vdesc: "",
            vstack: "",
            selectedImage: null
        };
    },
    methods:{
        handleImageChange(event) {
            this.selectedImage = event.target.files[0];
        },
        openModal(){
            this.modalShow = true;
        },
        closeModal()
        {
            this.modalShow = false;
        },
        async submitForm(){
            const formData = new FormData();
            formData.append("FirstName", this.vname);
            formData.append("LastName", this.vlname);
            formData.append("Email", this.vemail);
            formData.append("Description", this.vdesc);
            formData.append("Stack", this.vstack);

            if (this.selectedImage) {
                formData.append("Image", this.selectedImage);
            }
            const responce = await axios.post("/api/mentors/", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (responce.status === 200) {
                location.reload();
                this.closeModal();
            }
        }

    }
});
</script>
<template>
  <!-- Modal toggle -->
    <div class="flex w-100 justify-end">
        <button @click="openModal" type="button"
                class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <div class="flex flex-wrap items-center">
                <IconCreate></IconCreate>
                <p class="mx-2">{{$t("create") }}</p>
            </div>
        </button>
    </div>

  <!-- Main modal -->
    <div v-if="modalShow"
         class="fixed top-0 left-0 right-0 z-50 w-full h-screen flex items-center justify-center bg-black bg-opacity-50">
        <div class="relative w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button"
                        @click="closeModal"
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <form @submit.prevent="submitForm" class="space-y-6" action="#">
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div>
                                <label  class="block mb-2  text-sm font-medium text-gray-900 dark:text-white">
                                    {{$t("fName")}} </label>
                                <input v-model="vname" type="text"  class="bg-gray-50 border border-gray-300 text-gray-900
                                       text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                                        block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500
                                        dark:text-white"
                                       required>
                            </div>
                            <div>
                                <label  class="block mb-2  text-sm font-medium text-gray-900 dark:text-white">
                                    {{$t("lName")}} </label>
                                <input v-model="vlname" type="text" class="bg-gray-50 border border-gray-300 text-gray-900
                                       text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                                        block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500
                                        dark:text-white"
                                       required>
                            </div>
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">
                                {{$t("image")}} </label>
                            <input @change="handleImageChange" accept="image/png, image/gif, image/jpeg" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file">
                        </div>
                        <div class="mb-6">
                            <label  class="block mb-2  text-sm font-medium text-gray-900 dark:text-white">
                                {{$t("email")}} </label>
                            <input v-model="vemail" type="text" class="bg-gray-50 border border-gray-300 text-gray-900
                                   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                                    block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500
                                    dark:text-white"
                                   required>
                        </div>
                        <div class="mb-6">
                            <label  class="block mb-2  text-sm font-medium text-gray-900 dark:text-white">
                                {{$t("description")}} </label>
                            <textarea v-model="vdesc" class="bg-gray-50 border border-gray-300 text-gray-900
                            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                            block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500
                            dark:text-white"
                                      required>
                            </textarea>

                        </div>
                        <div class="mb-6">
                            <label  class="block mb-2   text-sm font-medium text-gray-900 dark:text-white">
                                Stack </label>
                            <textarea v-model="vstack"  class=" bg-gray-50 border border-gray-300 text-gray-900
                                   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                                    block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500
                                    dark:text-white"
                                      required>
                            </textarea>
                        </div>



                        <button  type="submit"
                                 class="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">
                            {{$t("create") }}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>

</style>