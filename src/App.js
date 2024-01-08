import React, { Component } from 'react'
import './App.css'
export default class App extends Component {
  state={ person:{
    fullName:'Guedoiar wiam',
    bio:'designer',
    imgSrc:'https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/398537210_1053266745989124_4426046177771953147_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=AFc95kXbTA0AX8KFuXD&_nc_ht=scontent.ftun1-2.fna&oh=00_AfBOYkJ3kgWO53Qxf-JeW-iwkTWEgbRimYz1YJBiVtn7lg&oe=656BC1B2',
    profession:'architecte interieur'
  },
  show:false,
  time:0
  
  };
  // the time interval since the last component was mounted using the component lifecycle
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      });
    }, 1000);
  }

  
 





  



  render() {
    // shows is boolean  or not
    const showw = () =>{
   
      // (this.state.show==false )? this.setState({show:true}) :this.setState({show:false}) 
      this.setState({show:!this.state.show})
      console.log(this.state.show)
    }




    return (
      <div className='App-header' >
    {(this.state.show==true)?
      <div>
        <h1>{this.state.person.fullName}</h1>
        <h2>{this.state.person.bio}/
        {this.state.person.profession}</h2>
        <img src={this.state.person.imgSrc} ></img></div>:
        
         null
        }
{/* button that toggles the show state */}
<button onClick={showw} className='button-85'>show</button>
{/* affichage Time interval since  */}
<p>Time interval since mount: {this.state.time} seconds</p>


      </div>
    )
  }
}
