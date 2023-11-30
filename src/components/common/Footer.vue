<template>

    <footer class="bg-gray-100 ml-64  rounded-lg shadow  border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">{{$t('AllRightsReserved')}}
    </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">{{$t('About')}}</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">{{$t('Policy')}}</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6"> {{$t('License')}} </a>
                </li>
                <li>
                    <a href="#" class="hover:underline">{{$t('Contact')}}</a>
                </li>
            </ul>
        </div>
    </footer>

</template>

<script setup>

</script>

<style scoped>

</style>