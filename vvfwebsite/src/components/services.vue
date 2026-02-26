<template>
  <div class="activities-container">
    <div class="week-scroll">
      <div v-for="(day, index) in weekDays" :key="index" 
          :class="['day-card', { 'today': day.isToday }]">
        <h3>{{ day.name }}</h3>
        <p class="date">{{ day.date }}</p>
        <div class="activities-list">
          <div v-for="(activity, actIndex) in day.activities" :key="actIndex" class="activity-item">
            <h4>{{ activity.name }}</h4>
            <p class="time">{{ activity.time }}</p>
            <p class="description">{{ activity.description }}</p>
            <button class="book-btn" @click="bookEvent(activity)">Book Event</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivitiesPage',
  data() {
    return {
      weekDays: this.generateWeekDays()
    }
  },
  methods: {
    generateWeekDays() {
      const days = [];
      const today = new Date();
      
      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        
        days.push({
          name: date.toLocaleDateString('en-US', { weekday: 'long' }),
          date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          isToday: i === 0,
          activities: [
            {
              name: 'Morning Meditation',
              time: '6:00 AM - 7:00 AM',
              description: 'Start your day with guided meditation'
            },
            {
              name: 'Vedic Chanting',
              time: '8:00 AM - 9:00 AM',
              description: 'Learn and practice traditional mantras'
            },
            {
              name: 'Evening Aarti',
              time: '6:00 PM - 7:00 PM',
              description: 'Traditional lamp ceremony'
            }
          ]
        });
      }
      return days;
    },
    bookEvent(activity) {
      // Implement booking logic here
      alert(`Booking ${activity.name}`);
    }
  }
}
</script>

<style scoped>
.activities-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.week-scroll {
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  padding: 1rem 0;
  scroll-behavior: smooth;
}

.day-card {
  min-width: 300px;
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.today {
  border: 2px solid #ff9431;
}

.day-card h3 {
  color: #ff9431;
  margin-bottom: 0.5rem;
}

.date {
  color: #666;
  margin-bottom: 1rem;
}

.activities-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  padding: 1rem;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.activity-item h4 {
  color: #333;
  margin-bottom: 0.5rem;
}

.time {
  color: #ff9431;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.description {
  color: #666;
  margin-bottom: 1rem;
}

.book-btn {
  background-color: #ff9431;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.book-btn:hover {
  background-color: #fb8c25;
}

@media (max-width: 768px) {
  .day-card {
    min-width: 250px;
  }
}
</style>