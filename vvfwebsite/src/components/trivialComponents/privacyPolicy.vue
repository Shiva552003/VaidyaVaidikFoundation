<template>
  <div class="privacy-container">
    <div class="content">
      <h1>Privacy Policy</h1>
      
      <section>
        <h2>1. Information We Collect</h2>
        <p>We collect information that you provide directly to us when using our services, including:</p>
        <ul>
          <li>Name and contact information</li>
          <li>Event booking details</li>
          <li>Payment information</li>
          <li>Communication preferences</li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>We use the collected information for:</p>
        <ul>
          <li>Processing your event bookings</li>
          <li>Sending important notifications</li>
          <li>Improving our services</li>
          <li>Communicating about upcoming events</li>
        </ul>
      </section>

      <section>
        <h2>3. Information Sharing</h2>
        <p>We do not sell or share your personal information with third parties except as necessary to:</p>
        <ul>
          <li>Comply with legal obligations</li>
          <li>Protect our rights and safety</li>
          <li>Facilitate event management</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
      </section>

      <section>
        <h2>5. Contact Us</h2>
        <p>For any questions about this Privacy Policy, please contact us at:</p>
        <p>Email: info@vaidyavaidik.org</p>
        <p>Phone: +91 7995861037</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy'
}
</script>

<style scoped>
.privacy-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.content {
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

section {
  margin-bottom: 2.5rem;
}

h2 {
  color: #222;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: bold;
}

p, ul {
  color: #666;
  line-height: 1.6;
}

ul {
  margin-left: 2rem;
}

li {
  margin-bottom: 0.75rem;
  transition: background-color 0.3s;
}

li:hover {
  background-color: #f9f9f9;
}
</style>