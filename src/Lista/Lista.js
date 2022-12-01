import React from "react";


function Lista(props){

    return(
        <React.Fragment>
            
            <h1 className="miLista">Mi lista</h1>
            <div className="lista">
            {props.children}
            </div>
        </React.Fragment>
    );
}

export default Lista;