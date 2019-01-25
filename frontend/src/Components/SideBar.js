import React, {Component} from 'react'
import styled from 'styled-components'


function openNav() {
  console.log("Clicked")
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


const NewComponent = () => {
return (

  <div>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
    />
  <style
    dangerouslySetInnerHTML={{
      __html:
      '\nbody {\n  font-family: "Lato", sans-serif;\n}\n\n.sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n}\n\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n\n.sidenav a:hover {\n  color: #f1f1f1;\n}\n\n.sidenav .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n\n#main {\n  transition: margin-left .5s;\n  padding: 16px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\n'
    }}
    />
  <div id="mySidenav" className="sidenav">
    <a
      href="javascript:void(0)"
      className="closebtn"
      onClick={closeNav}
      >
      ×
    </a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
  <div id="main">
    <h2>Sidenav Push Example</h2>
    <p>
      Click on the element below to open the side navigation menu, and
      push this content to the right.
    </p>
    <span
      style={{ fontSize: 30, cursor: "pointer" }}
      onClick={openNav}
      >
        {console.log("Try this")}
      ☰ open
    </span>
  </div>
</div>

)
}



export default NewComponent

  const divContainer = styled.div`
  padding-top: 500px;
  margin-top: 500px;
  `


