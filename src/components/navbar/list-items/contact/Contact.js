import React from "react";
import Layout from "../../../Layout";
import contactPic from "../../../../assets/image4.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <Layout>
      <section className="contact-us">
        <div className="container">
          <div className="left">
            <h1>CONTACT US</h1>
            <img src={contactPic} alt="flowers" className="image" />
          </div>

          <form id="brise-form" className="right">
            <h3>Make a Booking</h3>
            <div class="wrap-line">
              {/* Inputs */}
              <div class="brise-input">
                <input type="text" name="text" required />
                <label>Name</label>
                <span class="line"></span>
              </div>
              <div class="brise-input">
                <input type="email" name="text" required />
                <label>Email</label>
                <span class="line"></span>
              </div>
              <div class="brise-input">
                <input type="text" name="text" required />
                <label>Wedding Date</label>
                <span class="line"></span>
              </div>
              <div class="brise-input">
                <input type="text" name="text" required />
                <label>Wedding Address</label>
                <span class="line"></span>
              </div>
              {/* Inputs 	 */}
              {/* Textarea */}
              <div class="brise-text">
                <textarea
                  name="msg"
                  id=""
                  cols="25"
                  rows="5"
                  required
                ></textarea>
                <label>Tell us more</label>
              </div>
            </div>

            <button class="brise-btn">Submit</button>

            <div className="details">
              <div>
                <h3>Email</h3>
                <p>wedding_planner@gmail.com</p>
              </div>
              <div>
                <h3>Address</h3>
                <p>Gowon Estate, Egbeda, Lagos, Nigeria</p>
              </div>
              <div>
                <h3>Telephone</h3>
                <p>+234(0) 8059878452</p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
