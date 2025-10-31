<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <h1 class="logo">Мої Проекти</h1>
        <nav class="nav">
          <router-link to="/" class="nav-link">Головна</router-link>
          <router-link to="/items" class="nav-link">Проекти</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #2563eb;
  color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #bfdbfe;
}

.nav-link.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid white;
}
</style>