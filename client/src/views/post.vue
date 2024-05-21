<template lang="">
    <section class="m-2 p-4 border">
    <div class="mx-auto w-full" data-aos="fade-up" data-aos-duration="900">
        <div class="">
            <div class="flex">
                <div class="rounded-full border h-12 w-12 text-center"> <FontAwesomeIcon icon="user"   size="2x"/></div>
                <!-- <img src="../assts/logo.webp" alt="Profile" class="w-12 h-12 rounded-full" /> -->
                <div class="mx-2">
                    <div>
                        <p class="text-xl font-bold"> UserName </p>
                        <div class="flex-wrap items-center text-sm">
                            <span>By Bryan Smith</span>
                            <span class="mx-2 font-bold text-2xl">·</span>
                            <span>22h</span>
                        </div>
                    </div>
                    <div class="h-px w-full bg-grat-100">
                        content
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>
<script lang="ts">
import { FontAwesomeIcon } from '../fontawesome'

export default {
    components: {
        FontAwesomeIcon
    }
}
</script>
<style></style>