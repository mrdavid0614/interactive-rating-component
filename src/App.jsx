import { useState } from "react";
import RatingButton from "./components/RatingButton";
import StarIcon from "./assets/icon-star.svg";
import ThankYouImg from "./assets/illustration-thank-you.svg";

function App() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const ratings = {
    "1star": 1,
    "2star": 2,
    "3star": 3,
    "4star": 4,
    "5star": 5,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedRating) return;

    setWasSubmitted(true);
  };

  return (
    <main>
      <section className="card">
        {wasSubmitted ? (
          <section className="card__thanks">
            <img src={ThankYouImg} alt="Submitted" role="presentation" />
            <p className="selected-rating">
              You selected
              {` ${selectedRating} `}
              out of 5
            </p>
            <h1>Thank you!</h1>
            <p className="text-center">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </section>
        ) : (
          <>
            <img
              src={StarIcon}
              alt="star icon"
              className="icon"
              role="presentation"
            />

            <form onSubmit={handleSubmit}>
              <h1>How did we do?</h1>
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>

              <div className="card__rating-buttons">
                <RatingButton
                  text={ratings["1star"]}
                  isActive={selectedRating === ratings["1star"]}
                  onClick={() => setSelectedRating(ratings["1star"])}
                />
                <RatingButton
                  text={ratings["2star"]}
                  isActive={selectedRating === ratings["2star"]}
                  onClick={() => setSelectedRating(ratings["2star"])}
                />
                <RatingButton
                  text={ratings["3star"]}
                  isActive={selectedRating === ratings["3star"]}
                  onClick={() => setSelectedRating(ratings["3star"])}
                />
                <RatingButton
                  text={ratings["4star"]}
                  isActive={selectedRating === ratings["4star"]}
                  onClick={() => setSelectedRating(ratings["4star"])}
                />
                <RatingButton
                  text={ratings["5star"]}
                  isActive={selectedRating === ratings["5star"]}
                  onClick={() => setSelectedRating(ratings["5star"])}
                />
              </div>

              <button type="submit" className="card__btn">
                Submit
              </button>
            </form>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
