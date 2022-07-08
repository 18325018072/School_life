<template>
  <div class="home">
    <div class="inner">
      <div class="leftPart">
        <StudentInfo msg="Welcome to Your Vue.js App"/>
        <Courses/>
      </div>

      <div class="rightPart">
        <Ad/>
        <div class="news">

        </div>
        <div class="rightButtonPart">
          <div class="studyRoom"></div>
          <div class="advice"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StudentInfo from '@/components/StudentInfo.vue'
import NewsCard from '@/components/NewsCard.vue'
import Courses from '@/components/Courses.vue'
import Ad from '@/components/Ad.vue'

export default {
  name: 'HomeView',
  components: {
    StudentInfo,
    NewsCard,
    Courses,
    Ad
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: lightgray;

  display: flex;
  justify-content: center;
  align-items: center;
}

.inner {
  width: 80%;
  height: 100%;
  /* height: 500px; */
  background-color: steelblue;
  display: flex;
  justify-content: space-between;
}

/* 左 */
.leftPart {
  width: 35%;
  /* height: 100%; */
  border: 1px red solid;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

StudentInfo {
  height: 38.2%;
  border: 5px green solid;
}

Courses {
  height: 61.8%;
  border: 1px yellowgreen solid;
}

/* 右 */
.rightPart {
  width: 60%;
  height: 100%;
  border: 1px red solid;
  display: flex;
  flex-direction: column;
}

Ad {
  height: 15%;
}

.rightButtonPart {
  display: flex;
}
</style>
