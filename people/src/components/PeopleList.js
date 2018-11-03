import React from 'react'
// import People from './People'

const PeopleList = (props) => {
        return (
            <div>
                {props.people.map(person => {
                    return(
                        <div>
                            {person.name}
                            {person.notes}
                        </div>
                    )
                })}
            </div>
        )
}

export default PeopleList
