
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'kh',
  host: 'localhost',
  database: 'peopledb',
  port: 5432,
})

//===========================================================================
// CREATE LIVING PERSON

const createPerson = (request, response) => {
  const { first_n, last_n, birth, company, job_title, email, notes, userid } = request.body

  pool.query('INSERT INTO personl (first_n, last_n, birth, company, job_title, email, notes, userid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
  [first_n, last_n, birth, company, job_title, email, notes, userid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Person added with ID: ${results.insertId}`)
  })
}

//===========================================================================
// UPDATE LIVING? PERSON

const updatePerson = (request, response) => {
  console.log("RPs", request.params)
  const personid = parseInt(request.params.id)
  const { first_n, last_n, birth, company, job_title, email, notes, userid } = request.body

  pool.query(
    `UPDATE personl SET first_n = '${first_n}', last_n = '${last_n}', birth = '${birth}', company = '${company}', job_title = '${job_title}', 
      email = '${email}', notes = '${notes}' where personid = ${personid}`,
    
    (error, results) => {
      if (error) {
        // console.log("CL request", request.params)
        console.log("ERROR", error)
        throw error
      }
      response.status(200).send(`Living person modified with ID: ${personid}`)
    }
  )
}

//===========================================================================
// UPDATE LIVING? PERSON

const deletePerson = (request, response) => {
  const personid = parseInt(request.params.id)

  pool.query('DELETE FROM personl WHERE personid = $1', [personid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Person deleted with ID: ${personid}`)
  })
}

//===========================================================================
// CREATE USER

const createUser = (request, response) => {
  const {email, nickname } = request.body

  pool.query('INSERT INTO users (email, nickname) VALUES ($1, $2)', [email, nickname], (error, result) => {
    if (error) {
      throw error
    }
    console.log("RES", result)
    response.status(201).send(`User added successfully `)
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
    const userid = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE userid = $1', [userid], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
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






  module.exports = {
    getUsers,
    getUserById,
    createPerson,
    createUser,
    updateUser,
    updatePerson,
    deleteUser,
    deletePerson,
  }