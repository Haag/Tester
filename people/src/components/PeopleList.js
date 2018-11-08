import React from 'react'
import PersonCard from "./PersonCard"

const PeopleList = (props) => {
        return (
            <div>
                {props.people.map((person, index) => {
                    // console.log("index", index)
                    return(
                        <div  className="PEOPLE" key={"My" + index}>
                            <PersonCard 
                            name={ person.name }
                            note={ person.notes }
                            birthday={ person.birthday }
                            hwm={ person.hwm }
                            wwm={ person.wwm }
                            id={index} 
                            />
                        </div>
                    )
                })}
            </div>
        )
}

export default PeopleList
