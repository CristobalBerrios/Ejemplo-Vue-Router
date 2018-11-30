<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="(post, index) in posts" :key="index" xs12 md4 lg4>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ post.title }}</h3>
            </div>
          </v-card-title>
          <v-card-text>
            {{ post.body }}
          </v-card-text>
          <v-card-actions>
            <v-btn dark raised color="blue">Ver Comentarios</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      API: 'https://jsonplaceholder.typicode.com/posts',
      posts: []
    }
  },
  created () {
    let vm = this
    this.$http.get(vm.API).then(response => {
      vm.posts = response.body
    })
  }
}
</script>


