const { response } = require('express')
const { request } = require('http')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'super',
  host: 'localhost',
  database: 'issue',
  password: 'super',    
  port: 5432,
})

const getPosts = (request, response) => {
  pool.query('SELECT users.user_id,users.username,users.email,posts.post_id,posts.caption AS post_caption,posts.image_url AS post_image_url,posts.created_at AS post_created_at FROM users LEFT JOIN posts ON users.user_id = posts.user_id;', (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
  })
}
const getComments = (request, response) => {
  pool.query('select')
}
const createPosts = (request, response) => {
  const { user_id, caption,image_url } = request.body

  pool.query('INSERT INTO posts (user_id, caption, image_url) VALUES ($1, $2,$3)', [user_id, caption,image_url], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('postAdded')
  })
}
module.exports = {
  getPosts,
 createPosts
}
