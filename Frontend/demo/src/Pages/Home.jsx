import React from "react";

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Home Page</h1>
      <p>You are now logged in 🎉</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial, sans-serif",
  },
};

export default Home;
