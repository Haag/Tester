import React, {Component} from 'react'
import axios from 'axios'

class Person extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: null
        }
    }

    async componentDidMount(){
        const { params } = this.props.match;
        console.log('params', params);
        const person = (await axios.get(`http://localhost:5050/${params.personId}`)).data
        this.setState({
            person
        })
    }

    render(){
        const {person} = this.state
        if(person === null) return <p>Loading...</p>
        return (
            <div className="container">
            <div className="row">
              <div className="jumbotron col-10">
                <h1 className="display-3">{person.name}</h1>
                <p className="lead">{person.notes}</p>
                <hr className="my-4" />
                {/* <p>Answers:</p> */}
                {/* {
                  person.answers.map((answer, idx) => (
                    <p className="lead" key={idx}>{answer.answer}</p>
                  ))
                } */}
              </div>
            </div>
          </div>
        )
    }
}



export default Person