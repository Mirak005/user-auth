import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadUser } from "./js/actions/authActions";
import AppNavBar from "./components/layout/Navbar";
import UsersList from "./components/layout/UsersList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App(props) {
  useEffect(() => {
    props.loadUser();
  }, []);

  return (
    <div>
      <AppNavBar />
      <UsersList />
    </div>
  );
}

export default connect(null, { loadUser })(App);
