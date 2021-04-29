import { FormControl, InputGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getData } from "../services";
import { searchResult } from "../actions";
import { Component } from "react";


class SearchBox extends Component {
    state = {
        searchWord: ''
    }
    searchBtnClick = () => {
        getData(this.state.searchWord).then(data => {
            this.props.searchResult(data.hits)
        })
    }
    searchEnter = (e) => {
        if (e.keyCode === 13) {
            this.searchBtnClick()
        }
    }
    render() {
        return (
            <InputGroup className="mb-3 container">
                <InputGroup.Prepend>
                    <Button onClick={this.searchBtnClick} variant="outline-secondary">Search</Button>
                </InputGroup.Prepend>
                <FormControl placeholder="search a word"
                    onKeyUp={this.searchEnter}
                    aria-describedby="basic-addon1"
                    value={this.state.searchWord}
                    onChange={e => { this.setState({ searchWord: e.target.value }) }}
                />
            </InputGroup>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        search:state.search
    })
}

export default connect(mapStateToProps,{searchResult})(SearchBox);