import { React, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactMe.css";
import { ClockLoader } from "react-spinners";

export default function ContactMe() {
  const form = useRef();
  let [loading, setLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_19mf5oh",
        "template_jnz08gs",
        form.current,
        "F5Jdb-gpz4oSnhLqi"
      )
      .then(
        (result) => {
          setLoading(false);
          if (result.text === "OK") {
            toast.success("Message submited successfully");
          } else {
            toast.success(result.text);
          }
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
          toast.error("Fail to submit message, Please try after sometime.!");
        }
      );
    e.target.reset();
  }
  return (
    <div id="contact-form" className="contactme-container">
      <div className="contactme-parent">
        <div className="title-text">
          <h1>Contact Me</h1>
          <span>Lets Keep in Touch</span>
          <div className="contactme-parent-border">
            <span></span>
          </div>
        </div>
        <div className="contactme-body">
          <h1>
            <span>Get</span> In Touch
          </h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control no-border"
                id="name"
                name="user_name"
                placeholder="Enter name..."
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control no-border"
                id="email"
                name="user_email"
                placeholder="Enter email..."
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                className="form-control no-border"
                id="message"
                name="user_message"
                placeholder="Enter your message..."
                required
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn primary-btn center">
              {""}
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {loading ? (
        <div className="loader">
          <ClockLoader
            color={"#333333"}
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
