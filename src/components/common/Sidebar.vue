
<script setup>
import IconDashboard from "../icons/IconDashboard.vue";
import IconCategories from "../icons/IconCategories.vue";
import IconMasters from "..//icons/IconMasters.vue";
import IconCourse from "../icons/IconCourse.vue";
import IconCourseModuls from "../icons/IconCourseModuls.vue";
import IconStudents from "../icons/IconStudents.vue";
import IconVideos from "../icons/IconVideos.vue";
import IconSettings from "../icons/IconSettings.vue";
import IconMentors from "../icons/IconMentors.vue";
import IconCourseComments from "../icons/IconCourseComments.vue";
import IconCourseRequirments from "../icons/IconCourseRequirments.vue";
import IconCourseBenefits from "../icons/IconCourseBenefits.vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<template>
    <aside id="logo-sidebar" class="fixed top-0 bg-gray-100 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full  border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <RouterLink to="/dashboard">
                        <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <IconDashboard></IconDashboard>
                            <span class="ml-3">{{ $t("dashboard") }}</span>
                        </div>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/category">
                        <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <IconCategories></IconCategories>
                            <span class="flex-1 ml-3 whitespace-nowrap">{{ $t("categories") }}</span>
                        </div>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/students">
                        <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <IconStudents></IconStudents>
                            <span class="flex-1 ml-3 whitespace-nowrap">{{ $t("students") }}</span>
                        </div>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/mentors">
                        <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <IconMentors></IconMentors>
                            <span class="flex-1 ml-3 whitespace-nowrap">{{ $t("mentors") }}</span>
                        </div>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/modules">
                        <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <IconCourseModuls> </IconCourseModuls>
                            <span class="flex-1 ml-3 whitespace-nowrap">{{ $t("coursemoduls") }}</span>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/courses">
                        <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <IconCourse> </IconCourse>
                            <span class="flex-1 ml-3 whitespace-nowrap">{{ $t("course") }}</span>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/videos">
                        <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <IconVideos></IconVideos>
                            <span class="flex-1 ml-3 whitespace-nowrap">{{ $t("videos") }}</span>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/comments">
                        <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <IconCourseComments></IconCourseComments>
                            <span class="flex-1 ml-3 whitespace-nowrap">{{ $t("coursecomments") }}</span>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/requirements">
                        <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <IconCourseRequirments></IconCourseRequirments>
                            <span class="flex-1 ml-3 whitespace-nowrap">{{ $t("courserequirments") }}</span>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/benefits">
                        <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <IconCourseBenefits></IconCourseBenefits>
                            <span class="flex-1 ml-3 whitespace-nowrap">{{ $t("coursebenefits") }}</span>
                        </div>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </aside>
</template>


<style scoped>

</style>