<template>
    <section class="section-client-detail">
        <div class="section-client-detail--info">
            <h2>{{ client.name }} | {{ client.type }}</h2>
            <div class="section-client-detail--info--text">
                <p v-html="client.details.description"></p>
            </div>
        </div>
        <div class="section-client-detail--images" v-if="client.details.images.length > 0">
            <div
                v-for="images in client.details.images"
                :key="images"
            >
                <img
                    v-for="image in images.srcs"
                    :key="image"
                    :src="require(`@/assets/img/clients/details/${image}`)"
                />

                <p>{{ images.caption }}</p>

            </div>
        </div>
        <div class="section-client-detail--videos" v-if="client.details.videos.length > 0">
            <video
                v-for="video in client.details.videos"
                :key="video"
                controls
                :src="fetchVideoPath(video)"
                :class="{'big': video === client.details.videos[0]}"
                muted
                autoplay
            >

            </video>
        </div>
        <div class="section-client-detail--yt" v-if="client.details.ytIds.length > 0">
                <VueYtframe
                    v-for="ytId in client.details.ytIds"
                    :key="ytId"
                    :video-id="ytId"
                    height="300"
                    ref="yt"
                    width="60%"
                    :player-vars="{ autoplay: 0, listType: 'user_uploads' }"
                />
        </div>
    </section> 
</template>

<script>
import {ref} from 'vue';
// eslint-disable-next-line
import VueYtframe from 'vue3-ytframe';

export default {
    name: 'ClientDetailComponent',
    data() {
        return {
            yt: ref(null)
        };
    },
    props: {
        client: {
            type: Object,
            required: true
        }
    },
    methods: {
        fetchVideoPath(video) {
            return require(`@/assets/mp4/${video}`);
        },
    },
};
</script>