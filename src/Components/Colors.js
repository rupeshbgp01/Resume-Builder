import React from "react";
// import { ArrowDown } from "react-feather";
import './Colors.css'
import Button from "./Buttons/Button";

function Colors() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  return (
    <div className="colors__container">
      {/* <p className="heading">Resume Builder</p> */}
      < div className="toolbar">
        <div className="colors">
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className="color"
            />
          ))}
        </div>
        <Button title="Download"/>
      </div>
    </div>
  );
}

export default Colors;