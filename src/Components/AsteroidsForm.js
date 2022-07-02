import React, { useState } from "react";
import { formatDate } from "../utils";
const AsteroidsForm = (props) => {
  const [apikey, setApiKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const apiKeyChangeHandler = (event) => {
    setApiKey(event.target.value);
  };
/**
 * This method will be called on submit button click
 */
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      if (apikey === "") {
        alert("Please enter the api key");
        return;
      }
      setIsLoading(true);
      let end_date = formatDate(new Date());
      let now = new Date();
      let start_date = formatDate(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7));
      const response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?&API_KEY=${apikey}&start_date=${start_date}&end_date=${end_date}`
      );
      let data = await response.json();
      setIsLoading(false);
      if (data.error && data.error.code === "API_KEY_INVALID") {
        alert("Please enter valid API Key");
        return;
      }
      props.updateAsteroidData(data);
    } catch (error) {
      setIsLoading(false);
      alert("Server error, please try again");
    }
  };

  return (
    <form className="form-control mt-4" onSubmit={submitHandler}>
      <div className="mb-3 ">
        <label htmlFor="apikey" className="form-label">
          Enter API Key
        </label>
        <input
          id="apikey"
          type="text"
          className="form-control"
          onChange={apiKeyChangeHandler}
        />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
      </div>
      {isLoading && <img src="/loader.gif" className="loader" />}
    </form>
  );
};

export default AsteroidsForm;
