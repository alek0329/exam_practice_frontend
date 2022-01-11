import React, { useState, useEffect } from "react";

// Styles
import { Wrapper } from "./Home.styles";

// Facade
import { facade } from "../../apiFacade";

function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...");

  return (
    <div>
      <h2>Poggers in the chat!!</h2>
    </div>
  );
}

function Home({ loggedIn }) {
  return (
    <Wrapper>
      <h1>Home page</h1>
      {!loggedIn && <h3>Login to begin</h3>}
      {loggedIn && <LoggedIn />}
    </Wrapper>
  );
}

export default Home;
