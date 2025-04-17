import React from "react";

//const UserContext = React.createContext();
const UserContext = React.createContext('CodeByEvolution'); // we can set the default value in context
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer 

export  {UserProvider,UserConsumer}
export default UserContext   // for using Context Type 