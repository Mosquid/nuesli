import React, { useEffect, useState } from "react";
import sad from "./sad-fail.mp3";
import happy from "./happy-fail.mp3";

export const library = [
  {
    title: "Sad failure",
    file: sad,
  },
  {
    title: "Happy failure",
    file: happy,
  },
];

const Sounds = ({ onSelect }) => {
  const [active, setActive] = useState(undefined);

  useEffect(() => {
    active !== undefined && onSelect(active);
  }, [active, onSelect]);

  return (
    <div className="sounds">
      {library.map((sound, index) => (
        <div
          onClick={() => setActive(index)}
          key={index}
          style={{
            cursor: "pointer",
            display: "flex",
            padding: 10,
            backgroundColor: active === index ? "#fff5f5" : null,
          }}
        >
          {sound.title}
          <audio controls src={sound.file} />
        </div>
      ))}
    </div>
  );
};

export default Sounds;
