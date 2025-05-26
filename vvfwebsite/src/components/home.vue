<!-- <template>
    <h2>Thank You for showing interest, The website is under development.</h2>
    <p>Contact 7995861037 for any enquiries</p>
</template> -->

<template>
  <div class="home-container">
    <div class="hero-section">
      <h1>Welcome to Vaidya Vaidik Foundation</h1>
      <p class="subtitle">Nurturing Spiritual Growth Through Ancient Wisdom</p>
    </div>

    <div class="services-grid">
      <div class="service-card">
        <i class="bi bi-book"></i>
        <h3>Vedic Education</h3>
        <p>Learn ancient scriptures and their practical application in modern life</p>
      </div>
      <div class="service-card">
        <i class="bi bi-heart"></i>
        <h3>Spiritual Healing</h3>
        <p>Experience traditional healing practices for mind, body, and soul</p>
      </div>
      <div class="service-card">
        <i class="bi bi-people"></i>
        <h3>Community Events</h3>
        <p>Join our vibrant community in regular spiritual gatherings</p>
      </div>
      <div class="service-card">
        <i class="bi bi-calendar-event"></i>
        <h3>Sacred Ceremonies</h3>
        <p>Participate in traditional rituals and ceremonies</p>
      </div>
    </div>

    <div class="cta-section">
      <h2>Begin Your Spiritual Journey Today</h2>
      <router-link to="/activities" class="cta-button">Explore Activities</router-link>
    </div>
  </div>
</template>


<style scoped>
.home-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  padding: 3rem 1rem;
  margin-bottom: 3rem;
}

.hero-section h1 {
  font-size: 2.5rem;
  color: #ff9431;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.service-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-card i {
  font-size: 2.5rem;
  color: #ff9431;
  margin-bottom: 1rem;
}

.service-card h3 {
  color: #333;
  margin-bottom: 1rem;
}

.service-card p {
  color: #666;
}

.cta-section {
  text-align: center;
  padding: 3rem 1rem;
}

.cta-section h2 {
  color: #ff9431;
  margin-bottom: 1.5rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #ff9431;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #fb8c25;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
export default {
    name: 'HomePage',
    props: {
        msg: String
    },
    }
</script>