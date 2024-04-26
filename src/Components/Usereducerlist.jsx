import { useReducer, useState } from "react";

const initialState = [
  {
    id: Date.now(),
    name: "mukesh",
    email: "mukesh@gmail.com",
  },
];
const reducer = (state, action) => {
  if (action.type === "Add") {
    return [...state, action.payload];
  }else if (action.type === "delete") {
    return state.filter(itm => itm.id !== action.payload.uid)
  }
};
export default function Usereducerlists() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addList = (e) => {
    const user = {
      id: Date.now(),
      name: name,
      email: email,
    };

    dispatch({ type: "Add", payload: user });
    e.preventDefault();
  };
  return (
    <section className="py-10">
      <div className="container">
        <form onSubmit={addList} className="w-1/3 p-5 border rounded-md">
          <label htmlFor="uNname">Enter name</label>
          <input
            type="name"
            id="uNname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <br />
          <label htmlFor="uEmail">Enter Email</label>
          <input
            type="email"
            id="uEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <button type="submit" className="btn">
            Add List
          </button>
        </form>

        <ul className="grid mt-4 grid-cols-5 gap-4">
          {state.map((itm) => {
            const { id, name, email } = itm;
            return (
              <li key={id} className="cart">
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <button
                  className="bg-red-600 text-white text-sm py-1 px-2 rounded-full"
                  onClick={() => dispatch({type: 'delete', payload:{uid:id}})}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
