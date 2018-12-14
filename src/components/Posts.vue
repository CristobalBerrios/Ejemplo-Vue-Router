<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex md8 offset-md2>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="post.title"
            label="Titulo"
            :rules="rules"
            color="red"
            required>
          </v-text-field>
          <v-textarea
            v-model="post.body"
            color="red"
            :rules="rules"
            name="input-7-1"
            label="Cuerpo">
          </v-textarea>
          <v-btn :disabled="!valid" @click="agregarPost(post)">Agregar Post</v-btn>
          <v-btn @click="clear()">limpiar</v-btn>
  </v-form>
      </v-flex>
    </v-layout>
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
import PostService from '@/services/PostService'
export default {
  data () {
    return {
      valid: true,
      rules: [
        v => !!v || 'El campo es requerido'
      ],
      post: {
        title: '',
        body: ''
      },
      postService: new PostService(),
      API: 'https://jsonplaceholder.typicode.com/posts'
    }
  },
  created () {
    // let vm = this
    // vm.posts = vm.postService.getPosts()
    /*
    this.$http.get(vm.API).then(response => {
      vm.posts = response.body
    })
    */
  },
  computed: {
    posts () {
      return this.postService.getPosts()
    }
  },
  methods: {
    agregarPost (post) {
      console.log(post)
      let vm = this
      if (this.$refs.form.validate()) {
        // vm.posts.push(JSON.parse(JSON.stringify(post)))
        vm.postService.agregarPost(JSON.parse(JSON.stringify(post)))
        vm.clear()
      }
    },
    clear () {
      let vm = this
      vm.$refs.form.reset()
    }
  }
}
</script>
