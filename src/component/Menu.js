import React from "react";
import { MenuList } from "../component/Menulist";
import "../component/Menu.css";
import pizza from "../img/pineapple.jpg";
import oreo from "../img/58ee529250709937fe63b056ad23d27f.jpg";
import frappe from "../img/5347f9cd924462b75585435da236099e.jpg";

function Menu() {
  return (
    <div className="menu">
      <center>
      <h1 className="menuTitle">Our Menu</h1>
      </center>
      <div class="menuimg">
        <center>
        <img className="pizza" src={pizza} width={300}></img>
        </center>
        <h3><center>Margretta</center></h3><br></br><br></br>
        <center>
        <img className="oreo" src={oreo} width={300}></img>
        </center>
        <h3><center>Oreo Milkshake</center></h3><br></br>
        <center>
        <img className="frappe"  src={frappe} width={300}></img>
        </center>
        <h3><center>Frappe</center></h3>
        

        {/* {MenuList.map((menuItem, key) => {
          return (
            // <MenuItem
            //   key={key}
            //   image={menuItem.image}
            //   name={menuItem.name}
            //   price={menuItem.price}
            // />
          // );
        })} */}
      </div>
    </div>
  );
}

export default Menu;