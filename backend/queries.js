
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'kh',
  host: 'localhost',
  database: 'peopledb',
  port: 5432,
})

//===========================================================================
// CREATE PERSON

const createPerson = (request, response) => {
  const { first_name, notes, userID } = request.body

  pool.query('INSERT INTO person (first_name, notes, userID) VALUES ($1, $2, $3,)', [first_name, notes, userID], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Person added with ID: ${result.insertId}`)
  })
}


//===========================================================================
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createUser = (request, response) => {
    const {email, nickname } = request.body
  
    pool.query('INSERT INTO users (email, nickname) VALUES ($1, $2)', [email, nickname], (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result} `)
      console.log("RES", result)
    })
  }


  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }


  module.exports = {
    getUsers,
    getUserById,
    createPerson,
    createUser,
    updateUser,
    deleteUser,
  }