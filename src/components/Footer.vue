<script setup></script>
<template>
  <footer class="footer">
    <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center py-3">

      <!-- 🔹 LOGO TEXTO -->
      <div class="logo-text mb-2 mb-md-0">
        Logo
      </div>

      <!-- 🔹 COPYRIGHT -->
      <div class="copyright text-center">
        © 2026 MiSitio - Todos los derechos reservados
      </div>

      <!-- 🔹 REDES -->
      <div class="social-icons d-flex gap-3 mt-2 mt-md-0">
        <a href="#"><i class="bi bi-facebook"></i></a>
        <a href="#"><i class="bi bi-instagram"></i></a>
        <a href="#"><i class="bi bi-twitter"></i></a>
      </div>

    </div>
  </footer>
</template>
<style scoped>
.footer {
  background: #0a161b;
  border-top: 1px solid rgba(255,255,255,0.08);
  color: #fff; /* 🔥 fuerza texto blanco */
}

/* Logo estilo (como imagen pero texto) */
.logo-text {
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 1px;
}

/* Texto copyright */
.copyright {
  color: #ccc;
  font-size: 0.9rem;
}

/* Redes */
.social-icons a {
  color: #ccc;
  font-size: 1.2rem;
  transition: 0.3s;
}

.social-icons a:hover {
  color: #fff;
}
</style>