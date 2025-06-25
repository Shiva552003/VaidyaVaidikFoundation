<template>
  <div class="about-container">
    <div class="about-content">
      <h1>About Vaidya Vaidik Foundation</h1>
      
      <div class="mission-section">
        <h2>Our Mission</h2>
        <p>Vaidya Vaidik Foundation is dedicated to preserving and promoting ancient Vedic wisdom while making it accessible and relevant to modern life. We strive to create a harmonious blend of traditional practices and contemporary understanding.</p>
      </div>

      <div class="services-section">
        <h2>Our Services & Pricing</h2>
        <p>
          At Vaidya Vaidik Foundation, we offer a holistic service experience for religious events. Customers can book our premises for a desired duration, during which our experienced Pandit Ji will perform the appropriate rituals with authenticity and devotion.
        </p>
        <p>
          The pricing for these services ranges from ₹5,000 to ₹25,000, depending on the event type, duration, and specific requirements. This cost includes the venue rental and professional ritual services.
        </p>
        <p>
          We are committed to delivering a seamless and sacred experience, ensuring that every ceremony is conducted with the utmost respect to Vedic traditions while maintaining modern-day convenience for our patrons.
        </p>
      </div>

      <!-- <div class="values-section">
        <h2>Our Values</h2>
        <div class="values-grid">
          <div class="value-card">
            <i class="bi bi-heart-fill"></i>
            <h3>Authenticity</h3>
            <p>Maintaining the purity of ancient teachings</p>
          </div>
          <div class="value-card">
            <i class="bi bi-people-fill"></i>
            <h3>Community</h3>
            <p>Building a supportive  family</p>
          </div>
          <div class="value-card">
            <i class="bi bi-book-fill"></i>
            <h3>Knowledge</h3>
            <p>Sharing wisdom for personal growth</p>
          </div>
        </div>
      </div> -->

      <div class="contact-section">
        <h2>Contact Us</h2>
        <div class="contact-info">
          <div class="contact-item">
            <i class="bi bi-telephone"></i>
            <p>+91 7995861037</p>
          </div>
          <div class="contact-item">
            <i class="bi bi-envelope"></i>
            <p>vaidyavaidikfoundation@gmail.com</p>
          </div>
          <div class="contact-item">
            <i class="bi bi-geo-alt"></i>
            <p>Flat No: 403, Dhruvatara Apartments, Somajiguda, Hyderabad, Telangana 500082</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-content {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #ff9431;
  margin-bottom: 2rem;
  text-align: center;
}

h2 {
  color: #333;
  margin-bottom: 1.5rem;
}

.mission-section {
  margin-bottom: 3rem;
}

.mission-section p {
  color: #666;
  line-height: 1.6;
}

.services-section {
  margin-bottom: 3rem;
}

.services-section p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.value-card {
  text-align: center;
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.value-card i {
  font-size: 2rem;
  color: #ff9431;
  margin-bottom: 1rem;
}

.value-card h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.value-card p {
  color: #666;
}

.contact-section {
  text-align: center;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.contact-item i {
  font-size: 1.5rem;
  color: #ff9431;
}

.contact-item p {
  color: #666;
  margin: 0;
}

@media (max-width: 768px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>