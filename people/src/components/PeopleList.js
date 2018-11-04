import React from 'react'
import PeopleCard from "./Card"

const PeopleList = (props) => {
        return (
            <div>
                {props.people.map(person => {
                    return(
                        <div>
                            <PeopleCard 
                            name={ person.name }
                            note={ person.notes }   />
                        </div>
                    )
                })}
            </div>
        )
}

export default PeopleList
