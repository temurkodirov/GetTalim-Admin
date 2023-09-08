<script>
    import {defineComponent} from "vue";
    import MentorViewComponent from "@/components/mentors/MentorViewComponent.vue";
    import axios from "@/plugins/axios";
    import MentorCreateModal from "@/components/mentors/MentorCreateModal.vue";

export default defineComponent({
    components:{
        MentorCreateModal,
        MentorViewComponent
    },
    methods:{
        async getDataAsync(){
            this.isLoaded = false;
            const response = await axios.get('/api/mentors');

            this.isLoaded = true;
            this.studentsList = response.data;
            console.log(response.data)
        }
    },
    data()
    {
        return{
            isLoaded : false,
            studentsList:[],
        }
    },
    async mounted()
    {
        await  this.getDataAsync();
    }
})

</script>

<template>
    <nav class="flex justify-between mb-3" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
                <RouterLink to="dashboard">
                    <a href="#"
                       class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                             viewBox="0 0 20 20">
                            <path
                                    d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        <!-- {{ $t('home') }} -->
                    </a>
                </RouterLink>
            </li>
            <li>
                <div class="flex items-center">
                    <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 9 4-4-4-4" />
                    </svg>
                    <a
                            class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">{{
                        $t('mentors') }}</a>
                </div>
            </li>
        </ol>
        <MentorCreateModal></MentorCreateModal>
    </nav>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-2" v-show="isLoaded===true">
        <MentorViewComponent
                v-for="element in studentsList"
                :id = element.id
                :firstName = element.firstName
                :imagePath = element.imagePath
                :email = element.email
                :vDescription = element.description
                :vStack = element.stack
                :lastName = element.lastName
                :createdAt = element.createdAt
                :updatedAt = element.updatedAt
        ></MentorViewComponent>
    </ul>
</template>

<style scoped>

</style>