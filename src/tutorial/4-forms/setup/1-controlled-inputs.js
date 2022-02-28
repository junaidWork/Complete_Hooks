import React, { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setfirstName] = useState("");
  const [email, setemail] = useState("");
  const [people, setpeople] = useState([]);

  const handleSubmit = (e) => {
    console.log(firstName, email);
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person, "person");
      setpeople((people) => {
        return [...people, person];
      });
      setfirstName("");
      setemail("");
      console.log(people, "people");
    } else {
      alert("empty filed");
    }

    e.preventDefault();
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="fname">Name :</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {people.map((item) => {
          const { id, firstName, email } = item;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
