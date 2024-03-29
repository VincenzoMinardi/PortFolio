<template>
    <div>
        <!-- Chi sono -->
      <div class="p-4 big-content">
        <div class="d-flex justify-content-between">
          <div>
            <img class="ms-5" src="../img/Foto-Curriculum.jpg" alt="Foto Curriculum">
            <h1 class="ms-5 text-white fw-bold animated fadeInDown">Vincenzo Minardi</h1>
            <h2 class="ms-5 text-white fw-bold animated fadeInDown">Jr.Full-Stack-Web-Developer</h2>
          </div>
          <div class="content d-flex justify-content-center sm animated fadeInDown">
            <h3 class="text-white">Ciao a tutti e benvenuti nel mio portfolio! Sono entusiasta di darvi il benvenuto
              in questo spazio dove potrete esplorare e scoprire il mio percorso come sviluppatore web. Qui
              troverete una raccolta dei miei progetti più recenti e significativi, frutto della mia passione e
              impegno nel campo dello sviluppo web.</h3>
          </div>
        </div>
      </div>
      <!-- Le mie Skills -->
      <div class="skills p-3">
        <h1 class="text-center text-white fw-bold animated fadeIn">Skills</h1>
        <div class="cont-card d-flex justify-content-center flex-wrap animated fadeInDown p-4">
          <div class="card mb-3 ms-3" style="width: 18rem;">
            <img src="../img/img_skills/html.jpg" class="card-img-top" alt="">
          </div>

          <div class="card mb-3 ms-3" style="width: 18rem;">
            <img src="../img/img_skills/css.jpg" class="card-img-top" alt="">
          </div>

          <div class="card mb-3 ms-3" style="width: 18rem;">
            <img src="../img/img_skills/bootstrap.jpg" class="card-img-top" alt="">
          </div>

          <div class="card mb-3 ms-3" style="width: 18rem;">
            <img src="../img/img_skills/javascript.jpg" class="card-img-top" alt="">
          </div>

          <div class="card mb-3 ms-3" style="width: 18rem;">
            <img src="../img/img_skills/vue.jpg" class="card-img-top" alt="">
          </div>

          <div class="card mb-3 ms-3" style="width: 18rem;">
            <img src="../img/img_skills/php.jpg" class="card-img-top" alt="">
          </div>

          <div class="card mb-3 ms-3" style="width: 18rem;">
            <img src="../img/img_skills/laravel.jpg" class="card-img-top" alt="">
          </div>

          <div class="card mb-3 ms-3" style="width: 18rem;">
            <img src="../img/img_skills/mysql.jpg" class="card-img-top" alt="">
          </div>

          <div class="card mb-3 ms-3" style="width: 18rem;">
            <img src="../img/img_skills/postman.jpg" class="card-img-top" alt="">
          </div>

          <div class="card mb-3 ms-3" style="width: 18rem;">
            <img src="../img/img_skills/sass.jpg" class="card-img-top" alt="">
          </div>
        </div>
      </div>
        <!-- I miei Progetti -->
      <div class="project p-3">
        <h1 class="text-center text-white fw-bold animated fadeIn">I miei Progetti</h1>
        <h2 class="text-center text-white mt-2">HTML-CSS</h2>
        <div class="d-flex">
          <div class="card mt-4" style="width: 18rem;">
            <img src="../img/img-project/Boolando.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Boolando</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="card-body">
                <a href="https://ornate-starburst-e95f48.netlify.app/" class="card-link">Sito</a>
                
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  </template>
  
  <style scoped>
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.big-content {
  background-image: url(../img/foto.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

img {
  height: 500px;
  border-radius: 4rem;
}

.content {
  max-width: 500px;
  text-align: center;
  margin-top: 6rem;
}

.skills {
  background-image: url(../img/foto3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.card-img-top {
 height: 200px;
 object-fit: contain;
}

.animated {
animation-delay: .5s;
}

.project {
  background-color: black;
}
</style>




  