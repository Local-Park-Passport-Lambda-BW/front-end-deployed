import React from "react";
import { Input } from 'reactstrap'

export default function SearchForm({ handleChange }) {

  return (
    <section className="search-form">
      <Input
        className="navSearch"
        type="search"
        name="search"
        placeholder="Find a park..."
        onChange={handleChange}
      />
    </section>
  );
}