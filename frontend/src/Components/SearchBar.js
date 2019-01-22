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
                placeholder = "Search"
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
height: 45px;
border-radius: 15px;
border: 1px solid #707070;
`
const SearchContainer = styled.div`
width: 100%;
`