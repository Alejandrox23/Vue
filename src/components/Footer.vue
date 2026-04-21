<script setup></script>
<template>
  <footer class="footer">
    <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center py-3">

      <!-- 🔹 LOGO / NOMBRE -->
      <div class="logo-text mb-2 mb-md-0">
        MiSitio
      </div>

      <!-- 🔹 COPYRIGHT -->
      <div class="copyright text-center">
        © 2026 MiSitio - Todos los derechos reservados
      </div>

      <!-- 🔹 REDES SOCIALES -->
      <div class="social-icons d-flex gap-3 mt-2 mt-md-0">
        <a href="#" aria-label="Facebook">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i class="bi bi-twitter"></i>
        </a>
      </div>

    </div>
  </footer>
</template>
<style scoped>
.footer {
  background: #0a161b;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: #fff;
}

/* 🔹 Logo */
.logo-text {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 1px;
}

/* 🔹 Copyright */
.copyright {
  font-size: 0.9rem;
  color: #b0b0b0;
}

/* 🔹 Redes sociales */
.social-icons a {
  color: #b0b0b0;
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

/* Hover bonito */
.social-icons a:hover {
  color: #ffffff;
  transform: translateY(-3px);
}

/* 🔹 Responsive (mejora en móvil) */
@media (max-width: 768px) {
  .footer {
    text-align: center;
  }

  .logo-text {
    margin-bottom: 5px;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>