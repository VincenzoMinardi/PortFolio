<script>
export default {
    data() {
        return {

            projects: [
                {
                    // Projects HTML - CSS
                    projectTypes: "Progetti Boolean [HTML - CSS]",
                    arrProjects: [
                        {
                            id: 1,
                            image: "./img/responsive-layout.png",
                            name: "Layout",
                            technologies: "HTML - CSS",
                            collaborators: "No",
                            description: "The first project with Boolean Accademy",
                            link: "https://ornate-starburst-e95f48.netlify.app/",

                        },
                        {
                            id: 2,
                            image: "./img/Dropbox.png",
                            name: "Dropbox",
                            technologies: "HTML - CSS",
                            collaborators: "No",
                            description: "Dropbox",
                            link: "https://jocular-daffodil-bd2b4d.netlify.app",

                        },
                        {
                            id: 3,
                            image: "./img/discord.png",
                            name: "Discord",
                            technologies: "HTML - CSS",
                            collaborators: "No",
                            description: "Discord",
                            link: "https://sweet-cactus-cf327f.netlify.app",

                        },
                        {
                            id: 4,
                            image: "./img/wannabe.png",
                            name: "Wannabe",
                            technologies: "HTML - CSS",
                            collaborators: "No",
                            description: "Wannabe",
                            link: "https://wonderful-gecko-b4efee.netlify.app",

                        },
                        {
                            id: 5,
                            image: "./img/float-cards.png",
                            name: "Float-Cards",
                            technologies: "HTML - CSS",
                            collaborators: "No",
                            description: "Float-cards",
                            link: "https://visionary-kringle-27471e.netlify.app",

                        },
                        {
                            id: 6,
                            image: "./img/dashboard.png",
                            name: "DashBoard",
                            technologies: "HTML - CSS",
                            collaborators: "No",
                            description: "Dashboard",
                            link: "https://celadon-biscotti-42e8e0.netlify.app",

                        },
                        {
                            id: 7,
                            image: "./img/bootstrap.png",
                            name: "Bootstrap",
                            technologies: "HTML - CSS",
                            collaborators: "No",
                            description: "Bootstrap",
                            link: "https://benevolent-rabanadas-dce92b.netlify.app",

                        },
                        {
                            id: 8,
                            image: "./img/spotify-web.png",
                            name: "Spotify-Web",
                            technologies: "HTML - CSS",
                            collaborators: "No",
                            description: "Spotify-Web",
                            link: "https://glittering-stroopwafel-826e20.netlify.app",

                        },
                        {
                            id: 9,
                            image: "./img/Boolando.png",
                            name: "Boolando",
                            technologies: "HTML - CSS",
                            collaborators: "No",
                            description: "A site of Boolando",
                            link: "https://peaceful-valkyrie-6a0dd9.netlify.app",

                        },
                        {
                            id: 10,
                            image: "./img/booleaner.png",
                            name: "Booleaner",
                            technologies: "HTML - CSS",
                            collaborators: "No",
                            description: "Booleaner",
                            link: "https://gleaming-lamington-bb1095.netlify.app",
                        },
                    ]
                },

            ],

        }
    },
}
</script>


<template>
    <div class="project p-3">
        <h1 class="text-center text-white fw-bold animated fadeIn">I miei Progetti</h1>
        <h2 class="text-center text-white mt-2">HTML-CSS</h2>
        <div v-for="groupProject in projects" :key="groupProject.projectTypes"
            class="d-flex justify-content-center flex-wrap gap-4">
            <div v-for="project in groupProject.arrProjects" :key="project">
                <div class="card mt-4" style="width: 20rem;">
                    <img :src="project.image" class="card-img-top" :alt="project.name">
                    <div class="card-body">
                        <h3 class="card-title">{{ project.name }}</h3>
                        <div class="card-body">
                            <a :href="project.link" class="card-link">Sito</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project {
    background-color: black;
}

.card-img-top {
    height: 150px;
}
</style>