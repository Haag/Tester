import React from 'react'

const PeopleForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleChange}>
            Name: 
            <input type="text" name="name" value={props.name} onChange={(e) => props.handleChange(e, "name")} />
            <input type="submit" value="Submit" onClick={props.updateChange} />
            </form>
          
            {/* <form onSubmit={props.updateChange}>
            Name: 
            <input type="text" value={props.name} onChange={props.handleChange} />
            <input type="submit" value="Submit" onClick={props.updateChange} />
            </form> */}
            
            <form onSubmit={props.handleChange}>
            Notes: 
            <input type="text" value={props.name} onChange={props.handleChange} />
            <input type="submit" value="Submit" onClick={props.updateChange} />
            </form>
            
            <form onSubmit={props.handleChange}>
            How We Met: 
            <input type="text" value={props.name} onChange={props.handleChange} />
            <input type="submit" value="Submit" onClick={props.updateChange} />
            </form>
            
            <form onSubmit={props.handleChange}>
            When We Met: 
            <input type="text" value={props.name} onChange={props.handleChange} />
            <input type="submit" value="Submit" onClick={props.updateChange} />
            </form>
        </div>
    )
}

export default PeopleForm

