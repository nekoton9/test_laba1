<template>
  <div class="items-list">
    <h2>Мої проекти</h2>
    <p class="description">
      Тут зібрані мої навчальні та особисті проекти, виконані під час навчання.
    </p>

    <div v-if="loading" class="loading">Завантаження...</div>
    
    <div v-else class="projects-grid">
      <div 
        v-for="project in projects" 
        :key="project.id"
        class="project-card"
        @click="goToDetails(project.id)"
      >
        <h3>{{ project.title }}</h3>
        <p class="project-desc">{{ project.description }}</p>
        <div class="tags">
          <span 
            v-for="(tech, idx) in project.technologies" 
            :key="idx"
            class="tag"
          >
            {{ tech }}
          </span>
        </div>
        <p class="date">Дата: {{ project.date }}</p>
        <span class="details-link">Детальніше →</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const projects = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await fetch('/data.json')
    projects.value = await response.json()
  } catch (error) {
    console.error('Помилка завантаження даних:', error)
  } finally {
    loading.value = false
  }
})

const goToDetails = (id) => {
  router.push(`/items/${id}`)
}
</script>

<style scoped>
.items-list h2 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

.description {
  color: #6b7280;
  margin-bottom: 2rem;
}

.loading {
  text-align: center;
  padding: 2rem;
  color: #6b7280;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.project-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.project-card h3 {
  font-size: 1.25rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.project-desc {
  color: #6b7280;
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background-color: #dbeafe;
  color: #1e40af;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
}

.date {
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 1rem;
}

.details-link {
  color: #2563eb;
  font-weight: 600;
}
</style>