<template>
    <div class="background"></div>
</template>
<script>
export default {
    name: 'BackgroundComponent'
}
</script>
<style>
.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.8;
    overflow: hidden;
    background-image: url('@/assets/background.png');
    background-size:cover;
    background-repeat: no-repeat;
    background-position: top center;
    min-height: 100vh;
}
</style>