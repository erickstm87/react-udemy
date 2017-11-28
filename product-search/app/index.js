const React = require('react');
const ReactDOM = require('react-dom');
const product = require('./products.js');

class Results extends React.Component{
    render(){
      return(

      )
    }
}

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
    }

    handleQuery(query){
        //this.setState({'query': })
    }

    render(){
      return(
          <div className='search-bar'>
            <input onChange={this.handleQuery.bind(this)} placeholder='Search'/>
          </div>
      )
    }
}

class Search extends React.Component {
    render() {
        return(
            <div className="search">
                <SearchBar />
                <Results />
                </div>

        )
    }
}

ReactDOM.render(<Search />, document.getElementById('app'));
