import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials" id="testimonials">
      <img
        src={next_icon}
        alt=""
        className="next-btn "
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt=""
        className="back-btn "
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Shikha Singh Thakur</h3>
                  <span>EDUCITY University</span>
                </div>
              </div>
              <p>
                "The diversity of students and faculty creates an international
                environment that broadens your perspective beyond the
                classroom."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Sumit Wath</h3>
                  <span>EDUCITY University</span>
                </div>
              </div>
              <p>
                "I got placed with a top tech firm even before graduating. The
                placement team is outstanding and truly cares about student
                success."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Madhumita Sugandhi</h3>
                  <span>EDUCITY University</span>
                </div>
              </div>
              <p>
                "Joining [EDUCITY] was the best decision I made. The professors
                are knowledgeable, the campus is vibrant, and the peer community
                is very supportive."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Gokul Band</h3>
                  <span>EDUCITY University</span>
                </div>
              </div>
              <p>
                "As an international student, I felt welcomed and valued from
                day one. The cultural clubs and activities made me feel at
                home."
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
