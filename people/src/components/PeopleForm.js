import React from 'react'

const PeopleForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleChange}>
            Name: 
            <input type="text" value={props.name} onChange={props.handleChange} />
            <input type="submit" value="Submit" onClick={props.updateChange} />
            </form>
        </div>
    )
}

export default PeopleForm

