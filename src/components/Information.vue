<template>

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

.animated {
  animation-delay: .5s;
}

.project {
  background-color: black;
}
</style>