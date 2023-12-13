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
            <img class="image-square rounded-lg" :src="imageFullPath"  alt="" />
        </div>

        <div class="px-3 pt-1 pb-2 flex flex-col items-center">
            <p class=" font-normal text-gray-700 dark:text-gray-400">{{ category }}    </p>
            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"> {{courseName}}</h5>

            <div class="flex mt-1 flex-wrap items-center ">
                <IconCalendar class="mr-2"></IconCalendar>
                <p class=" font-normal bold text-gray-700 dark:text-gray-400"> {{ createdAt}}</p>
            </div>
            <div class="flex mt-1 flex-wrap items-center ">
                <IconCalendarEdit class="mr-2"></IconCalendarEdit>
                <p class="  font-normal bold text-gray-700 dark:text-gray-400"> {{ updatedAt }}</p>
            </div>
            <p class="mr-5 font-bold text-l bold text-gray-700 dark:text-gray-400"> {{ coursePrice}}</p>

        </div>
        <hr class="w-48 h-1 mx-auto  bg-gray-100 border-0 rounded mb-2 dark:bg-gray-700">

        <RouterLink :to="{ name: 'a-course', params: { id: this.courseId } }" class="flex my-2 justify-center" >
                <button type="button" class=" w-3/5  text-white bg-gradient-to-r from-blue-500 via-blue-600
                 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
                  dark:focus:ring-blue-800 shadow-lg
                shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5
                 py-2.5 text-center me-2 mb-2 ">Open</button>
        </RouterLink>


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