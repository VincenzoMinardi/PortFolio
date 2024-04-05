<script>
</script>


<template>
    <!-- information -->
    <div class="p-4 big-content container-fluid">
        <div class="row align-items-center justify-content-between">
            <div class="col-md-6">
                <img class="ms-md-5 mb-4 mb-md-0 img img-fluid" src="/public/img/Foto-Curriculum.jpg"
                    alt="Foto Curriculum">
            </div>
            <div class="col-md-6">
                <h1 class="ms-3 text-white fw-bold animated fadeInDown">Vincenzo Minardi</h1>
                <h2 class="ms-3 text-white fw-bold animated fadeInDown">Jr. Full Stack Web Developer</h2>
                <div class="content text-center mt-4 animated fadeInDown">
                    <h3 class="text-white text">Ciao a tutti e benvenuti nel mio portfolio! Sono entusiasta di
                        darvi il
                        benvenuto in questo spazio dove potrete esplorare e scoprire il mio percorso come sviluppatore
                        web. Qui troverete una raccolta dei miei progetti più recenti e significativi, frutto della mia
                        passione e impegno nel campo dello sviluppo web.</h3>
                </div>
            </div>
        </div>


        <!-- Skills -->
        <div class="skills p-3">
            <h1 class="text-center text-white fw-bold animated fadeIn">Skills</h1>
            <div class="cont-card d-flex justify-content-center flex-wrap animated fadeInDown p-4">
                <div class="card mb-3 ms-3" style="width: 18rem;">
                    <img src="/public/img_skills/html.jpg" class="card-img-top" alt="">
                </div>
                <div class="card mb-3 ms-3" style="width: 18rem;">
                    <img src="/public/img_skills/css.jpg" class=" card-img-top" alt="">
                </div>
                <div class="card mb-3 ms-3" style="width: 18rem;">
                    <img src="/public/img_skills/bootstrap.jpg" class="card-img-top" alt="">
                </div>
                <div class="card mb-3 ms-3" style="width: 18rem;">
                    <img src="/public/img_skills/javascript.jpg" class="card-img-top" alt="">
                </div>
                <div class="card mb-3 ms-3" style="width: 18rem;">
                    <img src="/public/img_skills/vue.jpg" class="card-img-top" alt="">
                </div>
                <div class="card mb-3 ms-3" style="width: 18rem;">
                    <img src="/public/img_skills/php.jpg" class="card-img-top" alt="">
                </div>
                <div class="card mb-3 ms-3" style="width: 18rem;">
                    <img src="/public/img_skills/laravel.jpg" class="card-img-top" alt="">
                </div>
                <div class="card mb-3 ms-3" style="width: 18rem;">
                    <img src="/public/img_skills/mysql.jpg" class="card-img-top" alt="">
                </div>
                <div class="card mb-3 ms-3" style="width: 18rem;">
                    <img src="/public/img_skills/postman.jpg" class="card-img-top" alt="">
                </div>
                <div class="card mb-3 ms-3" style="width: 18rem;">
                    <img src="/public/img_skills/sass.jpg" class="card-img-top" alt="">
                </div>
            </div>
            <div class="d-flex justify-content-center gap-3 mt-5 ms-5">
                <router-link to="/project">
                    <button a="/project" class="btn text-center">Progetti</button>
                </router-link>
                <router-link to="/contacts">
                    <button a="/project" class="btn text-center">Contatti</button>
                </router-link>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>



<style scoped>
.big-content {
    background-image: url(/public/img/foto.jpg);
    background-size: cover;
}

.img {

    border-radius: 3rem;
    height: 400px;
}

.text {
    max-width: 60%;
}

/* style button */
.btn {
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgb(14, 14, 26);
    color: rgb(234, 234, 234);
    font-weight: 700;
    transition: 0.6s;
    box-shadow: 0px 0px 60px #1f4c65;
    -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4));
}

.btn:active {
    scale: 0.92;
}

.btn:hover {
    background: rgb(2, 29, 78);
    background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);
    color: rgb(4, 4, 38);
}


/* skills */

.card-img-top {
    height: 200px;
    object-fit: contain;
}
</style>