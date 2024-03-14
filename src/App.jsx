import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  async function fetchdata() {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    setUsers(await data.json());
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <h1>Users Data</h1>
      <div className="container">
        {users.map((curElem) => {
          const { thumbnailUrl, albumId, id, title } = curElem;
          return (
            <>
              <div className="card">
                <div className="photo">
                  <img src={thumbnailUrl} alt="Photo" height="90" width="90" />
                </div>
                <div className="details">
                  <div className="name">Album Id : {albumId}</div>
                  <div className="number">Employee Id : {id}</div>
                  <div className="website">Title : {title}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
