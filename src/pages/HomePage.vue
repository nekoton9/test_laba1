<template>
  <div class="home-page">
    <div class="hero">
      <h2>Ласкаво просимо!</h2>
      <p class="subtitle">
        Це мій навчальний проект - Single Page Application (SPA) на Vue 3 
        з використанням Vue Router.
      </p>
    </div>

    <div class="info-card">
      <h3>Про проект</h3>
      <div class="info-content">
        <p><strong>Мета:</strong> Створити простий SPA для демонстрації навичок роботи з Vue 3 (Composition API) та Vue Router.</p>
        <p><strong>Технології:</strong> Vite, Vue 3, Vue Router, CSS</p>
        <p><strong>Функціонал:</strong> Перегляд списку проектів та детальної інформації про кожен проект.</p>
      </div>
    </div>

    <button @click="goToProjects" class="cta-button">
      Переглянути проекти
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToProjects = () => {
  router.push('/items')
}
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 3rem 0;
}

.hero h2 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.info-card {
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 0.5rem;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto 2rem;
}

.info-card h3 {
  font-size: 1.75rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

.info-content {
  text-align: left;
}

.info-content p {
  color: #374151;
  margin: 1rem 0;
  line-height: 1.6;
}

.cta-button {
  background-color: #2563eb;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #1d4ed8;
}
</style>