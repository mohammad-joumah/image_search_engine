import { Component } from "react";
import { Alert, Image } from "react-bootstrap";
import { connect } from "react-redux";

class SearchResult extends Component {
    render() {
        if(this.props.search.length)
        {
            const searchItem = this.props.search.map((image, index) => {
            return (
                
                    <Image key={index} src={image.largeImageURL} rounded className='m-2 col-2' />
                
            )
        })
        return(
            <div className="d-flex flex-wrap">
                {searchItem}
            </div>
        )
    }else{
        <Alert variant='secondary'>
            No result to be shown
        </Alert>
    }
        

    }
}
const mapStateToProps = (state) => {
    return ({
        search: state.search
    })
}

export default connect(mapStateToProps)(SearchResult)