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
         platform: 'twitter',
         status: 'I\'m happy, hope you\'re happy too!'
       },
       {
         platform: 'twitter',
         status: 'The better the singer\'s voice, the harder it is to hear what they\'re saying'
       },
       {
         platform: 'twitter',
         status: 'Fear makes the wolf look bigger'
       },
       {
         platform: 'facebook',
         status: 'If you\’re working on something that you think is going to get accomplished in this lifetime then you’re not thinking big enough'
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
    render(){
      return(
          <div className='updates'>
             <ul>
               <li className="update">Updates</li>
               <li className="update">Updates</li>
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
            <Updates />
          </div>
        )
    }
}

ReactDOM.render(<Card />, document.getElementById('app'));
