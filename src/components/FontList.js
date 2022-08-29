import React from "react";
import { useEffect, useState } from "react";
import FontCard from "./FontCard";
import { Input } from '@chakra-ui/react';
import FontCategorySelect from "./FontCategorySelect";

function FontList({ user }) {
  const [fonts, setFonts] = useState([]);
  const [filteredFonts, setFilteredFonts] = useState(fonts || []);
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  // const [selectedFont, setSelectedFont] = useState(null);

  const [reload, setReload] = useState(false);
  const categories = [
    "Serif",
    "Sans-serif",
    "Display",
    "Handwritten",
    "Monospace",
  ];

  useEffect(() => {
    fetch("/fonts")
      .then((r) => r.json())
      .then(setFonts)
      .then(() => {
        setReload(false);
      });
  }, [reload, setReload]);

  useEffect(() => {
    let filterResults = fonts;

    if (selectedCategories.length) {
      filterResults = filterResults.filter((font) =>
        selectedCategories.includes(font.category)
      );
    }
    if (search) {
      filterResults = fonts.filter((font) =>
        font.family.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredFonts(filterResults);
  }, [fonts, search, selectedCategories, setFilteredFonts]);

  return (
    <div>
      {/* FontList */}
      {/* Search Bar */}
      <Input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FontCategorySelect options={categories} label="Categories" onChange={setSelectedCategories} />

      <div className="row">
        {/* Filtered */}
        {filteredFonts.map((font, i) => (
          <div className="col-md-4 font-card" key={font.id}>
            <FontCard font={font} />
          </div>
        ))}
      </div>
      {/* <div className="row">
        No Filters
        {fonts.map((font, i) => (
          <div className="col-md-4">
            {JSON.stringify(font)}
            <FontCard font={font} key={font.id} />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default FontList;

