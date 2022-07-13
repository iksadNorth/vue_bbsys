<template>
    <ul>
      <li v-for="item in upside" :key="item">{{item}}</li>
    </ul>
    <ul>
      <li v-for="item in downside" :key="item">{{item}}</li>
    </ul>
    <ul>
      <li>
        <select name="language" id="" v-model="language_selected">
          <option :value="i" v-for="(item, i) in language" :key="i">{{item}}</option>
        </select>
      </li>
      <li>
         2022 Instagram from Meta
      </li>
    </ul>
    
</template>

<script>
export default {
    name: 'insta_footer',
    data() {
      return {
        upside: ["Meta", "소개", "블로그", "채용 정보", "도움말", "API", "개인정보처리방침", "약관", "인기 계정", "해시태그", "위치", "Instagram Lite", "연락처 업로드 & 비사용자"],
        downside: ["댄스", "음식집 및 정원", "음악", "시각 예술"],
        language: ["한국어", "en"],

        language_selected: 0,
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  text-align: center;
}
li {
  display: inline-block;
  margin-right: 20px;
}
</style>
