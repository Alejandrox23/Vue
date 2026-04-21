<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'bi bi-app'
  }
});
</script>

<template>
  <div class="section-container container-fluid py-4">
    <div class="d-flex align-items-center w-100 section-header">

      <!-- Icono dinámico -->
      <div class="flex-shrink-0 icon-wrapper">
        <i :class="[props.icon, 'text-green', 'fs-2']"></i>
      </div>

      <!-- Título -->
      <div class="flex-shrink-0">
        <h2 class="title-text">
          {{ props.label }}
        </h2>
      </div>

      <!-- Línea -->
      <div class="flex-grow-1 ms-4">
        <div class="divider-line"></div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* 🔹 Contenedor general */
.section-header {
  gap: 10px; /* evita que todo quede pegado */
}

/* 🔹 Icono */
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 🔹 Color verde principal */
.text-green {
  color: #00ff88 !important;
}

/* 🔹 Título */
.title-text {
  color: #ffffff !important;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 0;
  white-space: nowrap;
  font-family: sans-serif;
}

/* 🔹 Línea decorativa */
.divider-line {
  height: 2px;
  background-color: #00ff88;
  box-shadow: 0 0 10px rgba(0, 255, 136, 0.4);
}

/* 🔹 Responsive */
@media (max-width: 576px) {
  .title-text {
    font-size: 1.2rem;
    letter-spacing: 2px;
  }

  .divider-line {
    opacity: 0.6;
  }
}
</style>