<script setup></script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
    <div class="container d-flex align-items-center justify-content-between">

      <!-- 🔹 Logo -->
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <h1>Logo</h1>
      </router-link>

      <!-- 🔹 Botón responsive -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 🔹 Contenido -->
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">

        <!-- 🔹 Menú centrado -->
        <ul class="navbar-nav mx-auto">

          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/galeria">Galería</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/sobre-nosotros">Sobre Nosotros</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/contactanos">Contáctanos</router-link>
          </li>

        </ul>

        <!-- 🔹 Redes sociales -->
        <div class="social-icons d-flex gap-3">

          <a href="#" target="_blank">
            <i class="bi bi-facebook"></i>
          </a>

          <a href="#" target="_blank">
            <i class="bi bi-instagram"></i>
          </a>

          <a href="#" target="_blank">
            <i class="bi bi-twitter"></i>
          </a>

        </div>

      </div>
    </div>
  </nav>
</template>

<style scoped>

.custom-navbar {
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

/* Logo */
.logo {
  height: 40px;
  object-fit: contain;
}

/* Links */
.nav-link {
  color: #e0e0e0 !important;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #ffffff !important;
  text-shadow: 0 0 4px #ffffff, 0 0 8px #2c5364;
}

/* Activo */
.router-link-exact-active {
  color: #ffffff !important;
  border-bottom: 2px solid #2c5364;
}

/* Redes sociales */
.social-icons a {
  color: #ccc;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  color: #ffffff;
  text-shadow: 0 0 6px #2c5364;
}

</style>