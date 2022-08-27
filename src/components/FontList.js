import React from "react";
import { useEffect, useState } from "react";
import FontCard from "./FontCard";

function FontList({ user }) {
  const [fonts, setFonts] = useState([]);
  const [filteredFonts, setFilteredFonts] = useState(fonts || []);
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(["0"]);
  // const [selectedFont, setSelectedFont] = useState(null);

  const [reload, setReload] = useState(false);

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

    if (selectedCategories.length && !selectedCategories.includes("All")) {
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
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        multiple
        onChange={(e) => setSelectedCategories([...e.target.selectedOptions].map(e => e.value))}
      >
        <option value="All">All</option>
        <option value="Serif">Serif</option>
        <option value="Sans Serif">Sans-serif</option>
        <option value="Display">Display</option>
        <option value="Handwritten">Handwritten</option>
        <option value="Monospace">Monospace</option>
      </select>

      <div className="row">
        {/* Filtered */}
        {filteredFonts.map((font, i) => (
          <div className="col-md-4">
            <FontCard font={font} key={font.id} />
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

