import React from "react";
//context
import { useGlobalContext } from "./context";

//VI (V.Controllers.js)
//Input component allows players to display
// their names on the dashboard.
const Input = () => {
  const { handleChange, handleSubmit, nicknames, names } = useGlobalContext();
  return (
    // hide the input if both names are specified
    <section className={nicknames.length === 2 ? "hidden" : ""}>
      <form
        className="form"
        //handeSubmit (context.js)
        onSubmit={handleSubmit}
      >
        <div className="form-control">
          <label htmlFor="names">Name:</label>
          <input
            type="text"
            className="input"
            name="names"
            value={names}
            placeholder="Enter Your Name"
            // onChange={(e) => setNames(e.target.value)}
            //onChange (context.js)
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          //onSubmit===onClick
          //   onClick={handleSubmit}
          className="btn-submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Input;
