import { useState } from "react";

const Prices = ({ bpi }) => {
  const [currency, setCurrency] = useState(Object.keys(bpi)[0]);

  console.log(Object.keys(bpi))
  return (
    <div>
      <div className="container">
      <label htmlFor="currency">Currency: </label>
        <select
          onChange={(e) => {
            setCurrency(e.target.value);
          }}
        >
          {Object.keys(bpi).map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          Bitcoin rate for {bpi[currency].description}:{" "}
          <span className="badge badge-primary">{bpi[currency].code}</span>
          <strong>{bpi[currency].rate}</strong>
        </li>
      </ul>
    </div>
  );
};

export default Prices;
