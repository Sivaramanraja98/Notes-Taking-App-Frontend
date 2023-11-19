import React, { useEffect } from "react";
import authStore from "../stores/authStore";

const LogoutPage = () => {
  const store = authStore();
  useEffect(() => {
    store.logout();
  }, [store]);
  return <div>You Are Logged Out</div>;
};

export default LogoutPage;
