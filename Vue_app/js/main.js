// For index.html
if (document.getElementById('app')) {
    const { createApp, ref } = Vue;
    createApp({
        setup() {
            const title = ref('Vue 3 Home Page');
            const count = ref(0);
            function increment() {
                count.value++;
            }
            return { title, count, increment };
        }
    }).mount('#app');
}

// For about.html
if (document.getElementById('about-app')) {
    const { createApp, ref } = Vue;
    createApp({
        setup() {
            const title = ref('About This Vue App');
            const message = ref('');
            function showMessage() {
                message.value = 'Hello from the About page!';
            }
            return { title, message, showMessage };
        }
    }).mount('#about-app');
}
