import React from "react";

function Memo(props) {
  console.log("comp rendered");
  return (
    <div>
      This is memo component demo .<br />
      Name : {props.name}
    </div>
  );
}
export default Memo;
//export default React.memo(Memo);
