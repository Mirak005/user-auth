import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadUser } from "./js/actions/authActions";
import { getUsers } from "./js/actions/userActions";

import AppNavBar from "./components/layout/Navbar";
import UsersList from "./components/layout/UsersList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App({ getUsers, loadUser }) {
  useEffect(() => {
    getUsers();
    loadUser();
  }, [getUsers,loadUser]);

  return (
    <div>
      <AppNavBar />
      <UsersList />
    </div>
  );
}

export default connect(null, { loadUser, getUsers })(App);
