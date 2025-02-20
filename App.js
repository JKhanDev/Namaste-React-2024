const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React from App.js!"
// );

//console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
