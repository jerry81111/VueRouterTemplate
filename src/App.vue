<template>
  <div id="app">
    <table width="100%">
      <tr>
        <td colspan="2">
          <slider :width="300" format="push" direction="left" :opacity="0.15" :links="[{'id': 1, 'text': 'Link 1', 'url': 'https://github.com'}, {'id': 2, 'text': 'Link 2', 'url': 'https://github.com'}]"></slider>
          <setting-header></setting-header>
          <router-link to="/peopleinfo">人物資料</router-link>
        </td>
      </tr>
      <tr>
        <td width="20%" style="background-color:red;vertical-align:top;">
          <setting-sidebar></setting-sidebar>
        </td>
        <td width="80%" style="background-color:green">
          <!-- <setting-detail></setting-detail> -->
          <div><router-view></router-view></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Slider from '@jeremyhamm/vue-slider'
import SettingHeader from '@/components/setting/Header'
import SettingSidebar from '@/components/setting/Sidebar'

export default {
  name: 'App',
  components: {
    'slider': Slider,
    'setting-header': SettingHeader,
    'setting-sidebar': SettingSidebar
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
