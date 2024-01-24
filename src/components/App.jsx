import { useEffect, useState } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';

export function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = window.localStorage.getItem('saved-reviews');

    if (savedReviews) {
      return JSON.parse(savedReviews);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-reviews', JSON.stringify(reviews));
  }, [reviews]);

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;

  const reviewsRating = Math.round(((reviews.good + reviews.neutral) / totalFeedback) * 100);

  const updateGood = () => {
    setReviews({
      good: reviews.good + 1,
      neutral: reviews.neutral,
      bad: reviews.bad,
    });
  };

  const updateNeutral = () => {
    setReviews({
      good: reviews.good,
      neutral: reviews.neutral + 1,
      bad: reviews.bad,
    });
  };

  const updateBad = () => {
    setReviews({
      good: reviews.good,
      neutral: reviews.neutral,
      bad: reviews.bad + 1,
    });
  };

  const resetReviews = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        updateGood={updateGood}
        updateNeutral={updateNeutral}
        updateBad={updateBad}
        totalFeedback={totalFeedback}
        resetReviews={resetReviews}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
          total={totalFeedback}
          rating={reviewsRating}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
