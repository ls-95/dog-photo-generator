import { useEffect, useState } from "react";
import "./DogPhoto.css";

function DogPhoto() {
  const [photo, setPhoto] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setPhoto(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showNextPhoto = () => {
    fetchData();
  };

  if (!photo) {
    return <p>Loading a good boy... 🐕</p>;
  }
  return (
    <div className="dog-image-container">
      <h1>Looking for a way to brighten your day?</h1>
      <h2>Dog photos might be the answer:</h2>
      <img src={photo.message} alt="A random photo of a dog" />
      <div className="btn-next-container">
        <button onClick={showNextPhoto}>Next Photo</button>
      </div>
    </div>
  );
}

export default DogPhoto;
