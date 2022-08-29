import { useEffect, useState } from "react";

function FontCard(props) {
  const [font, setFont] = useState({});

  useEffect(() => {
    setFont(props.font);
  }, [props.font]);

  return (
    <div className="card">
      {/* FontCard */}
      <div className="card-header" style={{ fontWeight: 400, fontFamily: "Inter" }}>
        {font.family}
      </div>
      <div className="card-body" style={{ fontFamily: `"${font.family}"` }}>
        {font.family}
      </div>
    </div>
  );
}

export default FontCard;
