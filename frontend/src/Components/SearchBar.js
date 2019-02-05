import React, {Component} from 'react'
import styled from 'styled-components'


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }
    render () {
        return (
            <SearchContainer id="SearchContainer">
                <SearchInput 
                id = "SearchInput"
                placeholder = "Search People"
                value = {this.state.term}
                onChange={ e => this.onInputChange(e.target.value)} />
            </SearchContainer>
        )
    }
    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term)
    }   
}

export default SearchBar

const SearchInput = styled.input`
width: 100%;
height: 40px;
border-radius: 300px;
border: 1px solid #707070;
::-webkit-input-placeholder {
    padding-left : 5%;
    font-size: 1rem;
    color: red;
}
@media (max-width: 700px) {
    // margin-left: 20%;
    }
`
const SearchContainer = styled.div`
width: 100%;
`