import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
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

  const celebrate = () => {
    const emoji = confetti.shapeFromText({ text: "🐶", scalar: 3 });

    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.7 },
      shapes: [emoji],
      scalar: 3,
    });
  };

  const rainEffect = () => {
    const emoji = confetti.shapeFromText({ text: "😭", scalar: 5 });

    var duration = 10 * 1000;
    var animationEnd = Date.now() + duration;
    var skew = 1;

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    (function frame() {
      var timeLeft = animationEnd - Date.now();
      var ticks = Math.max(200, 500 * (timeLeft / duration));
      skew = Math.max(0.8, skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          y: Math.random() * skew - 0.2,
        },
        shapes: [emoji],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(4, 5),
        drift: randomInRange(-0.4, 0.4),
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    })();
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
      <hr />
      <div>
        <p>Did you like these photos?</p>
        <div>
          <button onClick={celebrate}>Yes!</button>
          <button onClick={rainEffect}>No..</button>
        </div>
      </div>
    </div>
  );
}

export default DogPhoto;
