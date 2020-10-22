import React from "react";

export class Profile extends React.Component{
  constructor() {
    super();
    this.state={
      userName:"Empty User",
      userLastname:"Emptyovic"
    }
  }


  componentDidMount() {
    fetch("http://isgenderli.com/getUserJSON")
      .then(response=>response.text())
      .then(info=>{
        this.setState({
          userName:info,
          userLastname: info
        })
      });
  }


  render(){
    return (
      <div className="row">
        <div className="col-2">
          <img width='100%' src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/>
        </div>
        <div className="col-10">
          <h1>{this.state.userName} {this.state.userLastname}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam blanditiis corporis delectus error expedita odit perspiciatis, quibusdam quod sed. Debitis, eius ex explicabo harum iusto magnam odit quam quo!</p>
        </div>
      </div>
    )
  }


}
