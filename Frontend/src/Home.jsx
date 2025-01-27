import React, { useEffect, useState } from "react";
import Axios from "axios";
import Card from "./Card";
const Home = () => {
  let [Task, setTask] = useState("");
  let [EditId, setEditId] = useState(null);
  let [IsEditing, setIsEditing] = useState(false);
  let [Data, setData] = useState([]);

  let Handlesubmit = (e) => {
    e.preventDefault();
    console.log(Task);

    if (IsEditing) {
      Axios.put(`http://localhost:3000/api/updatedata/${EditId}`, { Task })
        .then((res) => {
          console.log(res.data.msg);
        })
        .catch((e) => {
          console.log(res.data.msg);
        });

      Fetchdata();
      resetform();
    } else {
      Axios.post("http://localhost:3000/api/adddata", { Task })
        .then((res) => {
          console.log(res.data.msg);
        })
        .catch((e) => {
          console.log(res.data.msg);
        });
      Fetchdata();
      resetform();
    }
  };
  let HandleEdit = (File) => {
    setTask(File.Do);
    setEditId(File._id);
    setIsEditing(true);
  };

  let Handledelete = (id) => {
    Axios.delete(`http://localhost:3000/api/deletedata/${id}`)
      .then((res) => {
        console.log(res.data.msg);
      })
      .catch((e) => {
        console.log(res.data.msg);
      });
    Fetchdata();
  };

  let resetform = () => {
    setTask("");
    setEditId(null);
    setIsEditing(false);
  };

  useEffect(() => {
    Fetchdata();
  }, []);

  let Fetchdata = () => {
    Axios.get("http://localhost:3000/api/getdata")
      .then((res) => {
        setData(res.data.info);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="text-center">
        <h1>TODO-LIST</h1>
      </div>

      <form action="" onSubmit={Handlesubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="input"
            placeholder="Enter A Task..."
            required
            autoComplete="off"
            onChange={(e) => setTask(e.target.value)}
            value={Task}
            style={{ fontVariant: "small-caps", fontWeight: "500" }}
          />
          <button
            className="btn"
            id="btn"
            type="submit"
            style={{ fontVariant: "small-caps", fontWeight: "500" }}
          >
            {IsEditing ? "Save" : "Add"}
          </button>
        </div>
      </form>
      <Card Data={Data} onEdit={HandleEdit} onDelete={Handledelete} />
    </div>
  );
};

export default Home;
