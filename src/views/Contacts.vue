<script>
export default {

}
</script>

<template>
    <div class="big-container">
        <div class="p-4 big-content d-flex justify-content-center align-items-center">
            <div class="row align-items-center justify-content-between">
                <div class="col-md-6">
                    <img class="ms-md-5 mb-4 mb-md-0 img " src="/public/img/Foto-Curriculum.jpg" alt="Foto Curriculum">
                </div>
                <div class="col-md-6">
                    <h1 class="ms-3 text-white fw-bold animated fadeInDown">Vincenzo Minardi</h1>
                    <h2 class="ms-3 text-white fw-bold animated fadeInDown">Jr. Full Stack Web Developer</h2>
                    <div class="content text-center mt-4 animated fadeInDown">
                        <p class="text-white text fs-3">Benvenuto nella sezione "Contatti" del mio portfolio! Qui
                            troverai tutti i miei dettagli di contatto per metterti in contatto direttamente con me. Se
                            hai domande, suggerimenti o desideri semplicemente discutere di un progetto, non esitare a
                            contattarmi! Sono disponibile per rispondere alle tue richieste e discutere qualsiasi
                            argomento legato al mio lavoro come sviluppatore web.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-contacts d-flex justify-content-center align-items-center">
            <div class="container">
                <div class="btn mt-4"><a href="https://www.instagram.com/vincenzo_minardi99/">Instagam</a></div>
                <div class="btn mt-4"><a href="https://www.linkedin.com/in/vincenzo-minardi-820077279/">LinkedIn</a>
                </div>
                <div class="btn mt-4"><a href="https://github.com/VincenzoMinardi">GitHub</a></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.big-container {
    background-image: url('/public/img/spazi-stellari.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    position: relative;
}

.img {
    border-radius: 6rem;
    height: 500px;

    box-shadow: 0px 10px 20px rgba(1, 10, 1, 2);

}


@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}

body {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(to bottom, #5d326c, #350048);
    /*fiolet*/
}

.container {
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.container .btn {
    position: relative;
    top: 0;
    left: 0;
    width: 250px;
    height: 50px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .btn a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    padding: 10px;
    letter-spacing: 1px;
    text-decoration: none;
    overflow: hidden;
    color: #fff;
    font-weight: 400px;
    z-index: 1;
    transition: 0.5s;
    backdrop-filter: blur(15px);
}

.container .btn:hover a {
    letter-spacing: 3px;
}

.container .btn a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
    transform: skewX(45deg) translate(0);
    transition: 0.5s;
    filter: blur(0px);
}

.container .btn:hover a::before {
    transform: skewX(45deg) translate(200px);
}

.container .btn::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    bottom: -5px;
    width: 30px;
    height: 10px;
    background: #f00;
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0.5;
}

.container .btn:hover::before

/*lightup button*/
    {
    bottom: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
}

.container .btn::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    top: -5px;
    width: 30px;
    height: 10px;
    background: #f00;
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0.5;
}

.container .btn:hover::after

/*lightup button*/
    {
    top: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
}

.container .btn:nth-child(1)::before,
/*chnage 1*/
.container .btn:nth-child(1)::after {
    background: #ff1f71;
    box-shadow: 0 0 5px #ff1f71, 0 0 15px #ff1f71, 0 0 30px #ff1f71,
        0 0 60px #ff1f71;
}

.container .btn:nth-child(2)::before,
/* 2*/
.container .btn:nth-child(2)::after {
    background: #2db2ff;
    box-shadow: 0 0 5px #2db2ff, 0 0 15px #2db2ff, 0 0 30px #2db2ff,
        0 0 60px #2db2ff;
}

.container .btn:nth-child(3)::before,
/* 3*/
.container .btn:nth-child(3)::after {
    background: black;
    box-shadow: 0 0 5px black, 0 0 15px black, 0 0 30px black,
        0 0 60px black;
}
</style>
