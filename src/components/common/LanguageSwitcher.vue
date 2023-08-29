<script setup>
import IconEnglish from "../icons/languages/IconEnglish.vue";
import IconUzbek from "../icons/languages/IconUzbek.vue";
import IconRussian from "../icons/languages/IconRussian.vue";
import { useI18n } from "vue-i18n";

const t = useI18n();
function changeLanguage(language){
    t.locale.value = language;
    localStorage.setItem("language", language);
}

</script>
<template >
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div class="flex items-center md:order-2">

            <!--begin::Uzbek-->
            <button v-show="t.locale.value == 'uz'" type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                <IconUzbek></IconUzbek>
                {{ $t("uz") }}
            </button>
            <!--end::Uzbek-->

            <!--begin::Russian-->
            <button v-show="t.locale.value == 'ru'" type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                <IconRussian></IconRussian>
                {{ $t("ru") }}
            </button>
            <!--end::Russian-->

            <!--begin::English-->
            <button v-show="t.locale.value == 'en'" type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                <IconEnglish></IconEnglish>
                {{ $t("en") }}

            </button>
            <!--end::English-->

            <!-- Dropdown -->
            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
                <ul class="py-2 font-medium" role="none">
                    <li>
                        <button @click="changeLanguage('uz')" class="w-40 items-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                            <div class="flex flex-wrap mx-2 items-center">
                                <IconUzbek></IconUzbek>
                                {{ $t("uz") }}
                            </div>
                        </button>
                    </li>
                    <li>
                        <button @click="changeLanguage('ru')" class="w-40 items-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                            <div class="flex flex-wrap mx-2 items-center">
                                <IconRussian></IconRussian>
                                {{ $t("ru") }}
                            </div>
                        </button>
                    </li>
                    <li>
                        <button @click="changeLanguage('en')" class="w-40 items-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                            <div class="flex flex-wrap mx-2 items-center">
                                <IconEnglish></IconEnglish>
                                {{ $t("en") }}
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>



<style scoped>

</style>