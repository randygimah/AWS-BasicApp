// /*The code starts by configuring the Amplify library with the client configuration file ( amplify_outputs.json) .
// It then generates a data client using the  generateClient()  function.
// The app will use the data client to get the user’s profile data.  */

// import { useState, useEffect } from "react";
// import {
//   Button,
//   Heading,
//   Flex,
//   View,
//   Grid,
//   Divider,
// } from "@aws-amplify/ui-react";
// import { useAuthenticator } from "@aws-amplify/ui-react";
// import { Amplify } from "aws-amplify";
// import "@aws-amplify/ui-react/styles.css";
// import { generateClient } from "aws-amplify/data";
// import outputs from "../amplify_outputs.json";
// import AllTabs from "./views/all-tabs";
// /**
//  * @type {import('aws-amplify/data').Client<import('../amplify/data/
// resource').Schema>}
//  */
// Amplify.configure(outputs);
// const client = generateClient({
//   authMode: "userPool",
// });

// export default function App() {
//   const [userprofiles, setUserProfiles] = useState([]);
//   const { signOut } = useAuthenticator((context) => [context.user]);

//   useEffect(() => {
//     fetchUserProfile();
//   }, []);

//   async function fetchUserProfile() {
//     const { data: profiles } = await client.models.UserProfile.list();
//     setUserProfiles(profiles);
//   }
//   return (
//     <Flex
//       className="App"
//       justifyContent="center"
//       alignItems="center"
//       direction="column"
//       width="70%"
//       margin="0 auto"
//     >
//       <View>
//         <AllTabs />
//       </View>
//       <Divider />
//       <Grid
//         margin="3rem 0"
//         autoFlow="column"
//         justifyContent="center"
//         gap="2rem"
//         alignContent="center"
//       >
//         {userprofiles.map((userprofile) => (
//           <Flex
//             key={userprofile.id || userprofile.email}
//             direction="column"
//             justifyContent="center"
//             alignItems="center"
//             gap="2rem"
//             border="1px solid #ccc"
//             padding="2rem"
//             borderRadius="5%"
//             className="box"
//           >
//             <View>
//               <Heading level="3">{userprofile.email}</Heading>
//             </View>
//           </Flex>
//         ))}
//       </Grid>
//       <Button onClick={signOut}>Sign Out</Button>
//     </Flex>
//   );
// }

// import { useState, useEffect } from "react";
// import { Button, View, Grid, Divider } from "@aws-amplify/ui-react";
// import { useAuthenticator } from "@aws-amplify/ui-react";
// import { Amplify } from "aws-amplify";
// import { generateClient } from "aws-amplify/data";
// import { initAll } from 'govuk-frontend';
// import outputs from "../amplify_outputs.json";
// import AllTabs from "./views/all-tabs";
// import "@aws-amplify/ui-react/styles.css";
// import "./styles/_govuk-frontend.scss";

// Amplify.configure(outputs);
// const client = generateClient({
//   authMode: "userPool",
// });

// export default function App() {
//   const [userprofiles, setUserProfiles] = useState([]);
//   const { signOut } = useAuthenticator((context) => [context.user]);

//   useEffect(() => {
//     fetchUserProfile();
//     initAll(); // Initialize GOV.UK Frontend
//   }, []);

//   async function fetchUserProfile() {
//     const { data: profiles } = await client.models.UserProfile.list();
//     setUserProfiles(profiles);
//   }

//   return (
//     <div className="govuk-template__body js-enabled">
//       <header className="govuk-header" role="banner" data-module="govuk-header">
//         <div className="govuk-header__container govuk-width-container">
//           <div className="govuk-header__content">
//             <h1 className="govuk-header__heading">Landing Zone </h1>
//           </div>
//         </div>
//       </header>

//       <div className="govuk-width-container">
//         <main className="govuk-main-wrapper" id="main-content" role="main">
//           <View>
//             <AllTabs />
//           </View>

//           <Divider className="govuk-section-break govuk-section-break--visible" />

//           <Grid className="govuk-grid-row">
//             {userprofiles.map((userprofile) => (
//               <div key={userprofile.id || userprofile.email} className="govuk-grid-column-one-third">
//                 <div className="govuk-panel">
//                   <h2 className="govuk-heading-m">{userprofile.email}</h2>
//                 </div>
//               </div>
//             ))}
//           </Grid>

//           <Button
//             onClick={signOut}
//             className="govuk-button govuk-button--warning"
//           >
//             Sign Out
//           </Button>
//         </main>
//       </div>

//       <footer className="govuk-footer" role="contentinfo">
//         <div className="govuk-width-container">
//           <div className="govuk-footer__meta">
//             <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
//               <h2 className="govuk-visually-hidden">Footer links</h2>
//               {/* Add footer content here */}
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
import routes from "./routes";

export const App = () => {
  const router = createBrowserRouter(routes.createRoutes());

  return <RouterProvider router={router} />;
};

export default App;
