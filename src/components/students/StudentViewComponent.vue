<script lang="js">
    import IconCalendar from "../../components/icons/interface/IconCalendar.vue";
    import IconCalendarEdit from "../../components/icons/interface/IconCalendarEdit.vue";
    import StudentDeleteModal from "../../components/students/StudentDeleteModal.vue"
    import {formatDate} from "@/helpers/DateHelper";
    import axios from '@/plugins/axios'
    import StudentEditModal from "./StudentEditModal.vue";
    import { defineComponent } from "vue";


export default defineComponent({
    components:
        {
            StudentEditModal,
            IconCalendar,
            IconCalendarEdit,
            StudentDeleteModal
        },
    props: {
        id: Number,
        firstName: String,
        lastName: String,
        email:String,
        phoneNumberConfirmed:Boolean,
        imagePath:String,
        createdAt: Date,
        updatedAt: Date
    },
    data() {
        return{
            baseURL: "" ,
            imageFullPath: "" ,
            phoneNumberS: "" ,
            name: "" ,
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
            this.createdAtS = formatDate(this.createdAt);
            this.updatedAtS = formatDate(this.updatedAt);

        },
    },
    mounted() {
        this.load();
    }
});
</script>
<template >
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="image-container px-2 pt-2">
            <img class="image-square rounded-lg" v-bind:src = "imageFullPath"  alt="" />
        </div>
        <div class="px-3 pt-1 pb-2">
            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{firstName}} <br> {{lastName}}</h5>
            <p class=" font-normal text-gray-700 dark:text-gray-400">{{ email }} </p>

            <div class="flex mt-1 flex-wrap items-center ">
                <IconCalendar></IconCalendar>
                <p class="me-5 mx-1 font-normal bold text-gray-700 dark:text-gray-400">{{ createdAtS}}</p>
            </div>
            <div class="flex mt-1 flex-wrap items-center ">
                <IconCalendarEdit></IconCalendarEdit>
                <p class="mx-1 font-normal bold text-gray-700 dark:text-gray-400">{{ updatedAtS }}</p>
            </div>

            <StudentEditModal
                    :editId=id
                    :nameProp=firstName
                    :lastnameProp=lastName
                    :phoneProp=email>
            </StudentEditModal>
            <button type="button"
                    class="w-full">
                <StudentDeleteModal :id-user=id>

                </StudentDeleteModal>
            </button>
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