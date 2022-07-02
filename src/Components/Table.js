import React, { useEffect, useState } from "react";

const Table = ({ asteroidData }) => {
  let [astData, setAstData] = useState([]);
  let [sortorder, setSortOrder] = useState("asc");
  useEffect(() => {
    let data = [...asteroidData];
    let newData = [];
    data.forEach((obj) => {
      newData.push({
        'id': obj.id,
        'neo_reference_id': obj.neo_reference_id,
        'relative_velocity_kmph':obj.close_approach_data[0].relative_velocity
          .kilometers_per_hour,
        'estimated_diameter_max': obj.estimated_diameter.kilometers.estimated_diameter_max,
        'is_potentially_hazardous_asteroid': obj.is_potentially_hazardous_asteroid,
        'miss_distance_kms': obj.close_approach_data[0].miss_distance.kilometers
      })
    });
    setAstData(newData);
      },[])
  function asteroidSort(field) {
    let dt = [...astData];
    dt.sort(function (a, b) {
      if (sortorder === "asc") {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });
    setSortOrder(sortorder === "asc" ? "desc" : "asc")
    setAstData(dt);
  }
  return (
    <div>
      <table className="table table-striped border">
        <thead>
          <tr>
            <th scope="col" onClick={()=>asteroidSort('neo_reference_id')}>Neo Reference Id</th>
            <th scope="col" onClick={()=>asteroidSort('relative_velocity_kmph')}>Relative velocity(kmph)</th>
            <th scope="col" onClick={()=>asteroidSort('miss_distance_kms')}>Earth miss distance(in kms)</th>
            <th scope="col" onClick={()=>asteroidSort('estimated_diameter_max')}>Estimated diameter</th>
            <th scope="col">Is potential hazardous</th>
          </tr>
        </thead>
        {
          <tbody>
            {astData.map((ast) => {
              return (
                <tr key={ast.id}>
                  <td>{ast.neo_reference_id}</td>
                  <td>
                    {
                      ast.relative_velocity_kmph
                    }
                  </td>
                  <td>{ast.miss_distance_kms}</td>
                  <td>
                    {ast.estimated_diameter_max}
                  </td>
                  <td>
                    {ast.is_potentially_hazardous_asteroid ? "Yes" : "No"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        }
      </table>
    </div>
  );
};

export default Table;
