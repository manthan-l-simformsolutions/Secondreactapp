import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

const User = ({ match }) => {
    const { name } = useParams();
    const location = useLocation();
    const history = useHistory();
    return (<>
        <h1>Hello,I am {name} </h1>
        <p>Current Location is: {location.pathname}</p>
        {location.pathname === `/user/manthan`?
        <button onClick={()=>history.goBack()}>Go Back</button>:null
        }
        
    </>
    )
}
export default User;
