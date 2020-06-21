<template>

  <div class="today-card">
    <div class="yesterday-second"/>
    <div class="yesterday-first"/>
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
.today-card{
  >div{background: linear-gradient(90deg, #c6b2ec 0%, #9c9cea 56%, #9186df 100%);}
}
.today-card {
    width: 100%;
    height: 150px;
    position: relative;
    .yesterday-first {
        width: 92%;
        height: 60px;
        border-radius: 10px;
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        opacity: 0.7;
    }
    .yesterday-second {
        width: 85%;
        height: 60px;
        border-radius: 10px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999;
           opacity: 0.3;
    }
    .today {
        width: 100%;
        height: 120px;
        border-radius: 10px;
        position: absolute;
        top: 15px;
        z-index: 1001;
    }
    .tomorrow-first {
        width: 92%;
        height: 60px;
        border-radius: 10px;
        position: absolute;
        top: 82px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
          opacity: 0.7;
    }
    .tomorrow-second {
        width: 85%;
        height: 60px;
        border-radius: 10px;
        position: absolute;
        top: 88px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999;
          opacity: 0.3;
    }
}
</style>
