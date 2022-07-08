<template>
  <div class="profile">
    <p>用户-信息页面</p>
    <div v-for="info of user" :key="info.name">
      {{info}}
    </div>
    <div>
      <input v-model="newName" placeholder="姓名"/>
      <button @click="submit">提交</button>
    </div>
    <p>模块中的major: {{storeMajor}}</p>
    <div>
      <input v-model="newMajor" placeholder="专业"/>
      <button @click="submitMajor">提交</button>
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Counter',
  setup() {
    const store = useStore()
    const user = computed(() => {
      return store.state.userInfo
    })
    const newName = ref('');
    const submit = () => {
      // store.commit('rename', newName.value )
      store.dispatch('rename', newName.value)
    }
    const newMajor = ref('')
    function submitMajor(){
      store.dispatch('setMajor', newMajor.value)
    }
    const storeMajor= computed(() => {
      return store.state.profile.major
    })
    return {
      user,
      newName,
      submit,
      newMajor,
      storeMajor,
      submitMajor
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button{
  margin-left: 8px;
}
</style>
