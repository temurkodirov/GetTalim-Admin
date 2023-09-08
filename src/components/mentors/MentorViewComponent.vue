<script>

import {defineComponent} from "vue";
import MentorEditModal from "@/components/mentors/MentorEditModal.vue";
import IconCalendar from "@/components/icons/interface/IconCalendar.vue";
import IconCalendarEdit from "@/components/icons/interface/IconCalendarEdit.vue";
import MentorDeleteModal from "@/components/mentors/MentorDeleteModal.vue";
import axios from "@/plugins/axios";
import {formatDate} from "@/helpers/DateHelper";
import IconStar from "@/components/icons/interface/IconStar.vue";
import IconStudent from "@/components/icons/interface/IconStudent.vue";
import IconCourses from "@/components/icons/interface/IconCourses.vue";


export default defineComponent({
    components:
        {
            IconCourses,
            IconStudent,
            IconStar,
            MentorEditModal,
            IconCalendar,
            IconCalendarEdit,
            MentorDeleteModal
        },
    props: {
        id: Number,
        firstName: String,
        lastName: String,
        email:String,
        vStack:String,
        imagePath:String,
        vDescription:String,
        createdAt: Date,
        updatedAt: Date
    },
    data() {
        return{
            baseURL: "" ,
            imageFullPath: "" ,
            phoneNumberS: "" ,
            name: "" ,
            description: String,
            stack:String,
            createdAtS:  String,
            updatedAtS: String
        }
    },
    methods: {
        load(){
            this.baseURL = axios.defaults.baseURL;
            this.imageFullPath = this.baseURL+"/"+this.imagePath;
            this.phoneNumberS = this.email;
            this.name = this.firstName;
            this.stack = this.vStack;
            this.createdAtS = formatDate(this.createdAt);
            this.updatedAtS = formatDate(this.updatedAt);

        },
    },
    mounted() {
        this.load();
    }
});
</script>

<template>
    <div class="p-4 border border-gray-200 shadow bg-gray-100  rounded-lg dark:border-gray-700 dark:bg-gray-800">
        <div  class="flex flex-col items-center   md:flex-row md:max-w-xl   ">
            <img class="image-square p-2  rounded-full h-40 "
                 v-bind:src = "imageFullPath" alt="" >
            <div class="flex flex-col justify-between ml-3 leading-normal">
                <h5 class="ml-1 text-2xl font-bold tracking-tight text-gray-900
                dark:text-white">{{firstName}} {{lastName}}</h5>
                    <span class="ml-1 font-normal bold text-gray-700 dark:text-gray-400">{{email}}</span>
                <div class="flex font-normal text-gray-700 dark:text-gray-400" >

                    <IconStar class="mr-1">  </IconStar>  <span class="mr-2">4.8 Rate </span>
                    <IconStudent class="mr-1">>   </IconStudent> <span class="mr-2"> +1000 students</span>
                    <IconCourses class="mr-1">>   </IconCourses> <span class="mr-2"> +13 Courses</span>
                </div>
                <div class="flex ml-1  items-center mt-2 ">
                    <IconCalendar></IconCalendar>
                    <p class="me-5 mx-1 font-normal bold text-gray-700 dark:text-gray-400">{{ createdAtS }}</p>
                    <IconCalendarEdit></IconCalendarEdit>
                    <p class="mx-1 font-normal bold text-gray-700 dark:text-gray-400">{{ updatedAtS }}</p>
                </div>
            </div>

        </div>
        <div class=" p-1 pl-2 overflow-x-auto h-20  rounded-l  bg-gray-100 dark:bg-gray-700">
            <span class="font-normal " style="color:#805ad5">{{firstName}} {{lastName}} - </span>
            <span class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            {{vDescription}}</span>
        </div>
        <div class="mt-3 p-1 pl-2 overflow-x-auto h-20  rounded-l  bg-gray-100 dark:bg-gray-700">
            <span class="font-normal " style="color:#805ad5">Stack - </span>
            <span class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            {{vStack}}</span>
        </div>
<div class="flex mt-1">
    <MentorEditModal
        :editId=id
        :nameProp=firstName
        :lastnameProp=lastName
        :desc=vDescription
        :phoneProp=email
        :editStack=stack>
    </MentorEditModal>
    <button type="button"
            class="w-full">
        <MentorDeleteModal
            :idUser=id>
        </MentorDeleteModal>
    </button>
</div>

    </div>
<!--    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">-->
<!--        <div class="image-container  px-2 pt-2">-->
<!--            <img class="image-square rounded-lg" v-bind:src = "imageFullPath"  alt="" />-->
<!--        </div>-->
<!--        <div class="px-3 pt-1 pb-2">-->
<!--            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{firstName}} {{lastName}}</h5>-->
<!--            <p class=" font-normal text-gray-700 dark:text-gray-400">{{ email }} </p>-->
<!--            <div class=" mt-1 overflow-x-auto h-20  rounded-l  bg-gray-100 dark:bg-gray-700 ">-->
<!--                <p class=" px-2 pt-1 font-normal text-gray-700 dark:text-gray-400">lorem ipsum asdjasklfj aslk jaskld jas kldjas lkdak jdsal-->
<!--                    aklsdjk ad-->
<!--                    asd asdkk ald-->
<!--                    ad ad kl-->
<!--                    lorem ipsum asdjasklfj aslk jaskld jas kldjas lkdak jdsal-->
<!--                    aklsdjk ad-->
<!--                    asd asdkk ald-->
<!--                    ad ad kl </p>-->

<!--            </div>-->

<!--            <div class="flex mt-1 flex-wrap items-center ">-->
<!--                <IconCalendar></IconCalendar>-->
<!--                <p class="me-5 mx-2 font-normal bold text-gray-700 dark:text-gray-400"> {{createdAtS}}</p>-->
<!--            </div>-->
<!--            <div class="flex mt-1 flex-wrap items-center ">-->
<!--                <IconCalendarEdit></IconCalendarEdit>-->
<!--                <p class="mx-2 font-normal bold text-gray-700 dark:text-gray-400">{{updatedAtS}}</p>-->
<!--            </div>-->

<!--            <MentorEditModal-->
<!--                    :editId=id-->
<!--                    :nameProp=firstName-->
<!--                    :lastnameProp=lastName-->
<!--                    :phoneProp=email>-->
<!--            </MentorEditModal>-->
<!--            <button type="button"-->
<!--                    class="w-full">-->
<!--                <MentorDeleteModal-->
<!--                    :idUser=id>-->
<!--                </MentorDeleteModal>-->
<!--            </button>-->

<!--        </div>-->

<!--    </div>-->
</template>



<style scoped>

::-webkit-scrollbar{
    width: 7px;
}
::-webkit-scrollbar-thumb
{
    background-color: #c3c3c3;
    border-radius: 5px;
}
::-webkit-scrollbar-track{
    border-radius: 5px;
    background-color: gray;
}
.image-square
{

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