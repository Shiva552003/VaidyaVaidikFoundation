<!-- <template>
    <h2>Thank You for showing interest, The website is under development.</h2>
    <p>Contact 7995861037 for any enquiries</p>
</template> -->

<template>
  <div class="home-container">
    <div class="hero-section">
      <h1>Welcome to Vaidya Vaidik Foundation</h1>
      <p class="subtitle"></p>
    </div>

    <div class="services-grid">
      <div class="service-card">
        <i class="bi bi-calendar-week"></i>
        <h3>Weekly Activities</h3>
        <p>Engage in our regular traditional gatherings and community sessions.</p>
      </div>
      <div class="service-card">
        <i class="bi bi-clock"></i>
        <h3>Schedule Events</h3>
        <p>Book our venue and services for personalized religious ceremonies.</p>
      </div>
    </div>

    <!-- <div class="cta-section">
      <h2></h2>
      <router-link to="/activities" class="cta-button">Explore Activities</router-link>
    </div> -->

    <footer class="site-footer">
      <div class="footer-links">
        <router-link to="/terms-and-conditions">Terms &amp; Conditions</router-link>
        <router-link to="/privacy-policy">Privacy Policy</router-link>
        <!-- <router-link to="/refund-policy">Refund Policy</router-link> -->
      </div>
      <div class="footer-contact">
        <p><i class="bi bi-telephone"></i> +91 7995861037</p>
        <p><i class="bi bi-envelope"></i> vaidyavaidikfoundation@gmail.com</p>
        <p><i class="bi bi-geo-alt"></i> Flat No: 403, Dhruvatara Apartments, Somajiguda, Hyderabad, Telangana 500082</p>
      </div>
    </footer>
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

.site-footer {
  background: #f7f7f7;
  padding: 2rem;
  text-align: center;
  border-top: 1px solid #e0e0e0;
}
.footer-links {
  margin-bottom: 1rem;
}
.footer-links a {
  margin: 0 1rem;
  color: #ff9431;
  text-decoration: none;
}
.footer-links a:hover {
  text-decoration: underline;
}
.footer-contact p {
  margin: 0.3rem 0;
  color: #666;
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