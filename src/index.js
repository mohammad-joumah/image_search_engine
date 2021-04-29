import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './components/SearchBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from "./reducers";
import SearchResult from './components/SearchResult'
class App extends React.Component{
    render(){
        return(

            <div>
                <SearchBox/>
                <SearchResult/>
            </div>
            
        )
    }
}

ReactDOM.render(
<Provider store={createStore(reducers)}>
    <App/>
</Provider>
, document.querySelector('#root'))