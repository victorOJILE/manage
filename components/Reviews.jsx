import { useState, useRef } from "react";

export default function Reviews() {
  const carousel = useRef(null);
  const [reviews, setReviews] = useState([
    {
      user: "Anisha Li",
      photoUrl: "avatar-anisha.png",
      comment: `Manage has supercharged our team’s workflow. The ability to maintain 
      visibility on larger milestones at all times keeps everyone motivated.`
    },
    {
      user: "Ali Bravo",
      photoUrl: "avatar-ali.png",
      comment: `We have been able to cancel so many other subscriptions since using 
      Manage. There is no more cross-channel confusion and everyone is much more focused.`
    },
    {
      user: "Richard Watts",
      photoUrl: "avatar-richard.png",
      comment: `Manage allows us to provide structure and process. It keeps us organized 
      and focused. I can’t stop recommending them to everyone I talk to!`
    },
    {
      user: "Shanai Gough",
      photoUrl: "avatar-shanai.png",
      comment: `Their software allows us to track, manage and collaborate on our projects 
      from anywhere. It keeps the whole team in-sync without being intrusive.`
    }
  ]);
  const [active, setActive] = useState(0);

  function updateDots(e) {
    if (e.target.dataset.dot) {
			let dot = e.target;
      setActive(Number(dot.dataset.dot));

      let image = carousel.current.children[Number(dot.dataset.dot)];
      carousel.current.scrollLeft = image.offsetLeft;
    }
  }

  return (
    <section>
      <h2 className="text-3xl xl:text-4xl text-center">
        <strong>What they’ve said</strong>
      </h2>
      <br />
      <br />
      <main>
        <ul className="carousel text-center pt-12 pb-4 px-8" ref={carousel} role="scrollbar">
          {
            reviews && reviews.length > 0 && (
              reviews.map((review, index) => (
                <li key={index} className="bg-lightPaleRed2 maxw-">
                  <img className="w-16 mx-auto transform -translate-y-1/2" src={review.photoUrl} alt={review.user} />
                  <div className="whitespace-normal">
                    <h3 className=""><strong>{review.user}</strong></h3>
                    <p className="py-6 text-sm text-gray-500">
                      <q>{review.comment}</q>
                    </p>
                  </div>
                </li>
              ))
            )
          }
        </ul>
        <div
          className="carousel_dots pt-3 lg:hidden"
          onClick={updateDots}
        >
          {reviews && reviews.length > 0 && reviews.map((dot, index) => (
            <div
              key={index}
              data-dot={index}
              className={ index == active ? "bg-orange-700" : "" }
            ></div>
          ))}
        </div>
        <br />
        <div className="text-center">
          <a href="#" className="red-btn red-btn-shadow">Get Started</a>
        </div>
        <br />
        <br />
        <br />
        <br />
      </main>
    </section>
  );
}