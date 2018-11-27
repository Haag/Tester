import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './People.css'

class People extends React.Component {
    constructor() {
        super()
        this.state = {
            people: null
        }
    }

    async componentDidMount(){
        const people = (await axios.get("http://localhost:5050/")).data
        this.setState({
            people: people
        })
        console.log('people', people);
    }

    render(){
        return (
            <div className="container">
                People.js
                <div className="row">
                    {this.state.people === null && <p>Loading People</p>}
                    {this.state.people && this.state.people.map(person => (
                        <div key={person.id} className="col-sm-12 col-md-4 col-lg-3">
                            <Link to={`/person/${person.id}`} >
                                <div className="card text-white bg-success mb-3">
                                    <div className="card-body">
                                    <h3>{person.name}</h3>
                                    <p>{person.notes}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                People.js
            </div>
        )
    }
}


export default People