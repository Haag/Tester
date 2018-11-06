import React from 'react'
import PersonCard from "./PersonCard"

const PeopleList = (props) => {
        return (
            <div>
                {props.people.map(person => {
                    return(
                        <div>
                            <PersonCard 
                            name={ person.name }
                            note={ person.notes }   />
                        </div>
                    )
                })}
            </div>
        )
}

export default PeopleList
