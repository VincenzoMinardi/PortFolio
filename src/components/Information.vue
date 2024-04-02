<template>
  <!-- Chi sono -->
  <div class="p-4 big-content">
    <div class="row align-items-center justify-content-between">
      <div class="col-md-6">
        <img class="ms-md-5 mb-4 mb-md-0 img" src="/public/img/Foto-Curriculum.jpg" alt="Foto Curriculum">
      </div>
      <div class="col-md-6">
        <h1 class="ms-md-5 text-white fw-bold animated fadeInDown">Vincenzo Minardi</h1>
        <h2 class="ms-md-5 text-white fw-bold animated fadeInDown">Jr. Full Stack Web Developer</h2>
        <div class="content text-center mt-4 animated fadeInDown">
          <h3 class="text-white">Ciao a tutti e benvenuti nel mio portfolio! Sono entusiasta di darvi il benvenuto in
            questo spazio dove potrete esplorare e scoprire il mio percorso come sviluppatore web. Qui troverete una
            raccolta dei miei progetti più recenti e significativi, frutto della mia passione e impegno nel campo dello
            sviluppo web.</h3>
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

.img {
  max-width: 60%;
  height: auto;
  border-radius: 3rem;
}

.big-content {
  background-image: url(../img/foto.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.content {
  max-width: 500px;
  text-align: center;
  margin-top: 6rem;
}

.animated {
  animation-delay: .5s;
}

.project {
  background-color: black;
}
</style>
