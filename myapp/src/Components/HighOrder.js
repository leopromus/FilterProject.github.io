import React from "react";

const  UpdatedComp = (originalComp) =>{
    class newComp extends React.Component{
        render(){
            return <originalComp name="Promis_Leo"></originalComp>
        }
    }
    return newComp;
}
export default UpdatedComp;
