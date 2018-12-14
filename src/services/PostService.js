class PostService {
  constructor () {
    let postsDB = localStorage.getItem('posts')
    this.posts = postsDB ? JSON.parse(postsDB) : []
  }

  getPosts () {
    return this.posts
  }
  agregarPost (post) {
    this.posts.push(post)
    localStorage.setItem('posts', JSON.stringify(this.posts))
  }
}

export default PostService
