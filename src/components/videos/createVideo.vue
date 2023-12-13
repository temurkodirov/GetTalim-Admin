<script>
import axios from "@/plugins/axios";

export default {
  name: "createVideo",
  data() {
    return {
      showModal:false ,
      name: "" ,
      description: "",
      createError: false,
      video: {
        id: Number,
        name: "",
        videoPath: "",
        length: Number,
        courseModulId: Number,
      }
    };
  },
  props: {
    moduleId : Number,
    moduleName: String,
  },
  methods: {
    openModal() {
      console.log(this.courseId)
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async createAsync() {

      const formData = new FormData();
      formData.append("Name", this.video.name);
      formData.append("VideoPath", this.video.videoPath);
      formData.append("Length", this.video.length);
      formData.append("CourseModulId", this.moduleId);
      const responce = await axios.post("/api/videos", formData);

      if (responce.status === 200) {
        location.reload();
        this.closeModal();
      }
      else {
        this.createError = true;
      }
    }
  },
}
</script>

<template>
  <div class="flex w-100 justify-end">
    <button @click="openModal" type="button"
            class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br
             focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg
             text-sm p-2 mb-2 px-4  text-center ">
       Add video
    </button>
  </div>



  <div v-if="showModal"
       class="fixed top-0 left-0 right-0 z-50 w-full h-screen flex items-center justify-center bg-black bg-opacity-50">
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button @click="closeModal"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="edit-modal">
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-2 text-xl text-gray-100 dark:text-gray-300">
            Create video to <span class=" font-medium dark:text-gray-100 ">{{moduleName}} </span> module </h3>
          <form @submit.prevent="createAsync" class="space-y-6" action="#">

            <div>
              <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {{$t("fName")}}
              </label>
              <input v-model="video.name" type="text"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                     required>
            </div>

            <div>
              <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Video path
              </label>
              <input v-model="video.videoPath" type="text"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                     required>
            </div>

            <div>
              <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Duration
              </label>
              <input v-model="video.length" type="number"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                     required>
            </div>

            <div class="m-5">
              <button  type="submit"
                       class="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">
                {{$t("create") }}
              </button>
            </div>


          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>