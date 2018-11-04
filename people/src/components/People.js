import React, { Component } from 'react'
import { number } from 'prop-types';
import PeopleList from './PeopleList'
import Card from "./Card"

class People extends Component {
    constructor() {
        super()
        this.state = {
            people: [],
            name: '',
            notes: '',
        }
        this.handleChange = (e) => {
            e.preventDefault()
            this.setState({ name: e.target.value })
        }
        this.updateChange = (e) => {
            const people = this.state.people
            people.push({
                name: this.state.name,
                notes: this.state.notes,
            })
            this.setState({people, name: '', notes: ''})
        }
    }
    render() {
        console.log("State", this.state.people)

        return(
            <div>

                <form onSubmit={this.handleChange}>
                    Name: 
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                    <input type="submit" value="Submit" onClick={this.updateChange} />
                </form>

                Here's {this.state.name}
            
                {/* {this.state.people.map(person => {
                    return(
                        <li>
                            {person.name}
                        </li>
                    )
                })} */}
            </div>
        )
    }
}





export default People