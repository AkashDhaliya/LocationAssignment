import React,{useState} from "react";
import AddLocationData from "../AddLocationComponent/AddLocation";

function Header() {
  const [locationVisibility, setLocationVisibility] = useState(false);

  function hideLocationModal(){
    setLocationVisibility(false);
  }

  return (
    <header>
      <h4>Locations</h4>
      <button className="addLocationBtn" onClick={()=>setLocationVisibility(true)}>&#43; Add Location</button>
      <AddLocationData showModal={locationVisibility} hideModal = {hideLocationModal}  />
    </header>
  );
}

export default Header;
