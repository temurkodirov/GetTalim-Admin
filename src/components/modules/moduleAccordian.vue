<script>
import {FwbAccordion, FwbAccordionContent, FwbAccordionHeader, FwbAccordionPanel} from "flowbite-vue";
import axios from "@/plugins/axios";
import EditModule from "@/components/modules/EditModule.vue";
import BenefitView from "@/views/benefits/BenefitView.vue";
import VideosComponent from "@/components/videos/videosComponent.vue";

export default {
  name: "moduleAccordian",
  components: {
    VideosComponent,
    BenefitView, EditModule, FwbAccordionContent, FwbAccordionHeader, FwbAccordionPanel, FwbAccordion},
  data() {
    return {
      id: Number,
      modules: []
    }
  },
  methods: {
    async getCourseModules() {
      this.id = this.$route.params.id;
      try {
        const result = await axios.get('/api/CourseModuls/videos/student/' + this.id);
        if (result.status === 200) {
          console.log(result.data);
          this.modules = result.data;
        }
      } catch (error) {
        alert(error.message)
      }
    },
  },
  async mounted() {
    await this.getCourseModules();
  }
}
</script>

<template>
  <fwb-accordion  class="mt-3 p-0" :open-first-item="false">
    <fwb-accordion-panel  v-for="(modul, index) in modules" :key="index">
      <fwb-accordion-header class="p-0">
        <div class="flex justify-between items-center "> <div>{{ modul.name }}</div>
          <edit-module :id-prop="modul.id" :course-id="modul.courseId" :name-prop="modul.name" />
        </div>
      </fwb-accordion-header>
      <fwb-accordion-content >
        <videosComponent :modulName="modul.name" :module-id="modul.id" />
      </fwb-accordion-content>
    </fwb-accordion-panel>
  </fwb-accordion>
</template>

<style >
fwb-accordion-panel button {
  padding: 0;
}
</style>