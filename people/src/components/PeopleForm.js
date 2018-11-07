import React from 'react'

const PeopleForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleChange} >
            Name: 
            <input type="text" name="name" value={props.name} onChange={props.handleChange} />

            Notes: 
            <input type="text" name="notes" value={props.notes} onChange={props.handleChange} />            
            
            Birthday: 
            <input type="text" name="birthday" value={props.birthday} onChange={props.handleChange} />

            How We Met: 
            <input type="text" name="hwm" value={props.hwm} onChange={props.handleChange} />
            
            When We Met: 
            <input type="text" name="wwm" value={props.wwm} onChange={props.handleChange} />

            <button onClick={props.updateChange} >Submit</button>

            </form>
        </div>
    )
}

export default PeopleForm

