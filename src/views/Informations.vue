<script>
</script>


<template>
    <!-- information -->
    <div class="p-4 big-content container-fluid ">
        <div class="row align-items-center justify-content-center">
            <div class="col-md-6 d-flex justify-content-center">
                <img class="mb-4 img" src="/public/img/Foto-Curriculum.jpg" alt="Foto Curriculum">
            </div>
            <div class="col-md-6 text-center">
                <h1 class=" ms-4 text-white fw-bold animated fadeInDown">Vincenzo Minardi</h1>
                <h2 class=" ms-4 text-white fw-bold animated fadeInDown">Jr. Full Stack Web Developer</h2>
                <div class="content mt-4 animated fadeInDown">
                    <h3 class="text-white text-center">Ciao a tutti e benvenuti nel mio portfolio! Sono
                        entusiasta di
                        darvi il
                        benvenuto in questo spazio dove potrete esplorare e scoprire il mio percorso come sviluppatore
                        web. Qui troverete una raccolta dei miei progetti più recenti e significativi, frutto della mia
                        passione e impegno nel campo dello sviluppo web.</h3>
                </div>
            </div>
        </div>




        <!-- Skills -->
        <h1 class="text-center text-white fw-bold animated fadeIn mb-4 mt-4">Skills</h1>
        <div class="d-flex justify-content-center align-items-center ">
            <div class="d-flex justify-content-center flex-wrap gap-4 animated fadeIn">
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <img src="/public/img_skills/HTML.svg" class="img-fluid img-skills " alt="">
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <img src="/public/img_skills/CSS.svg" class="img-fluid img-skills " alt="">
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <img src="/public/img_skills/Bootstrap.svg" class="img-fluid img-skills " alt="">
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <img src="/public/img_skills/JavaScript.svg" class="img-fluid img-skills " alt="">
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <img src="/public/img_skills/VueJS-Dark.svg" class="img-fluid img-skills " alt="">
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <img src="/public/img_skills/PHP-Dark.svg" class="img-fluid img-skills " alt="">
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <img src="/public/img_skills/Laravel-Dark.svg" class="img-fluid img-skills " alt="">
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <img src="/public/img_skills/MySQL-Light.svg" class="img-fluid img-skills " alt="">
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <img src="/public/img_skills/Postman.svg" class="img-fluid img-skills " alt="">
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <img src="/public/img_skills/Sass.svg" class="img-fluid img-skills " alt="">
                </div>
            </div>
        </div>


        <div class="d-flex justify-content-center gap-3 mt-5">
            <router-link to="/projects">
                <button class="btn text-center p-4">Progetti</button>
            </router-link>
            <router-link to="/contacts">
                <button class="btn text-center p-4">Contatti</button>
            </router-link>
            <router-view></router-view>
        </div>
    </div>


</template>



<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}



.big-content {
    background-image: url(/public/img/foto.jpg);
    background-size: cover;
}

.img {

    border-radius: 3rem;
    height: 350px;
    box-shadow: 0px 10px 20px rgba(1, 10, 1, 2);
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

.img-skills {
    height: 230px;
}
</style>