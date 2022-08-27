import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import styled from "styled-components";
import Profile from "../pages/Profile";
import FontPage from "../pages/FontPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  function updateUserCallback(user) {
    setUser(user);
  }

  return (
    <>
      <AppWrapper>
        <Header>
          <NavBar user={user} setUser={setUser} />
        </Header>
        <Main>
          <Routes>
            <Route path="/" element={<FontPage user={user} />} />
            <Route path="/profile" element={<Profile user={user} updateUserCallback={updateUserCallback} />} />
          </Routes>
        </Main>
      </AppWrapper>
    </>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  padding: 20px;
  gap: 20px;
  background-color: #fff;
`;

const Main = styled.div`
  height: 100%;
  width: 100%;
  `;

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  `;

export default App;
