<template>
  <div class="details-page">
    <button @click="goBack" class="back-button">← Назад до списку</button>

    <div v-if="loading" class="loading">Завантаження...</div>
    
    <div v-else-if="project" class="project-details">
      <h2>{{ project.title }}</h2>
      
      <div class="tags">
        <span 
          v-for="(tech, idx) in project.technologies" 
          :key="idx"
          class="tag"
        >
          {{ tech }}
        </span>
      </div>

      <p class="date">Дата створення: {{ project.date }}</p>

      <div class="description-section">
        <h3>Опис проекту</h3>
        <p class="full-desc">{{ project.fullDescription }}</p>
        <p class="short-desc">{{ project.description }}</p>
      </div>

      <div class="features">
        <h4>Основні особливості:</h4>
        <ul>
          <li>Використання сучасних технологій</li>
          <li>Чистий та зрозумілий код</li>
          <li>Адаптивний дизайн</li>
        </ul>
      </div>
    </div>

    <div v-else class="not-found">
      <p>Проект не знайдено</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const project = ref(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await fetch('/data.json')
    const projects = await response.json()
    project.value = projects.find(p => p.id === parseInt(route.params.id))
  } catch (error) {
    console.error('Помилка завантаження даних:', error)
  } finally {
    loading.value = false
  }
})

const goBack = () => {
  router.push('/items')
}
</script>

<style scoped>
.back-button {
  background: none;
  border: none;
  color: #2563eb;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.back-button:hover {
  color: #1d4ed8;
}

.loading, .not-found {
  text-align: center;
  padding: 2rem;
  color: #6b7280;
}

.project-details {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 2rem;
}

.project-details h2 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background-color: #dbeafe;
  color: #1e40af;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
}

.date {
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 1.5rem;
}

.description-section {
  border-top: 1px solid #e5e7eb;
  padding-top: 1.5rem;
}

.description-section h3 {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

.full-desc {
  color: #374151;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.short-desc {
  color: #6b7280;
  font-style: italic;
}

.features {
  background-color: #f9fafb;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 2rem;
}

.features h4 {
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.features ul {
  list-style-position: inside;
  color: #374151;
}

.features li {
  margin: 0.5rem 0;
}
</style>