const React = require('react');
const ReactDOM = require('react-dom');
const products = require('./products.js');

class Results extends React.Component{

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.query);
        console.log('hey here ', nextProps.products);
    }
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
                <Results products={this.props.products} query={this.state.query} />
                </div>

        )
    }
}

ReactDOM.render(<Search products={products}/>, document.getElementById('app'));
