<script setup>
import { ref, computed } from 'vue';
import Seccion from '../components/Seccion.vue';
import CardGaleria from '../components/CardGaleria.vue';
import GaleriaNav from '../components/GaleriaNav.vue';

/* 🔹 DATA ORIGINAL (NO SE TOCA) */
const galerias = {
  bustos: [
    {
      title: "Busto Neón",
      category: "Escultura",
      authors: "Alejox",
      description: "Resina con iluminación LED integrada.",
      image: "https://picsum.photos/600/900?random=1"
    },
    {
      title: "Busto Clásico",
      category: "Bustos",
      authors: "Alejox",
      description: "Inspiración en arte grecorromano.",
      image: "https://picsum.photos/600/600?random=2"
    },
    {
      title: "Busto Fragmentado",
      category: "Bustos",
      authors: "Alejox",
      description: "Deconstrucción de la forma humana.",
      image: "https://picsum.photos/600/600?random=3"
    },
    {
      title: "Busto Futurista",
      category: "Bustos",
      authors: "Alejox",
      description: "Estética cyberpunk.",
      image: "https://picsum.photos/600/800?random=4"
    },
    {
      title: "Busto Minimal",
      category: "Bustos",
      authors: "Alejox",
      description: "Formas esenciales.",
      image: "https://picsum.photos/600/700?random=5"
    }
  ],

  cuadros: [
    {
      title: "Horizonte Óleo",
      category: "Pintura",
      authors: "Alejox",
      description: "Paisaje inspirado en Loja.",
      image: "https://picsum.photos/1000/600?random=6"
    },
    {
      title: "Rojo Intenso",
      category: "Cuadros",
      authors: "Alejox",
      description: "Expresión cromática.",
      image: "https://picsum.photos/600/600?random=7"
    },
    {
      title: "Geometría Viva",
      category: "Cuadros",
      authors: "Alejox",
      description: "Formas dinámicas.",
      image: "https://picsum.photos/600/600?random=8"
    },
    {
      title: "Azul Profundo",
      category: "Cuadros",
      authors: "Alejox",
      description: "Color frío.",
      image: "https://picsum.photos/600/700?random=9"
    }
  ],

  esculturas: [
    {
      title: "Forma Abstracta",
      category: "Escultura",
      authors: "Alejox",
      description: "Volumen artístico.",
      image: "https://picsum.photos/600/800?random=11"
    },
    {
      title: "Metal Vivo",
      category: "Escultura",
      authors: "Alejox",
      description: "Estilo industrial.",
      image: "https://picsum.photos/600/600?random=12"
    },
    {
      title: "Movimiento",
      category: "Escultura",
      authors: "Alejox",
      description: "Dinámica visual.",
      image: "https://picsum.photos/600/750?random=14"
    }
  ],

  murales: [
    {
      title: "Mural Urbano",
      category: "Mural",
      authors: "Alejox",
      description: "Arte público.",
      image: "https://picsum.photos/1000/700?random=16"
    },
    {
      title: "Historia Visual",
      category: "Mural",
      authors: "Alejox",
      description: "Narrativa gráfica.",
      image: "https://picsum.photos/900/600?random=18"
    }
  ],

  literatura: [
    {
      title: "Relatos Cortos",
      category: "Escritos",
      authors: "Alejox",
      description: "Historias locales.",
      image: "https://picsum.photos/600/600?random=21"
    },
     {
      title: "Relatos Cortos",
      category: "Escritos",
      authors: "Alejox",
      description: "Historias locales.",
      image: "https://picsum.photos/600/600?random=21"
    },  
    {
      title: "Poemas Urbanos",
      category: "Literatura",
      authors: "Alejox",
      description: "Versos contemporáneos.",
      image: "https://picsum.photos/600/600?random=22"
    }
  ]
};

/* 🔥 ESTADO (SIEMPRE EN MINÚSCULAS) */
const categoriaActiva = ref('bustos');

/* 🔥 LISTA PLANA */
const todasLasObras = Object.entries(galerias).flatMap(([categoria, items]) =>
  items.map(item => ({
    ...item,
    tipo: categoria.toLowerCase() // 🔥 NORMALIZADO
  }))
);

/* 🔥 FILTRO (A PRUEBA DE ERRORES) */
const obrasFiltradas = computed(() => {
  return todasLasObras.filter(
    obra => obra.tipo === categoriaActiva.value.toLowerCase()
  );
});
</script>

<template>
  <div class="galeria-page text-white">
    
    <!-- 🔥 HERO -->
    <header class="hero-wrap d-flex align-items-center justify-content-center text-center">
      <div class="hero-overlay"></div>

      <div class="container position-relative z-3 animate-fade-in">
        <h1 class="hero-title">
          PORTAFOLIO <span class="text-green">DIGITAL</span>
        </h1>

        <p class="hero-subtitle text-uppercase letter-spacing-5">
          Creatividad • Arte • Innovación
        </p>
      </div>
    </header>

    <!-- 🔥 FILTRO (BOTONES) -->
    <div class="filtro-galeria container position-relative">
      <GaleriaNav @cambiar="categoriaActiva = $event" />
    </div>

    <!-- 🔹 GALERÍA -->
    <main class="container-fluid py-5 px-lg-5 position-relative">

      <!-- 🔹 TÍTULO DINÁMICO -->
      <Seccion 
        :label="categoriaActiva.toUpperCase()" 
        icon="bi bi-grid"
      />

      <!-- 🔥 MOSAICO -->
      <div class="mosaico-dinamico mt-4">

        <!-- ✅ SI HAY DATOS -->
        <template v-if="obrasFiltradas.length > 0">
          <CardGaleria
            v-for="(obra, i) in obrasFiltradas"
            :key="i"
            :title="obra.title"
            :category="obra.category"
            :authors="obra.authors"
            :description="obra.description"
            :image="obra.image"
          />
        </template>

        <!-- ❌ SI NO HAY DATOS -->
        <div v-else class="w-100 text-center py-5">
          <p class="text-white">No hay obras en esta categoría</p>
        </div>

      </div>

    </main>

  </div>
</template>

<style scoped>
.text-green { color: #00ff88 !important; }
.letter-spacing-5 { letter-spacing: 5px; }

/* 🔥 HERO */
.hero-wrap {
  height: 80vh;
  position: relative;

  background:
    linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9)),
    url('https://images.unsplash.com/photo-1501785888041-af3ef285b470');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;
}

/* 🔥 FONDO GENERAL */
.galeria-page {
  background: #0f2027;
  min-height: 100vh;
}

/* 🔥 FILTRO */
.filtro-galeria {
  position: relative;
  z-index: 10;

  margin-top: -30px;
  margin-bottom: 40px;

  display: flex;
  justify-content: center;
}

/* 🔹 SECCIONES */
.section-container {
  margin-bottom: 5rem;
}

/* 🔥 MOSAICO */
.mosaico-dinamico {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

/* 🔥 ASEGURA QUE LAS CARDS SE VEAN */
.mosaico-dinamico > * {
  min-height: 200px;
}

/* 🔹 ANIMACIÓN */
.animate-fade-in {
  animation: fadeInUp 1.2s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 📱 TABLET */
@media (max-width: 992px) {
  .mosaico-dinamico {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 📱 MOBILE */
@media (max-width: 768px) {

  .mosaico-dinamico {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    overflow: hidden;
  }

  /* 🔹 cards más pequeñas */
  .mosaico-dinamico > * {
    height: 180px;
    min-height: 180px;
  }

  /* ❌ eliminar zoom (viene del CardGaleria) */
  .mosaico-dinamico > *:hover {
    transform: none !important;
  }

  /* 🔥 mata cualquier scale interno */
  .mosaico-dinamico > * * {
    transform: none !important;
  }

}

/* 📱 MOBILE PEQUEÑO */
@media (max-width: 576px) {

  .hero-wrap {
    height: 60vh;
  }

  .mosaico-dinamico {
    grid-template-columns: 1fr;
  }

  .mosaico-dinamico > * {
    height: 160px;
    min-height: 160px;
  }
}
</style>