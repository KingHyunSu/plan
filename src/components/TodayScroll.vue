<template>

  <div class="today-card">
    <div class="yesterday-first"/>
    <div class="yesterday-second"/>
    <div class="today"/>
    <div class="tomorrow-first"/>
    <div class="tomorrow-second"/>
  </div>
</template>

<script>
export default {
  name: 'TodayScroll'
}
</script>

<style lang="scss">
.today-card {
    width: 100%;
    height: 150px;
    position: relative;
    .yesterday-first {
        width: 92%;
        height: 60px;
        background: #ccaedf;
        border-radius: 10px;
        position: absolute;
        bottom: 82px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
    }
    .yesterday-second {
        width: 85%;
        height: 60px;
        background: #dac6e7;
        border-radius: 10px;
        position: absolute;
        bottom: 88px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999;
    }
    .today {
        width: 100%;
        height: 120px;
        border-radius: 10px;
        background: #c094db;
        position: absolute;
        top: 15px;
        z-index: 1001;
    }
    .tomorrow-first {
        width: 92%;
        height: 60px;
        background: #ccaedf;
        border-radius: 10px;
        position: absolute;
        top: 82px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
    }
    .tomorrow-second {
        width: 85%;
        height: 60px;
        background: #dac6e7;
        border-radius: 10px;
        position: absolute;
        top: 88px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999;
    }
}
</style>
