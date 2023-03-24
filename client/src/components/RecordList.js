import React, { useEffect, useState } from "react";
import './RecordList.css'

//Retrives data from the mongo db and return it as a single packed component
const Record = (props) => (
 <div>
   <h1 class="price"><span>₹</span> {props.record.price}</h1>
   <h3 class="plan">{props.record.name}</h3>

   <h5 class="details">Invoice id : {props.record.id}</h5>

   <div class="buy-button"> <a href="https://test.instamojo.com/@sabhari/l6066e728a6634da6a8d02a09f39d16a4/" class="btn" rel="im-checkout" data-text="Pay Invoice" data-css-style="color:#ffffff; background:#75c26a; width:300px; border-radius:30px" data-description="Here is your payment portal to pay your unpaid Invoice. Please pay the invoice amount."  data-layout="vertical">Pay Now!</a>
<script src="https://js.instamojo.com/v1/button.js"></script></div></div>


 
);


 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
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
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
      <div class="pricing-table">
    <div class="card">
     
           
           <th class="type">Invoice</th>
       <Record
         record={record}
       />
       </div>
   </div>
     );
   });
 }
 
 //This following section will display the table with the records of individuals.
 return (
  //  <div class="pricing-table">
  //   <div class="card">
     
           
  //          <th class="type">Invoice</th>
         
       <p>{recordList()}</p>
  //    </div>
  //  </div>
 );
}

