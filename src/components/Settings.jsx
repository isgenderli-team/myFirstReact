import React from "react";

export const Settings=()=>{
  return(
    <div>
      <div className="col-10">
        <label htmlFor="name">Change Name</label>
        <input id="name" placeholder="Ivan" type="text"/>
      </div>
      <div className="col-10">
        <label htmlFor="lastname">Change lastame</label>
        <input id="lastname" placeholder="Ivanov" type="text"/>
      </div>
    </div>
  );
}
