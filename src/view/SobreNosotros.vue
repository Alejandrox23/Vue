<script setup>
import { onMounted } from 'vue';

/* 🔥 ANIMACIÓN SCROLL */
onMounted(() => {
  const elements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
});
</script>

<template>
  <div class="sobre-page text-white">

    <!-- 🔥 HERO -->
    <section class="hero d-flex align-items-center justify-content-center text-center">
      <div class="overlay"></div>

      <div class="container position-relative z-2">
        <h1 class="titulo">
          SOBRE <span class="text-green">NOSOTROS</span>
        </h1>
        <p class="subtitulo">
          Arte • Identidad • Expresión
        </p>
      </div>
    </section>

    <!-- 🧑‍🎨 ARTISTA -->
    <section class="container py-5 reveal">
      <div class="row align-items-center g-5">

        <!-- FOTO -->
        <div class="col-md-5 text-center">
          <div class="foto-wrapper">
            <img 
              src="https://picsum.photos/500/500?random=30" 
              class="foto-artista"
            />
          </div>
        </div>

        <!-- INFO -->
        <div class="col-md-7">
          <h2 class="nombre">Israel Canbal</h2>

          <p class="rol text-green">
            Artista Visual • Fundador
          </p>

          <div class="linea-verde"></div>

          <p class="bio">
            Israel Canbal es un artista visual enfocado en la exploración 
            del arte contemporáneo a través de disciplinas como pintura, 
            escultura y medios digitales.
          </p>

          <p class="bio">
            Su trabajo refleja identidad, innovación y expresión, integrando 
            conceptos modernos con una visión cultural y artística.
          </p>

          <p class="bio">
            Su objetivo es generar experiencias visuales que conecten con el 
            espectador más allá de lo estético.
          </p>

          <!-- 🔥 MISIÓN Y VISIÓN -->
          <div class="row mt-4 g-3">

            <div class="col-md-6">
              <div class="card-custom h-100">
                <i class="bi bi-bullseye icono"></i>
                <h5>Misión</h5>
                <p>
                  Crear obras que transmitan identidad y pensamiento, usando el arte 
                  como medio de expresión contemporánea.
                </p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card-custom h-100">
                <i class="bi bi-eye icono"></i>
                <h5>Visión</h5>
                <p>
                  Consolidarse como un artista independiente referente en innovación 
                  visual y conceptual.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- 🌿 HOJA -->
    <section class="seccion-dark py-5 reveal">
      <div class="container">

        <div class="text-center mb-4">
          <h2 class="titulo-seccion">
            COLECTIVO <span class="text-green">HOJA</span>
          </h2>
          <div class="linea-centro"></div>
        </div>

        <div class="row g-4">

          <div class="col-md-6">
            <div class="card-custom h-100">
              <i class="bi bi-people icono"></i>
              <h4>¿Qué es HOJA?</h4>
              <p>
                HOJA es un colectivo artístico que impulsa la creación, 
                colaboración y difusión del arte contemporáneo.
              </p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card-custom h-100">
              <i class="bi bi-lightbulb icono"></i>
              <h4>Propósito</h4>
              <p>
                Apoyar el talento emergente y crear espacios para el desarrollo 
                artístico en múltiples disciplinas.
              </p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card-custom h-100">
              <i class="bi bi-eye icono"></i>
              <h4>Visión</h4>
              <p>
                Ser un referente creativo que conecte arte, cultura y tecnología.
              </p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card-custom h-100">
              <i class="bi bi-brush icono"></i>
              <h4>Enfoque</h4>
              <p>
                Integrar pintura, escultura, literatura y arte digital en una 
                sola identidad artística.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>

/* 🔥 HERO */
.hero {
  height: 60vh;
  position: relative;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)),
              url('https://images.unsplash.com/photo-1518779578993-ec3579fee39f');
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  inset: 0;
}

/* TEXTOS */
.titulo {
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 900;
}

.subtitulo {
  opacity: 0.8;
  letter-spacing: 2px;
}

.text-green {
  color: #00ff88;
}

/* FOTO */
.foto-wrapper {
  border: 2px solid #00ff88;
  padding: 10px;
  border-radius: 20px;
  display: inline-block;
  box-shadow: 0 0 25px rgba(0,255,136,0.2);
}

.foto-artista {
  width: 100%;
  max-width: 350px;
  border-radius: 15px;
}

/* INFO */
.nombre {
  font-size: 2rem;
  font-weight: bold;
}

.rol {
  margin-bottom: 10px;
}

.linea-verde {
  width: 60px;
  height: 3px;
  background: #00ff88;
  margin: 15px 0;
}

.bio {
  opacity: 0.85;
}

/* HOJA */
.seccion-dark {
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(6px);
}

.titulo-seccion {
  text-align: center;
  font-weight: bold;
}

.linea-centro {
  width: 80px;
  height: 3px;
  background: #00ff88;
  margin: 10px auto 30px;
}

/* CARDS */
.card-custom {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 25px;
  border-radius: 15px;
  transition: 0.3s;
  backdrop-filter: blur(8px);
}

.card-custom:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: #00ff88;
  box-shadow: 0 0 20px rgba(0,255,136,0.2);
}

.icono {
  font-size: 2rem;
  color: #00ff88;
  margin-bottom: 10px;
}

/* 🔥 SCROLL ANIMATION */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* 📱 */
@media (max-width: 768px) {
  .hero {
    height: 40vh;
  }
}

</style>