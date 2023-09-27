<script lang="js">
import { defineComponent } from "vue";
import axios from "@/plugins/axios";
import CourseViewComponent from "@/components/courses/CourseViewComponent.vue";
export default defineComponent({
    components: {CourseViewComponent},
    methods:{
        async getDataAsync()
        {
            const response = await axios.get('/api/courses');
            this.coursesList = response.data;
                console.log(response.data)
        }
    },
    data(){
        return{
            isLoaded:false,
            coursesList:[]
        }
    },
    async mounted()
    {
            await this.getDataAsync()
    }

})


</script>
<template>
    <template class="grid grid-cols-4 md:grid-cols-4 gap-2">


<template v-for="element in coursesList">
        <CourseViewComponent
        :courseId = element.id
        :imagePath = element.imagePath
        :categoryId = element.categoryId
        :coursePrice = element.price
        :courseName = element.name
        :created-at-s = element.createdAt
        :updated-at-s = element.updatedAt
        ></CourseViewComponent>

</template>

    </template>


</template>



<style scoped>

</style>