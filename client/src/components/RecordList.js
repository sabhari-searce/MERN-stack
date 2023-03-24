import React, { useEffect, useState } from "react";
import './RecordList.css'

//Retrives data from the mongo db and return it as a single packed component
const Record = (props) => (

  <div class="pricing-table">
    <div class="card">
     
           
           <th class="type">Invoice</th>
   <h1 class="price"><span>₹</span> {props.record.price}</h1>
   <h3 class="plan">{props.record.name}</h3>

   <h5 class="details">Invoice id : {props.record.id}</h5>

   <div class="buy-button"> <a href={props.record.link} class="btn" rel="im-checkout" data-text="Pay Invoice" data-css-style="color:#ffffff; background:#75c26a; width:300px; border-radius:30px" data-description="Here is your payment portal to pay your unpaid Invoice. Please pay the invoice amount."  data-layout="vertical">Pay Now!</a>
<script src="https://js.instamojo.com/v1/button.js"></script></div></div></div>
   


 
);


 
export default function RecordList(props) {
 const [records, setRecords] = useState([]);
 //const [status,setStatus] = useState(props.status)
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`https://mern-app-xss1.onrender.com/record`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     //console.log(records)
     setRecords(records);

   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 
 

  

return records.filter((record)=>{
return (props.status === 'UNPAID' && record.paid === false) || (props.status === 'PAID' && record.paid === true)
}).map((record) => {
  return <Record
             record={record}
          />
});

 }
   
 
 
 