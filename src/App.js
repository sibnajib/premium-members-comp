import React, { useState } from "react";

import List from "./components/List";

import { data } from "./components/data";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="sec">
        <h2>{people.length} Premium Members</h2>
        <List poko={people} />
        <button
          className="btn btn-1"
          onClick={() => {
            setPeople([]);
          }}
        >
          clear all
        </button>

        <button
          className="btn btn-2"
          onClick={() => {
            setPeople(data);
          }}
        >
          show all
        </button>
      </section>
    </main>
  );
}

export default App;
