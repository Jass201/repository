import Stripe from 'stripe';
import { Amplify, Auth } from "aws-amplify";
import awsExports from "./aws-exports.js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import * as aws from "aws-sdk";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/nl.js";
import { UserProvider } from "./context/UserContext.js";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
//import { dynamoDB } from "../backend_functions/declerations.ts";



//pakt wel
console.log(import.meta.env.VITE_AWS_ACCESS_KEY_ID);
console.log(import.meta.env.VITE_AWS_SECRET_ACCESS_KEY);
console.log(import.meta.env.VITE_AWS_REGION);

//pakt niet
aws.config.update({
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  region: import.meta.env.VITE_AWS_REGION,
});

const dynamoDB = new aws.DynamoDB();

dynamoDB.listTables({}, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});



export const cognitoClient = new aws.CognitoIdentityServiceProvider();
Amplify.configure(awsExports);
Auth.configure(awsExports);
export const stripeClient = new Stripe(import.meta.env.VITE_STRIPE_TEST_KEY);


function math(){
  
  console.log(Math.random())
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="nl">
          <App />
          <button onClick={math}>math</button>
        </LocalizationProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);