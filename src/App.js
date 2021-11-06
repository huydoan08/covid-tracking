import React from "react";
import Countries from "./countries/countries";
import { useState, useEffect } from "react";
import Services from "./services/sevices";
import HightLight from "./highlight/hightlight";
function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedIdCountryId] = useState("");
  const [report, setReport] = useState([]);
  useEffect(() => {
    async function getCountries() {
      const { data } = await Services.get();
      setCountries(data);
      setSelectedIdCountryId("VN");
    }
    getCountries();
  }, []);

  function handleOnChange(e) {
    setSelectedIdCountryId(e.target.value);
  }

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(({ ISO2 }) => ISO2 === selectedCountryId);
      async function getId() {
        const { data } = await Services.getId(Slug);
        setReport(data);
      }
      getId();
    }
  }, [countries, selectedCountryId]);

  return (
    <div>
      <Countries
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectedCountryId}
      />
      <HightLight report={report} />
    </div>
  );
}

export default App;
