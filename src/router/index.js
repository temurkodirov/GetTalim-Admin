import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/auth/Login.vue"
import dashboard from '@/views/dashboard/DashboardView.vue';
import benefitView from "@/views/benefits/BenefitView.vue";
import categoryView from "@/views/categories/CategoryView.vue";
import courseView from "@/views/courses/CourseView.vue";
import mentorView from "@/views/mentors/MentorView.vue";
import moduleView from "@/views/modules/ModulView.vue";
import requirementView from "@/views/requirments/RequirementView.vue";
import studentView from "@/views/students/StudentView.vue";
import videoView from "@/views/videos/VideoView.vue";
import commentView from "@/views/comments/commentView.vue";
import courseDetailsView from "@/components/courses/CourseDetailsView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: ()=> import("../layouts/Layouts.vue"),
      redirect:"/auth/login",
      children: [
        {
          path: "dashboard",
          component: dashboard
        },
        {
          path: "category",
          component: categoryView
        },
        {
          path: "students",
          component: studentView
        },
        {
          path: "mentors",
          component: mentorView
        },
        {
          path: "modules",
          component: moduleView
        },
        {
          path: "courses",
          component: courseView
        },
        {
          path: "videos",
          component: videoView
        },
        {
          path: "comments",
          component: commentView
        },
        {
          path: "requirements",
          component: requirementView
        },
        {
          path: "benefits",
          component: benefitView
        },
        {
          path: "a-course/:id",
          name:'a-course',
          component: courseDetailsView
        }
      ]

    },
    {
      path: "/auth",
      component: ()=> import("../layouts/AuthLayout.vue"),
      redirect: "/auth/login",
      children: [
        {
          path: "login",
          component: Login
        }
      ]
    }
  ]
})

export default router
