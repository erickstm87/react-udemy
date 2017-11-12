  var person = {
     name: 'Tom Erickson',
     location: 'Boulder, Colorado',
     occupation: {
       title: 'Developer of Exciting Stuff',
       employer: 'SpotX'
     },
     photo: {
       src: './images/escalante.png',
       height: '225px',
       width: '300px'
     },
     updates: [
       {
         platform: 'my brain',
         status: 'The Mars Volta are the greatest'
       },
       {
         platform: 'F Scott Fitzgerald\'s brain',
         status: 'The test of a first rate intelligence is the ability to hold two opposed ideas in the mind at the same time, and still retain the ability to function'
       },
       {
         platform: 'Willa Cather\'s brain',
         status: 'Time is good for violent people'
       },
       {
         platform: 'Elon Musk',
         status: 'Like why did you go steal Tesla’s E? Like you’re some sort of fascist army marching across the alphabet, some sort of Sesame Street robber?'
       }
     ]
  };

class Photo extends React.Component{
  render(){
    return(
        <div className="photo">
            <img width={this.props.photoWidth} height={this.props.photoHeight} src={this.props.photoSrc} alt="Photo" />
        </div>
    )
  }
}

class Bio extends React.Component{
    render(){
      return(
          <div className="bio">
              <h1 className="name">{this.props.name}</h1>
              <h2 className="location">{this.props.location}</h2>
              <div className="occupation">
                <p>{this.props.occupation.title} at {this.props.occupation.employer}</p>
              </div>
          </div>
      )
    }
}

class Updates extends React.Component{
    updates(){
        return this.props.updates.map(function(update, index){
            return(
              <li className={'update ' + update.platform} key={index}>
                  {update.status}
              </li>
            )
        });
    }
    render(){
      return(
          <div className='updates'>
             <ul>
                 {this.updates()}
             </ul>
          </div>
      )
    }
}


class Card extends React.Component{
    render(){
        return(
          <div className="card">
            <Photo photoHeight={person.photo.height} photoWidth={person.photo.width} photoSrc={person.photo.src}/>
            <Bio name={person.name} location={person.location} occupation={person.occupation}/>
            <Updates updates={person.updates}/>
          </div>
        )
    }
}

ReactDOM.render(<Card />, document.getElementById('app'));
