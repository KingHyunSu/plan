<template>
  <div>
    <today-scroll/>
    <div>
      <ul>
        <li>
          <a href="">운동</a>
        </li>
        <li>
          <a href="">운동</a>
        </li>
        <li>
          <a href="">운동</a>
        </li>
        <li>
          <a href="">운동</a>
        </li>
      </ul>

      <div class="aaa">
        <h2>to do list</h2>
        <div>
          <p>공부하기</p>
        </div>
        <div>
          <p>공부하기</p>
        </div>
        <div>
          <p>공부하기</p>
        </div>
        <div>
          <p>공부하기</p>
        </div>
        <div>
          <p>공부하기</p>
        </div>
        <div>
          <p>공부하기</p>
        </div>
        <div>
          <p>공부하기</p>
        </div>
        <div>
          <p>공부하기</p>
        </div>
        <div>
          <p>공부하기</p>
        </div>
        <div>
          <p>공부하기</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodayScroll from '@/components/TodayScroll'

export default {
  name: 'Main',
  components: {
    TodayScroll
  },
  methods: {
    test() {
      const st = window.pageYOffset || document.documentElement.scrollTop
      console.log(st)
    }
  }
}
</script>

<style lang="scss">
ul{
  width:100%; display: flex; justify-content: space-between; padding-left:0 !important; margin-top:20px;
  li{padding:20px; border-radius: 5px; background-color: #ddd;}
}
.aaa{
  margin-top:20px;
  >div{
    padding:10px; margin-bottom:10px; box-shadow: 2px 4px 10px #ececec;
    p{
      margin-bottom:0;
      &:before{
        content:''; width:5px; height:5px; border-radius: 100%; background-color: red; display: inline-block;
        margin-right: 5px;
      }
    }
  }
}

</style>
