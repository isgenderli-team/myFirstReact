import React from "react";
import {NavLink} from "react-router-dom";

const Tr=(item)=>{
  return <tr>
    <th scope="row">{item.userIndex}</th>
    <td><NavLink to={"user/"+item.userId}>{item.username +" " + item.lastname}</NavLink></td>
    <td>{item.email}</td>
  </tr>
}


export class Users extends React.Component{
  constructor() {
    super();
    this.state={
      user: []
    }
  }
  componentDidMount() {
    fetch("http://isgenderli.com/getUsers")
      .then(response=>response.json())
      .then(result=>{
          let usersDetail;
          usersDetail = result.map((item,index)=>{
            return <Tr userId ={item.id} username = {item.name} lastname={item.lastname} userIndex={index} email={item.email}/>
          })
         this.setState({
           user:usersDetail
         })
           });
  }

  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First and Last names</th>
          <th scope="col">Emails</th>
        </tr>
        </thead>
        <tbody>
        {this.state.user}
        </tbody>
      </table>
    );
  }
}
