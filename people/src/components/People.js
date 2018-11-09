import React, { Component } from 'react'
import PeopleList from './PeopleList'
import PeopleForm from "./PeopleForm"
import Header from './Header'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


    
class People extends Component {
    constructor() {
        super()
        this.state = {
            people: [
                {
                    name: "Kyle",
                    notes: "Blah blah blah",
                    birthday: "July 18, 91",
                    hwm: "Game night",
                    wwm: "Dec 2018",
                }],
            name: '',
            notes: '',
            birthday: '',
            hwm: '',
            wwm: '',
            id: 0,
        }
        this.handleChange = (e) => {
            e.preventDefault()
            this.setState({ [e.target.name]: e.target.value })
        }
        this.updateChange = () => {
            
            const people = this.state.people
            people.push({
                name: this.state.name,
                notes: this.state.notes,
                birthday: this.state.birthday,
                hwm: this.state.hwm,
                wwm: this.state.wwm,
                id: this.state.id,
            })
            this.setState({people, name: '', notes: '', birthday: '',
                hwm: '', wwm: '', id: this.state.id + 1})
        }
    }

    render() {
        // console.log("State", this.state.id)

        return(
            <div>
                <Header />
                <Card >
                    <PeopleForm handleChange={this.handleChange} updateChange={this.updateChange}
                        name={this.state.name}  notes={this.state.notes} birthday={this.state.birthday}
                        hwm={this.state.hwm} wwm={this.state.wwm}/>
                </Card>
                
                <PeopleList people={this.state.people} />

            </div>
        )
    }
}





export default People