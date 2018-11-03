import React, { Component } from 'react'
import { number } from 'prop-types';
import PeopleList from './PeopleList'


class People extends Component {
    constructor() {
        super()
        this.state = {
            people: [
                {
                name: 'Kyle',
                notes: 'Sharp',
                id: Number,
                }
            ]
        }
        this.handleChange = (e) => {
            console.log(e.target.value)
            this.setState({ name: e.target.value })
        }
    }
    render() {
        console.log("State", this.state.people[0].name)
        return(
            <div>
                <PeopleList people={this.state.people}/>
                <form onClick={this.handleChange}>
                    Name: 
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
                {this.state.people.map(person => {
                    return(
                        person.name
                    )
                })}
            </div>
        )
    }
}





export default People