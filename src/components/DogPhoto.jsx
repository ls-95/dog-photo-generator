import { useState } from "react";
import "./DogPhoto.css";

function DogPhoto() {
  const [photo, setPhoto] = useState();
  const fetchData = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setPhoto(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  return (
    <>
      <h2>
        Looking for a way to brighten your day? Dog photos might be the answer.
      </h2>
    </>
  );
}

export default DogPhoto;
