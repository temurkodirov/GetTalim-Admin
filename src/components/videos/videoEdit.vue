<script>
import IconEdit from "@/components/icons/interface/IconEdit.vue";
import axios from "@/plugins/axios";
import DeleteVideo from "@/components/videos/deleteVideo.vue";

export default {
  name: "videoEdit",
  components: {
    DeleteVideo,
    IconEdit
  },
  props: {
    nameProp: String,
    descriptionProp: String,
    idProp: Number,
    videoProp: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showModal: false,
      categoryName: "",
      categoryDescription: "",
      video: {
        id: Number,
        name: "",
        videoPath: "",
        length: Number,
        courseModulId: Number,
      }
    };
  },
  methods: {
    openModal() {
      this.video = this.videoProp;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async submitForm() {
      const formData = new FormData();
      formData.append("Name", this.video.name);
      formData.append("VideoPath", this.video.videoPath);
      formData.append("Length", this.video.length);
      formData.append("CourseModulId", this.video.courseModulId);
      const responce = await axios.put("/api/videos/" + this.video.id, formData);
      console.log(responce.status);
      if (responce.status === 200) {
        location.reload();
        this.closeModal();
      }
    }
  },

}
</script>

<template>
  <!--begin:: Edit Modal Button-->
  <button  @click="openModal"
           class="text-fuchsia-700">
    Edit
  </button>
  <!--end:: Edit Modal Button-->

  <!--For Edit Modal Window  Start-->
  <div v-if="showModal"
       class="fixed top-0 left-0 right-0 z-50 w-full h-screen flex items-center justify-center bg-black bg-opacity-50">
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button @click="closeModal"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="edit-modal" >
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Video</h3>
          <form @submit.prevent="submitForm" class="space-y-6" action="#">

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


            <div class="flex">
              <delete-video :id-user="video.id"></delete-video>
              <button @click="submitForm"  type="submit"
                      class="w-full   text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow    -800">
                {{$t("edit")}}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!--For Edit Modal Window  End-->

</template>

<style scoped>

</style>