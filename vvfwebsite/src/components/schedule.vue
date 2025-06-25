<template>
  <div class="booking-form">
    <form @submit.prevent="confirmBooking">
      <label>Date: <input type="date" v-model="date" /></label>
      <label>Day: <input type="text" v-model="day" readonly /></label>
      <label>From: <input type="time" v-model="fromTime" /></label>
      <label>To: <input type="time" v-model="toTime" /></label>
      <label>Event:
        <select v-model="event">
          <option v-for="e in events" :key="e" :value="e">{{ e }}</option>
        </select>
      </label>
      <label>Duration (hrs): <input type="text" v-model="duration" readonly /></label>
      <button type="submit">Confirm Booking</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SchedulePage",
  data() {
    return {
      date: "",
      day: "",
      fromTime: "",
      toTime: "",
      event: "",
      duration: "",
      events: ["Workshop", "Seminar", "Talk Show"],
    };
  },
  watch: {
    date(newDate) {
      const d = newDate ? new Date(newDate) : null;
      this.day = d ? d.toLocaleDateString("en-US", { weekday: "long" }) : "";
    },
    fromTime: 'calculateDuration',
    toTime: 'calculateDuration',
  },
  methods: {
    calculateDuration() {
      if (this.fromTime && this.toTime) {
        const [fh, fm] = this.fromTime.split(":").map(Number);
        const [th, tm] = this.toTime.split(":").map(Number);
        const diff = (th * 60 + tm) - (fh * 60 + fm);
        this.duration = diff > 0 ? (diff / 60).toFixed(2) : "";
      } else {
        this.duration = "";
      }
    },
    confirmBooking() {
      this.$router.push({
        name: "checkout",
        query: {
          date: this.date,
          day: this.day,
          fromTime: this.fromTime,
          toTime: this.toTime,
          event: this.event,
          duration: this.duration,
        },
      });
    },
  },
};
</script>

<style scoped>
.booking-form {
  max-width: 600px;
  margin: auto;
  padding: 2rem;
  background: #fdf5ec;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 1rem;
  font-weight: 600;
}
input, select {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.3rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}
button {
  background-color: #ff9431;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #fb8c25;
}
</style>
