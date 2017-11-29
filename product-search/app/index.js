const React = require('react');
const ReactDOM = require('react-dom');
const product = require('./products.js');

class Results extends React.Component{
    render(){
      return(
        <div className="results">
         <div className="in-stock">
             <h2><a href="#">Toothpaste</a></h2>
             <p>$2.99</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor</p>
         </div>
         </div>
      )
    }
}

class SearchBar extends React.Component {

    handleQuery(event){
      this.props.onQuery(event.target.value);
        console.log(event.target.value);
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

    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
    }

    handleQuery(query){
        // console.log(query);
        this.setState({'query': query})
    }

    render() {
        return(
            <div className="search">
                <SearchBar onQuery={this.handleQuery.bind(this)}/>
                <Results />
                </div>

        )
    }
}

ReactDOM.render(<Search />, document.getElementById('app'));
