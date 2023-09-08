<script>
import IconCalendar from "@/components/icons/interface/IconCalendar.vue";
import IconCalendarEdit from "@/components/icons/interface/IconCalendarEdit.vue";

import { defineComponent } from "vue";
import axios from "@/plugins/axios";
import {formatDate} from "@/helpers/DateHelper";


export default defineComponent({
    components:{
        IconCalendar,
        IconCalendarEdit
    },
    props:{
        courseId: Number,
        imagePath:String,
        categoryId:Number,
        courseName:String,
        coursePrice:Number,
        createdAtS:Date,
        updatedAtS:Date
    },
   data(){
        return{
            baseURL: "" ,
            category : "",
            givenId : Number,
            imageFullPath:String,
            createdAt:  String,
            updatedAt: String
        }
    },
    methods:{

          async getCategoryNameAsync(){

              var response = await axios.get("/api/categories/"+this.categoryId);
              console.log(response.data);
                this.category = response.data.name;
          },
        load(){
            this.baseURL = axios.defaults.baseURL;
            this.imageFullPath = this.baseURL+"/"+this.imagePath;
            this.createdAt = formatDate(this.createdAtS);
            this.updatedAt = formatDate(this.updatedAtS);
            this.givenId = this.categoryId;
        }
    },

   async mounted() {
        this.load();
        await this.getCategoryNameAsync()
    }
})
</script>
<template>
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="image-container px-2 pt-2">
            <img class="image-square rounded-lg" v-bind:src = "imageFullPath"  alt="" />
        </div>
        <div class="px-3 pt-1 pb-2 flex flex-col items-center">
            <p class=" font-normal text-gray-700 dark:text-gray-400">{{ category }} </p>
            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"> {{courseName}}</h5>

            <div class="flex mt-1 flex-wrap items-center ">
                <IconCalendar class="mr-2"></IconCalendar>
                <p class=" font-normal bold text-gray-700 dark:text-gray-400"> {{ createdAt}}</p>
            </div>
            <div class="flex mt-1 flex-wrap items-center ">
                <IconCalendarEdit class="mr-2"></IconCalendarEdit>
                <p class="  font-normal bold text-gray-700 dark:text-gray-400"> {{ updatedAt }}</p>
            </div>
        </div>
        <hr class="w-48 h-1 mx-auto  bg-gray-100 border-0 rounded mb-2 dark:bg-gray-700">
        <div class="flex justify-between items-center mb-1">
            <RouterLink :to="{ name: 'a-course', params: { id: this.courseId } }">
            <button class=" ml-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                 Open
              </span>
            </button>
        </RouterLink>
            <p class="mr-5 font-bold text-l bold text-gray-700 dark:text-gray-400"> {{ coursePrice}}</p>

        </div>
    </div>
</template>



<style scoped>
.image-square
{
    width: 100%;
    height: 100%;
    max-width: 280px;
    max-height: 265px;
    object-fit: cover;
    object-position: top;
    aspect-ratio: 1/1;
}
.image-container
{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
</style>