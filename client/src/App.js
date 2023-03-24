import React,{useState} from "react";

import RecordList from "./components/RecordList";
import StatusFilter from "./components/status";

//var status = "UNPAID";


 
const App = () => {
  var [status,changeStatus] = useState('UNPAID');

  
 return (
   <div>
    <StatusFilter 
    changeStatus = {changeStatus}
    status = {status}
    />
      <RecordList status = {status}/>
     
   </div>
 );
};
 
export default App;