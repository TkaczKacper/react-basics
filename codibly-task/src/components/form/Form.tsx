import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "../APIResponse/fetchSearch";
import Table from "../table/Table";
import './form.css';

const Form = () => {
  const [requestParam, setRequestParam] = useState({ 
    id: "",
    page: ""
  });
  const result = useQuery(["search", requestParam], fetchSearch);
  console.log(requestParam)
  const data = result?.data?.data ?? [];
  console.log(data)
  return (
    <>
      <div className="filter-params">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const object = { id: formData.get("filter")?.toString() ?? "", page: "" };
            setRequestParam(object);
          }}
          >
          <input
            id="filter"
            name="filter"
            type="number"
            placeholder="Filter item id..."
            />
          <button>Filter</button>
        </form>
      </div>
      <Table data_={data} />
    </>
  );
};

export default Form;
