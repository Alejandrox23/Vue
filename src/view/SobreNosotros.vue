<script setup>
import { ref, computed } from 'vue';

/* 🔥 NAV (simulado aquí mismo) */
const items = [
  { id: 'bustos', label: 'Bustos' },
  { id: 'cuadros', label: 'Cuadros' },
  { id: 'esculturas', label: 'Esculturas' },
  { id: 'murales', label: 'Murales' },
  { id: 'literatura', label: 'Literatura' }
];

/* 🔥 ESTADO */
const categoriaActiva = ref('bustos');

/* 🔥 DATA SIMPLE */
const galerias = {
  bustos: [
    { title: "Busto 1", image: "https://picsum.photos/300/400?1" },
    { title: "Busto 2", image: "https://picsum.photos/300/500?2" }
  ],
  cuadros: [
    { title: "Cuadro 1", image: "https://picsum.photos/400/300?3" }
  ],
  esculturas: [
    { title: "Escultura 1", image: "https://picsum.photos/300/450?4" }
  ],
  murales: [
    { title: "Mural 1", image: "https://picsum.photos/500/300?5" }
  ],
  literatura: [
    { title: "Libro 1", image: "https://picsum.photos/300/300?6" }
  ]
};

/* 🔥 CONVERTIR A LISTA */
const todasLasObras = Object.entries(galerias).flatMap(([cat, items]) =>
  items.map(item => ({ ...item, tipo: cat }))
);

/* 🔥 FILTRO */
const obrasFiltradas = computed(() =>
  todasLasObras.filter(o => o.tipo === categoriaActiva.value)
);

/* 🔥 CLICK NAV */
const cambiar = (id) => {
  categoriaActiva.value = id;
};
</script>

<template>
  <div class="test-page">

    <!-- 🔥 HERO SIMPLE -->
    <header class="hero">
      <h1>TEST GALERÍA</h1>
    </header>

    <!-- 🔥 NAV FUNCIONAL -->
    <div class="subnav">
      <button
        v-for="item in items"
        :key="item.id"
        :class="{ active: categoriaActiva === item.id }"
        @click="cambiar(item.id)"
      >
        {{ item.label }}
      </button>
    </div>

    <!-- 🔥 RESULTADO -->
    <div class="grid">
      <div
        v-for="(obra, i) in obrasFiltradas"
        :key="i"
        class="card"
      >
        <img :src="obra.image" />
        <p>{{ obra.title }}</p>
      </div>
    </div>

  </div>
</template>

<style scoped>
.test-page {
  background: #0f2027;
  min-height: 100vh;
  color: white;
  padding: 20px;
}

/* HERO */
.hero {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* NAV */
.subnav {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.subnav button {
  padding: 8px 16px;
  background: #222;
  border: 1px solid #444;
  color: white;
  cursor: pointer;
}

.subnav button.active {
  background: #00ff88;
  color: black;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

/* CARD */
.card {
  background: #111;
  padding: 10px;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>