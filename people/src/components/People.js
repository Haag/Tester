import React, { Component } from 'react'
import { number } from 'prop-types';
import PeopleList from './PeopleList'
import PeopleForm from "./PeopleForm"

import Card from '@material-ui/core/Card';


class People extends Component {
    constructor() {
        super()
        this.state = {
            people: [
                {
                    name: "Kyle",
                    notes: "Blah blah blah",
                }],
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
                <Card>
                    <PeopleForm handleChange={this.handleChange} updateChange={this.updateChange}
                        name={this.state.name} />
                </Card>
                
                <PeopleList people={this.state.people} />

            
                {this.state.people.map(person => {
                    return(
                        <li>
                            {person.name}
                        </li>
                    )
                })}
            </div>
        )
    }
}





export default People