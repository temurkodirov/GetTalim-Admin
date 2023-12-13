<script>
import axios from "@/plugins/axios";
import VideoEdit from "@/components/videos/videoEdit.vue";
import CreateVideo from "@/components/videos/createVideo.vue";

export default {
  name: "videosComponent",
  components: {CreateVideo, VideoEdit},
  props: {
    moduleId: Number,
    modulName: String,
  },
  data() {
    return {
      videosList: [],
    }
  },
  methods: {
    async getModuleVideos() {
      try {
        let result = await axios.get('/api/videos/modul/' + this.moduleId)
        if (result.status === 200) {
          this.videosList = result.data;
        }
      }catch (error) {
        alert('videosComponent ' + error.message)
      }
    }
  },
  async mounted() {
    await this.getModuleVideos();
  }
}
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<create-video :module-name="modulName" :moduleId="moduleId"></create-video>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Videos
        </th>
        <th scope="col" class="px-6 py-3">
          <span class="sr-only">Edit</span>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="video in videosList"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {{ video.name }} <br>
          {{ video.videoPath }}
        </th>
        <td class="px-6 py-4 ">
          <video-edit :video-prop="video"></video-edit>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<style scoped>

</style>