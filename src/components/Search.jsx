import React, { useContext, useState } from "react";
import { Pokemon } from "./Parent";

function Search(props) {
  const [search, setSearch] = useState("");

  const pokeName = useContext(Pokemon);

  return (
    <div style={{ margin: "0 2rem" }}>
      <div>
        <div>
          <input
            type="search"
            className="form-control"
            placeholder="Search pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {
          <div
            style={{
              backgroundColor: search && "rgba(255, 255, 255, 0.5)",
              borderRadius: "10px",
              maxHeight: "20rem",
              position: "absolute",
              overflow: "auto",
              // paddingRight: '10rem',
              // border: 'solid',
            }}
          >
            <ul>
              {search &&
                pokeName
                  .filter((name, index) => {
                    return name.startsWith(search, 0);
                  })
                  .map((pokemon, index) => {
                    return (
                      <li
                      type='button'
                      className="d-flex justify-content-start align-items-center"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.5)",
                          border: "solid rgba(0, 0, 0, 0.5)",
                          borderRadius: "10px",
                          marginLeft: "-2rem",
                          padding: "1rem",
                          // height: '100%',
                          // width: "100%",
                        }}
                        onClick={() => {
                          props.search(pokemon);
                          console.log(index);
                          setSearch("");
                        }}
                        key={index}
                      >
                        {pokemon}
                      </li>
                    );
                  })}
            </ul>
          </div>
        }
      </div>
    </div>
  );
}

export default Search;
