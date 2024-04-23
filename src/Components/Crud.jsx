import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Crud() {
  const [user, setUser] = useState([]);
  const [city, setCity] = useState("");
  const [dob, setDob] = useState("");
  const [name, setName] = useState("");
  const [uid, setId] = useState();

  const API_url = "https://retoolapi.dev/S4jY5x/student";

  useEffect(() => {
    axios.get(API_url).then((res) => setUser(res.data));
  }, []);

  const deleteItem = async (id) => {
    await axios
      .delete(API_url + "/" + id)
      .then((res) => setUser(user.filter((post) => post.id !== id)));
  };
  const createUser = (ele) => {
    let userd = { dob, city, name };
    setCity("");
    setDob("");
    setName("");
    axios.post(API_url, userd).then((resc) => setUser([...user, resc.data]));

    ele.preventDefault();
  };

  const updateItem = (uid) => {
    axios.get(API_url + "/" + uid).then((res) => {
      const userInfo = res.data;
      setCity(userInfo.city);
      setDob(userInfo.dob);
      setName(userInfo.name);
      setId(userInfo.id);
    });
  };
  const updateData = (ele) => {
    let userd = { dob, city, name };
    axios.put(API_url + "/" + uid, userd).then((res) => {
      const newData = user.map((item) => {
        if (item.id === uid) {
          return res.data;
        }
        return item;
      });
      setUser(newData);
    });
    ele.preventDefault();
  };
  return (
    <section className="py-10">
      <div className="container">
        <form className="border p-5 mb-5 w-1/3  mx-auto">
          <div className="igroup">
            <label htmlFor="City">City</label>
            <input
              type="text"
              id="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="igroup">
            <label htmlFor="dob">dob</label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="igroup">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mt-5">
            <button className="btn" type="submi" onClick={createUser}>
              Add User info
            </button>
            <button className="btn" type="submi" onClick={updateData}>
              update
            </button>
          </div>
        </form>

        <ul className="grid grid-cols-5 gap-3">
          {user.map((user, inx) => {
            const { id, city, dob, name } = user;
            return (
              <li key={id} className="cart">
                <div>
                  {id} = {id}
                </div>
                <div>{city}</div>
                <div>{dob}</div>
                <div>{name}</div>
                <button
                  className="bg-red-600 px-2 py-1 text-sm rounded-md text-white"
                  onClick={() => deleteItem(id)}
                >
                  delete
                </button>
                <button
                  className="bg-green-600 px-2 py-1 text-sm rounded-md text-white"
                  onClick={() => updateItem(id)}
                >
                  update
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
