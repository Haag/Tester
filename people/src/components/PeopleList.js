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
                            note={ person.notes }
                            birthday={ person.birthday }
                            hwm={ person.hwm }
                            wwm={ person.wwm }
                            
                            />
                        </div>
                    )
                })}
            </div>
        )
}

export default PeopleList
