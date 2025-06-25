<template>
  <div class="checkout-container">
    <div class="left-summary">
      <h2>Booking Summary</h2>
      <p>Date: {{ $route.query.date }}</p>
      <p>Day: {{ $route.query.day }}</p>
      <p>Time: {{ $route.query.time }}</p>
      <p>Event: {{ $route.query.event }}</p>
      <p>Duration: {{ $route.query.duration }}</p>
    </div>
    <div class="right-cost">
      <h2>Cost Breakdown</h2>
      <p>Base Cost: ₹1000</p>
      <p>GST (18%): ₹180</p>
      <p><strong>Total: ₹1180</strong></p>
      <button @click="goToPayment">Proceed to Payment</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToPayment() {
      // implement redirect logic here
    },
  },
};
</script>

<style>
.checkout-container {
  display: flex;
  justify-content: space-between;
}
.left-summary, .right-cost {
  width: 48%;
}
</style>
