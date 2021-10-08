import React from "react";
import Slider from "react-slick";
import TestimonialLayout from "./TestimonialLayout";
import testimonialOne from "../../assets/testimonial-one.jpg";
import testimonialTwo from "../../assets/testimonial-two.jpg";
import testimonialThree from "../../assets/testimonial-three.jpg";
import testimonialFour from "../../assets/testimonial-four.jpg";

const PrevArrow = (props) => {
  const { onClick, className } = props;

  return (
    <div className={className}>
      <i
        className="im im-angle-left-circle"
        onClick={onClick}
        style={{ color: "rgba(0, 0, 0, 0.35)" }}
      ></i>
      ;
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick, className } = props;

  return (
    <div className={className}>
      <i
        className="im im-angle-right-circle"
        onClick={onClick}
        style={{ color: "rgb(0, 0, 0)" }}
      ></i>
      ;
    </div>
  );
};

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="testimonials">
      <h2>What Our Clients Are Saying</h2>

      <Slider {...settings}>
        <div>
          <TestimonialLayout
            src={testimonialOne}
            testimonial="I will just say 'this event planner has come again, with Omooba we need to do this or that'. Kaiiiii!!!!!, But mhen, it was all worth it cos if you were not thinking for me, I wouldn't have thought about everything.
            Even the vendors were on their feet😂😂, Jmax ran into the hotel by 6:01am saying ahhh Jolade has called me, hope I am not late. 
            Thank you so much for being there, it was like I had a sister with me and not like a job.
            I appreciate your work babe😍"
            coupleName="#olawinnie2020"
          />
        </div>

        <div>
          <TestimonialLayout
            src={testimonialTwo}
            testimonial="Eyiladeola and the event.ly team are truly the best. I had initially wanted to have only a bride's assistant while I planned the wedding with my partner and family but after my first free consultation meeting with Eyiladeola as recommended by a colleague and after running it through my partner, we decided it would be best we went for the option of having a wedding planner and boy! I would like to say it was a great decision because it saved us a lot. 
            From the beginning to the end, I could not have asked for a more dedicated, attentive to details person who ensure the necessary things were put in place to make our events come out great.
            The details to the design and the execution of how everything turned out was beyond expectations. Not to mention gaining a friend through it all to make it even more special! I highly recommend Eyiladeola and her team for any events you want planned."
            coupleName="#TheTEAffair2020"
          />
        </div>
        <div>
          <TestimonialLayout
            src={testimonialThree}
            testimonial="I'm not one with many words and if you've met me, you'll know I don't like stress as I already have enough dose of that from my line of work
            Hence, I was really dreading planning for my wedding and really didn't know how I was gonna pull thru.
            Then came events.ly and wedding planning couldn't have been any easier. I pretty much did nothing but say what I wanted to see and they made it happen. I was one bride that really enjoyed her wedding ceremony as well as the planning process.
            Using events.ly to plan my wedding was the best decision ever and I'd gladly do it all over again.✌️✌️✌️
            
            Just contact them abt your wedding and you can go to sleep. Literally 😉😉😉😉"
            coupleName="#TAUNION"
          />
        </div>
        <div>
          <TestimonialLayout
            src={testimonialFour}
            testimonial="In one sentence : Above and beyond

            Events.ly service is on point. I got married in December 2020 and we engaged Events.ly to manage the White ceremony. Events.ly ensured all service providers prepared a schedule for we the couple and the service providers just to make our big day a ceremony to remember. They did more than what we engaged them to cover and coordinated even the vendors at the traditional wedding. 
            
            An amazing thing about Events.ly is the relationship .We were not just taken as customers,but over the planning period we became friends which is still mentioned till date.
            
            Till today our family and friends keep saying your wedding was lit. Best wedding of 2020. All these comments wouldn’t be said if not for the efficient coordination and management of Events.ly."
            coupleName="#FisAyo2020"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
