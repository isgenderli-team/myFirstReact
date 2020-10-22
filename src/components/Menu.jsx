import {NavLink} from "react-router-dom";
import React from "react";

export const Menu=()=>{
  return (
    <ul>
      <li><NavLink to="/profile">Профиль</NavLink></li>
      <li><NavLink to="/settings">Настройки</NavLink></li>
      <li><NavLink to="/users">Пользователи</NavLink></li>
    </ul>
  );
}
