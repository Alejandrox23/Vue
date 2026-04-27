<script setup>
import { ref } from 'vue';

/* 🔥 DATOS */
const nombre = ref('');
const email = ref('');
const telefono = ref('');
const interes = ref('');
const mensaje = ref('');

/* 🔥 WHATSAPP (Ecuador sin 0 → 593) */
const numero = '593986480713';

/* 🔥 ENVIAR */
const enviarWhatsApp = () => {

  // ✅ VALIDACIÓN
  if (!nombre.value || !email.value || !interes.value || !mensaje.value) {
    alert("Completa los campos obligatorios");
    return;
  }

  // 🔥 MENSAJE FORMATEADO
  const texto = 
`Hola, muy buenas 👋

Soy ${nombre.value}.

Estoy interesado en ${interes.value} y me gustaría recibir más información.

Email: ${email.value}
Teléfono: ${telefono.value || 'No especificado'}

Mensaje:
${mensaje.value}

Quedo atento, gracias.`;

  // 🔥 URL WHATSAPP
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  // 🔥 ABRIR
  window.open(url, '_blank');
};
</script>

<template>
  <div class="contacto-page text-white">

    <!-- 🔥 HERO -->
    <section class="hero d-flex align-items-center justify-content-center text-center">
      <div class="overlay"></div>

      <div class="container position-relative">
        <h1 class="titulo">
          CONTÁCTA<span class="text-green">NOS</span>
        </h1>
        <p class="subtitulo">Conecta • Colabora • Crea</p>
      </div>
    </section>

    <!-- 🔥 FORM -->
    <section class="container py-5">
      <div class="formulario-box mx-auto">

        <h3 class="text-center mb-4">Envíanos un mensaje</h3>

        <form @submit.prevent="enviarWhatsApp">

          <!-- NOMBRE -->
          <div class="mb-3">
            <label>Nombre *</label>
            <input v-model="nombre" type="text" class="form-control">
          </div>

          <!-- EMAIL -->
          <div class="mb-3">
            <label>Email *</label>
            <input v-model="email" type="email" class="form-control">
          </div>

          <!-- TEL -->
          <div class="mb-3">
            <label>Teléfono</label>
            <input v-model="telefono" type="text" class="form-control">
          </div>

          <!-- INTERÉS -->
          <div class="mb-3">
            <label>Interés *</label>
            <select v-model="interes" class="form-select">
              <option disabled value="">Seleccione</option>
              <option>Bustos</option>
              <option>Escultura</option>
              <option>Mural</option>
              <option>Literatura</option>
              <option>Diseño</option>
            </select>
          </div>

          <!-- MENSAJE -->
          <div class="mb-3">
            <label>Mensaje *</label>
            <textarea v-model="mensaje" rows="4" class="form-control"></textarea>
          </div>

          <!-- BOTÓN -->
          <button type="submit" class="btn btn-green w-100">
            Enviar a WhatsApp
          </button>

        </form>

      </div>
    </section>

  </div>
</template>

<style scoped>

/* HERO */
.hero {
  height: 50vh;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)),
              url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70');
  background-size: cover;
  background-position: center;
  position: relative;
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

/* FORM */
.formulario-box {
  max-width: 600px;
  background: rgba(255,255,255,0.03);
  padding: 30px;
  border-radius: 15px;
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(8px);
}

/* INPUTS */
.form-control,
.form-select {
  background: rgba(0,0,0,0.6);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
}

.form-control:focus,
.form-select:focus {
  border-color: #00ff88;
  box-shadow: 0 0 10px #00ff88;
  background: rgba(0,0,0,0.8);
  color: white;
}

/* BOTÓN */
.btn-green {
  background: #00ff88;
  color: black;
  font-weight: bold;
  transition: 0.3s;
}

.btn-green:hover {
  background: black;
  color: #00ff88;
  border: 1px solid #00ff88;
  box-shadow: 0 0 10px #00ff88;
}

/* MOBILE */
@media (max-width: 768px) {
  .hero {
    height: 35vh;
  }
}

</style>