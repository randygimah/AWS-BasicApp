/*The code will use the Amplify Authenticator component to scaffold out 
an entire user authentication flow allowing users to sign up, sign in, reset their password, 
and confirm sign-in for multifactor authentication (MFA). */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./App.css";
import "./layout/default/default.scss"
import App from "./App.jsx";
import { Authenticator } from "@aws-amplify/ui-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </StrictMode>
);
