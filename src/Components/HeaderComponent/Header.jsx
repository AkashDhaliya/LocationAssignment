import React,{useState} from "react";
import AddLocationData from "../AddLocationComponent/AddLocation";

function Header() {
  const [addLocationVisibility, setAddLocationVisibility] = useState(false);

  return (
    <header>
      <h4>Locations</h4>
      <button onClick={()=>setAddLocationVisibility(!addLocationVisibility)}>&#43; Add Location</button>
      <AddLocationData visibility={addLocationVisibility} />
    </header>
  );
}

export default Header;
