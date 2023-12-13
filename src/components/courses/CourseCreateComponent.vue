<script>
import IconCreate from "@/components/icons/interface/IconCreate.vue";
import axios from "@/plugins/axios";

export default {
    name: "CourseCreateComponent",
    components: {
        IconCreate
    },
  props: {
  updateCourse: {
    type: Object,
    require: false,
  },
  courseId: {
    type: Number,
    require: false
  },
  update: Boolean,
  },
    data() {
        return {
          obj:null,
            showModal: false,
            createError: false,
            course: {
                name: "",
                description: "",
                information: "",
                lessons: 0,
                level: 0,
                language: 0,
                hourse: 0,
                image: null,
                price: Number,
                discountPrice: Number,
                mentorId: 0,
                categoryId: 0
            },
            selectedImage: null,
            mentors: [],
            categories: [],
            errorSubmit: false,
            errorMessages: [],
            submitBtn: false
        }
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        async getCategories() {
            try {
                const result = await  axios.get('/api/categories?page=1');
                this.categories = result.data;
            }catch (error) {
                console.log(error.message)
            }
        },
        async getMentors() {
            try {
                const result = await  axios.get('/api/mentors?page=1');
                this.mentors = result.data;
            }catch (error) {
                console.log(error.message)
            }
        },
        async submitHandler() {
            try {
                this.course.Image = this.selectedImage;

                const response = await axios.post("/api/courses", this.course, {
                    headers: {
                        'Content-Type' : 'multipart/form-data'
                    },
                });

                if (response.status === 200) {
                    this.closeModal();
                    location.reload();
                } else {
                    this.errorSubmit = true;
                    this.errorMessages = response.data.errors;
                    console.log(this.errorMessages)
                }
            } catch (error) {
                this.errorSubmit = true;
                this.errorMessage = error.message;
                console.log('nimadur', error.message)
            }
        },
        courseImageHandler() {
            this.selectedImage = event.target.files[0]
        }
    },
    async mounted() {
        await this.getCategories();
        await this.getMentors();
    }

}
</script>
<template>
    <div v-if="!update" class="flex w-100 justify-end">
        <button  @click="openModal" type="button"
                class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <span  class="flex flex-wrap items-center">
                <IconCreate></IconCreate>
                <span class="mx-2">{{$t("create") }}</span>
            </span>
        </button>
    </div>
  <div v-if="update" class="w-full text-center flex justify-center">
      <button  @click="openModal" type="button"
              class="focus:outline-none   w-full mt-2 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm  py-2  dark:focus:ring-yellow-900">
        {{$t("update") }}
      </button>
  </div>




  <!-- Main modal -->
<div v-if="showModal"
     class="fixed overflow-x-auto  top-0 left-0 right-0 z-50 w-full h-screen flex items-center justify-center bg-black bg-opacity-50">
    <div class="relative w-full max-w-xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button @click="closeModal"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="edit-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">

                <div v-if="errorSubmit" class="flex items-center p-4 mb-4 text-sm text-red-800 border
                     border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400
                     dark:border-red-800" role="alert">
                    <ul>
                        <li v-for="errorMessage in errorMessages" :key="errorMessage"> {{errorMessage[0]}} </li>
                    </ul>
                    <button @click="errorSubmit = false" type="button"
                            class="ms-auto -mx-1.5 -my-1.5 bg-red-50
                            text-red-500 rounded-lg
                            focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center
                            justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                            data-dismiss-target="#alert-2" aria-label="Close">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                    </button>
                </div>

                <form @submit.prevent>
                    <div class="grid gap-4 mb-2 sm:grid-cols-2">
                        <div>
                            <label for="name" class="block mb-2 text-sm
                                        font-medium text-gray-900 dark:text-white"> Name
                            </label>
                            <input v-model="course.name" type="text"  id="name"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                   rounded-lg focus:ring-primary-600 focus:border-primary-600 block
                                   w-full  dark:bg-gray-700 dark:border-gray-600
                                   dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                                    dark:focus:border-primary-500" autocomplete="off" >
                        </div>
                        <div>
                            <label for="image" class="block mb-2 text-sm
                                    font-medium text-gray-900 dark:text-white"> Image
                            </label>
                            <input @change="courseImageHandler" type="file"  id="image"
                                    accept="image/heic , image/jpg, image/jpeg, image/JPEG, image/JPG, image/png"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700
                                       dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                       dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    aria-describedby="file_input_help" >
                        </div>
                        <div>
                            <label for="price" class="block mb-2 text-sm
                                    font-medium text-gray-900 dark:text-white"> Price
                            </label>
                            <input v-model="course.price" type="number"  id="price"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                   focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700
                                   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                   dark:focus:ring-primary-500 dark:focus:border-primary-500" >
                        </div>
                        <div>
                            <label for="discountPrice" class="block mb-2 text-sm font-medium
                                    text-gray-900 dark:text-white"> Discount Price
                            </label>
                            <input v-model="course.discountPrice" type="number"  id="price"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                   focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700
                                   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                   dark:focus:ring-primary-500 dark:focus:border-primary-500" >
                        </div>
                        <div>
                            <label for="level" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Level
                            </label>
                            <select v-model="course.level" id="level"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                     rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full
                                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                     dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            >
                                <option value="0">Beginner</option>
                                <option value="1">Middle</option>
                                <option value="2">High</option>
                            </select>
                        </div>
                        <div>
                            <label for="language" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Language
                            </label>
                            <select v-model="course.language" id="language"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                    rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                    dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            >
                                <option value="0">Uzbek</option>
                                <option value="1">Russian</option>
                                <option value="2">English</option>
                            </select>
                        </div>
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Category
                            </label>
                            <select v-model="course.categoryId" id="category"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                     rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full
                                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                     dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            >
                                <option  v-for="category in categories" :key="category.id" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label for="mentors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Mentors
                            </label>
                            <select v-model="course.mentorId" id="mentors"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                    rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                    dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            >
                                <option v-for="mentor in mentors" :key="mentor.id" :value="mentor.id">
                                    {{ mentor.firstName +' ' + mentor.lastName  }}
                                </option>
                            </select>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900
                            dark:text-white">Description</label>
                            <textarea v-model="course.description" id="description" rows="3"
                                      class="block  w-full text-sm text-gray-900
                                        bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400   dark:text-white
                                        dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                  placeholder="Write a description..."
                            >  </textarea>

                        </div>
                        <div class="sm:col-span-2">
                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900
                            dark:text-white">Information</label>
                            <textarea v-model="course.information" id="description" rows="3"
                                      class="block  w-full text-sm text-gray-900
                                        bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400   dark:text-white
                                        dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder="Write a Information..."
                            >  </textarea>

                        </div>
                    </div>
                    <div class="flex justify-end">

                        <button @click="submitHandler" type="button" class="text-white bg-gradient-to-r
                                from-blue-500 via-blue-600 to-blue-700
                                hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
                                dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg
                                dark:shadow-blue-800/80
                                font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                                :disabled="submitBtn">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>
</template>



<style scoped>

</style>