import React,{Component} from "react";
import './mainsection.css';
import '../../App.css';

class MainSection extends Component{
    constructor(props){
        super(props);
        this.section = this.section.bind(this);
        
    }
    section(){
        return(
            <div className="main-container">         
          <h1>SUNSET VACATIONS</h1>
           <p>Not sure where to go? Perfect</p>
           <div className="main-btns">
               <button className="btns">I'm flexible</button>
           </div>
             </div>
        );
    }
    render(){
        const x = this.section();
        return (
          <React.Fragment>
          {x}
      </React.Fragment>
        );
          
    }

}

export default MainSection;