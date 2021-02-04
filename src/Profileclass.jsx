import { Class } from '@material-ui/icons';
import React from 'react';

class Profileclass extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Manthan",
            city:"rajkot",
        }
    }
    update(){
        this.setState({
            name:"Parth",
        })
    }
    render(){

        return(
            <>
                <div>
                    <h1>I am {this.state.name} from {this.state.city}</h1>
                    <button onClick={()=>{this.update()}}>Update</button>
                </div>
            </>
        )
    }

};

export default Profileclass;