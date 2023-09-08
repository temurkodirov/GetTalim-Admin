<script>
import IconCalendar from "../../components/icons/interface/IconCalendar.vue";
import IconCalendarEdit from "../../components/icons/interface/IconCalendarEdit.vue";
import {formatDate} from "@/helpers/DateHelper";
import axios from '@/plugins/axios'
import { defineComponent } from "vue";
import FlowbiteSetup from "@/FlowbiteSetup.vue";
import CategoryEditComponent from "./CategoryEditComponent.vue";
import CategoryDeleteComponents from "./CategoryDeleteComponent.vue";


export default defineComponent({
    components:{
        CategoryEditComponent,
        FlowbiteSetup,
        CategoryDeleteComponents,
        IconCalendar, IconCalendarEdit
    },
    props: {
        id: Number,
        name: String,
        description: String,
        createdAt: Date,
        updatedAt: Date
    },
    data() {
        return{
            baseURL: "" ,
            createdAtString: "" ,
            updatedAtString: "" ,
            localId: 0
        }
    },
    methods: {
        load(){
            this.baseURL = axios.defaults.baseURL;
            this.createdAtString = formatDate(this.createdAt);
            this.updatedAtString = formatDate(this.updatedAt);
        },

    },
    mounted() {
        this.load();
    }
});

</script>

<template>
    <div class="card flex border bg-gray-100 mb-3 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex-auto p-3">
            <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ name }}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">{{ description }}</p>
            <div class="w-44">
                <a href="#" class="inline-flex text-gray-700 w-full items-center justify-center mt-1 text-l font-medium   rounded   hover:text-gray-900 bg-gray-200 dark:text-gray-200 dark:bg-gray-600 hover:bg-gray-300 px-3 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="w-full">{{$t("course")}}</span>
                    <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            <div class="flex flex-wrap items-center mt-2 mb-2">
                <IconCalendar></IconCalendar>
                <p class="me-5 mx-1 font-normal bold text-gray-700 dark:text-gray-400">{{ createdAtString }}</p>
                <IconCalendarEdit></IconCalendarEdit>
                <p class="mx-1 font-normal bold text-gray-700 dark:text-gray-400">{{ updatedAtString }}</p>
            </div>

        </div>

        <div class="flex-none w-16">

            <CategoryEditComponent
                    :nameProp=name
                    :descriptionProp=description

                    :idProp=id>
            </CategoryEditComponent>


                <CategoryDeleteComponents :id-category=id>

                </CategoryDeleteComponents>

        </div>
    </div>



  <!-- Main modal -->
    <FlowbiteSetup></FlowbiteSetup>
</template>

<style scoped>

</style>