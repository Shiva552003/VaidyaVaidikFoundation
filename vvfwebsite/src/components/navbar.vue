<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/navbar logo.png" alt="Logo"  class="navbar-logo" />
      </a>
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="collapsed-nav-toggle"><p>Menu</p><i class="bi bi-three-dots-vertical"></i></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/activities">Services</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/schedule">Schedule</router-link></li>
          <!-- <li class="nav-item"><router-link class="nav-link" to="#">Photos</router-link></li> -->
          <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
          <li class="nav-item whatsapp-link">
            <a aria-label="Chat on WhatsApp" href="https://wa.me/+917995861037"> <img src="../assets/whatsapp_logo.svg" />Chat on WhatsApp</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="scroll-watcher"></div>
  <div class="language-converter">
    
  </div>
</template>

<script>
export default {
  name: 'Navbar-Component'
}
</script>

<style>
.scroll-watcher{
  height: 4px;
  width: 100%;
  /* background-color: linear-gradient(to right, #ff0000, #00ff00, #0000ff); */
  background-color: #C0D9B1;
  position: fixed;
  z-index : 1000;
  scale: 0 1;
  transform-origin: left;
  animation: scroll-watcher linear;
  animation-timeline: scroll();
}

@keyframes scroll-watcher {
  to{ scale : 1 1; }
  
}

.navbar {
  position: sticky;
  /* position: fixed;  -> Anytime Later, experiment with this feature    */  
  top: 0;
  z-index: 999;
  padding: 0;
  height: 10vh;
  min-height: 50px;
  background-color: #fdf5ec;
}
.navbar-brand {
  margin: 0;
  padding: 0;
}
.navbar-brand img {
  width: 30vb;
  height: 10vh;
}

.navbar-brand img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;}

.navbar-logo {
  width: 50px;
  height: auto;
}

.collapsed-nav-toggle{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #ff9431;

  p{
    margin: 0;
    font-weight: 600;
  }
}

.nav-link{
  color: #ff9431;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease-in-out;
}

.nav-link:hover{
  color: #fb8c25;
  background-color: #ff953116;
  border-radius: 5px;
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}

.whatsapp-link {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border: #25D366 1px solid;
  border-radius: 5px;
}
.whatsapp-link:hover{
  border: #1ea951 1px solid;
}
.whatsapp-link a:hover {
  color: #1ea951;
}

.whatsapp-link a {
  color: #25D366;
  font-weight: 600;
}
.whatsapp-link img {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
}

</style>