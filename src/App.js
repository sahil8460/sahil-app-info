import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get("https://sahil-json-server.herokuapp.com/users").then((response) => {
            setData(response.data);
        });
    }, []);
    return (
        <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        {!data ? <h3>...loading</h3> : data.map((e, i)=> {
            return <h3 key={i}>{e.username}</h3>
        })}
        </div>
    </header>
    </div>
);
}

export default App;
