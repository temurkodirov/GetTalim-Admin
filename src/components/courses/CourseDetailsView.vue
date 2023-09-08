<script>
import {defineComponent} from "vue";
import axios from "@/plugins/axios";
import {formatDate} from "@/helpers/DateHelper";
import IconCalendarEdit from "@/components/icons/interface/IconCalendarEdit.vue";
import IconCheck from "@/components/icons/interface/IconCheck.vue";
import IconCircle from "@/components/icons/interface/IconCircle.vue";
import IconCalendar from "@/components/icons/interface/IconCalendar.vue";
import IconLifetime from "@/components/icons/course/IconLifetime.vue";
import IconCertificate from "@/components/icons/course/IconCertificate.vue";
import IconLevel from "@/components/icons/course/IconLevel.vue";
import IconLanguage from "@/components/icons/course/IconLanguage.vue";
import IconClock from "@/components/icons/course/IconClock.vue";
import IconCreatedAt from "@/components/icons/course/IconCreatedAt.vue";
import IconUpdatedAt from "@/components/icons/course/IconUpdatedAt.vue";
import IconLessons from "@/components/icons/course/IconLessons.vue";
import IconMentors from "@/components/icons/IconMentors.vue";
import CourseEditModal from "@/components/courses/CourseEditModal.vue";

export default defineComponent({
    components: {
        CourseEditModal,
        IconMentors,
        IconLessons,
        IconUpdatedAt,
        IconCreatedAt,
        IconClock,
        IconLanguage,
        IconLevel,
        IconCertificate,
        IconLifetime,
        IconCalendar,
        IconCircle,
        IconCheck,
        IconCalendarEdit},

    methods:{
        async getDataAsync(){
            this.id = this.$route.params.id;
            var response = await  axios.get("/api/CourseViewModel/"+this.id);
            console.log(response.data)
            this.fullCourse = response.data;
        },
        load(){
            this.baseURL = axios.defaults.baseURL;
            this.imageFullPath = this.baseURL +"/"+this.fullCourse.imagePath;
            this.updated = formatDate(this.fullCourse.updatedAt);
            this.created = formatDate(this.fullCourse.createdAt);

        }
    },
    data(){
        return{
            baseURL:String,
            fullCourse : [],
            id : Number,
            updated: Date,
            created:Date,
            imageFullPath:String
        }
    },
    async mounted(){
        await this.getDataAsync();
        this.load();
    }
})
</script>
<template >
    <div class="absolute popUp w-3/12 p-3  mt-5  right-28 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="image-container px-2 pt-2">
            <img class="image-square rounded-lg" v-bind:src = "imageFullPath"  alt="" />
        </div>
        <div class="px-3 pt-1 pb-2">
            <div class="flex justify-between my-2 ">
                <p class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {{fullCourse.discountPrice}} </p>
                <p class="text-xl line-through font-bold tracking-tight text-gray-900 dark:text-white">
                    {{fullCourse.price}} </p>
            </div>

            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700">
            <p class="flex justify-between font-normal text-gray-700 dark:text-white">
                <span class="flex">
               <IconMentors class="mr-2"></IconMentors>
                    {{$t("mentors")}}</span>
                {{fullCourse.mentor}}  </p>

            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700">
            <p class="flex  font-normal justify-between text-gray-700 dark:text-gray-100">
                <div class="flex">
                <IconLessons class="mr-2"></IconLessons>
                {{$t("Lessons")}}</div> {{ fullCourse.lessons }} </p>
            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700">

            <p class="flex justify-between font-normal text-gray-700 dark:text-gray-100">
            <div class="flex">
                <IconCreatedAt class="mr-2"></IconCreatedAt> {{$t("Created-At")}}   </div>
            {{ created }}       </p>
            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700">

            <p class="flex justify-between font-normal text-gray-700 dark:text-gray-100">
               <span class="flex">
                <IconUpdatedAt class="mr-2"></IconUpdatedAt> {{$t("Updated-At")}}</span>
                 {{ updated }} </p>
            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700">

            <p class="flex justify-between font-normal text-gray-700 dark:text-gray-100">
                <span class="flex">
                <IconClock class="mr-2"></IconClock> {{$t("Hours")}}</span>
                 {{ fullCourse.hours }} </p>
            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700">

            <p class="flex justify-between font-normal text-gray-700 dark:text-gray-100">
                <span class="flex">
                <IconLevel class="mr-2"></IconLevel> {{$t("Level")}}</span>
                 {{ fullCourse.level }} </p>
            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700">

            <p class="flex justify-between font-normal text-gray-700 dark:text-gray-100">
                <span class="flex">
                <IconLanguage class="mr-2"> </IconLanguage> {{$t("Language")}}</span>
                 {{ fullCourse.language }} </p>
            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700">

            <p class="flex justify-between font-normal text-gray-700 dark:text-gray-100">
                <span class="flex">
                <IconCertificate class="mr-2"></IconCertificate>
                {{$t("Certificate")}} </span>
                {{$t("noBtn")}}  </p>
            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700">

            <p class="flex justify-between font-normal text-gray-700 dark:text-gray-100">
                <span class="flex">
               <IconLifetime class="mr-2"></IconLifetime>
                    {{$t("Access")}}</span>
                {{$t("Lifelong")}}  </p>
            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700">
            <div class="flex justify-center">
                <CourseEditModal></CourseEditModal> </div>
        </div>
    </div>
    <div class="flex flex-col items-center" >
        <div class="w-5/6">

            <div class=" p-3 bg-gray-100  rounded-lg shadow border border-gray-200 dark:bg-gray-800 dark:border-gray-700" >
                <p class="text-3xl font-normal bold text-gray-700 dark:text-gray-100">{{fullCourse.name}}</p>
                <p class=" mt-3 w-3/5 text-l font-normal bold text-gray-700 dark:text-gray-100">{{fullCourse.description}}</p>

            </div>
            <div class="mt-2 p-3 bg-gray-100  rounded-lg shadow border border-gray-200 dark:bg-gray-800 dark:border-gray-700" >
                <p class="text-3xl font-normal bold text-gray-700 dark:text-gray-100">{{$t("Information")}}</p>
                <p class=" mt-3 w-3/5 text-l font-normal bold text-gray-700 dark:text-gray-100">{{fullCourse.information}}</p>
            </div>
            <div class="mt-2 p-3 bg-gray-100  rounded-lg shadow border border-gray-200 dark:bg-gray-800 dark:border-gray-700" >
                <p class="text-3xl font-normal bold text-gray-700 dark:text-gray-100">{{$t("What-you-will-learn")}}</p>
                <ul class=" col-count max-w-md mt-2 space-y-1 text-gray-800 list-inside dark:text-gray-100">
                    <li class="flex  items-center text-l" v-for="element in fullCourse.benefits">
                       <IconCheck class="mr-2"></IconCheck> {{element.name}}
                    </li>
                </ul>
            </div>
            <div class="mt-2 p-3 bg-gray-100  rounded-lg shadow border border-gray-200 dark:bg-gray-800 dark:border-gray-700" >
                <p class="text-3xl font-normal bold text-gray-700 dark:text-gray-100">{{$t("Requirements")}}</p>
                <ul class="max-w-md mt-2 space-y-1 text-gray-800 list-inside dark:text-gray-100">
                    <li class="flex  items-center text-l" v-for="element in fullCourse.requirments">
                        <IconCircle class="mr-2"></IconCircle> {{element.requirment}}
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>



<style scoped>
.popUp{

    box-shadow: 0 0 7px 7px #815ad54e;
}
.image-square{
    object-fit: cover;
    aspect-ratio: 5/4;
}
ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}

li {
    min-width: calc(50% - 10px); /* Set the minimum width for each item to create two columns */
}
</style>