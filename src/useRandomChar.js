import { useState, useEffect } from "react";

function useRandomChar(id) {
  const [char, setChar] = useState({});

  useEffect(() => {
    const fetchChar = async () =>
      await fetch(``)
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          setChar(data);
        });
    fetchChar();
  }, [id]);

  return char;
}

export default useRandomChar;
