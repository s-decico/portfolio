import React, { useContext, useState } from "react";
import "../globals.scss";
import ContactContext from "@/contexts/ContactContext";
import toast, { Toaster } from "react-hot-toast";
import { emailTrigger } from "../Jobs/EmailTrigger";
import Image from "next/image";

const Contact = () => {
  const contactObj = useContext(ContactContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSocialClick = (id) => {
    if (id) {
      window.open(contactObj.socials[id].url, "_blank", "noopener noreferrer");
    }
  };

  const handleSend = () => {
    setLoading(true);
    if (!formData.name || !formData.email || !formData.description) {
      setLoading(false);
      toast.error("Please enter all the details");
    } else if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const validEmail = emailRegex.test(formData.email);
      if (!validEmail) {
        setLoading(false);
        toast.error("Please enter a valid email");
      } else {
        setLoading(true); // Set loading to true
        const messageData = {
          name: formData.name,
          email: formData.email,
          message: formData.description,
        };
        emailTrigger(messageData)
          .then((status) => {
            if (status) {
              toast.success("Your message is sent successfully");
            } else {
              console.error("Email send failed with response:", response);
              toast.error("Failed to send message. Please try again later");
            }
          })
          .catch((err) => {
            toast.error("Failed to send message. Please try again later");
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <div className="contact-container flex flex-col h-dvh bg-[#323232] text-white">
        <div className="contact-heading heading-font flex h-24 w-full text-5xl justify-center items-center pt-10">
          CONTACT ME
        </div>
        <div className=" contact-details w-full h-full overflow-hidden flex gap-10 justify-center items-center">
          <div className="contact-info w-1/2 h-full flex flex-col gap-6 justify-center items-end">
            <div className="contact-hero-text text-2xl font-thin">
              <span className="contact-hero-text-top text-[#6cb545] font-medium px-2">
                Lets connect!
              </span>
              <span className="contact-hero-text-bottom">
                Below are my handles
              </span>
            </div>
            <div className="direct-contacts flex gap-4">
              <a
                href="mailto:srkr.9298@gmail.com"
                className="flex gap-2 justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className=" email p-1 w-9 h-9 text-white rounded-full hover:scale-110 transition-all delay-50 origin-center ease-out hover:bg-[#6cb545]"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                <span>srkr.9298@gmail.com</span>
              </a>
              {/* <a href="mailto:srkr.9298@gmail.com">srkr.9298@gmail.com</a> */}
            </div>
            <div className="socials flex gap-2">
              <button
                type="button"
                className="w-10 h-10 rounded-full hover:scale-110 transition-all delay-50 origin-center ease-out hover:bg-[#6cb545]"
                id="github"
                onClick={() => {
                  handleSocialClick("github");
                }}
              >
                <span className=" github relative z-10 h-full w-full flex justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    className="svg-icons w-6"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </span>
              </button>

              <button
                type="button"
                className=" w-10 h-10 flex justify-center items-center rounded-full hover:scale-110 transition-all delay-50 origin-center ease-out hover:bg-[#6cb545]"
                id="linkedin"
                onClick={() => {
                  handleSocialClick("linkedin");
                }}
              >
                <span className="relative z-10 ">
                  <svg
                    className=" linkedin svg-icons w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </button>

              <button
                className=" w-10 h-10 flex justify-center items-center rounded-full hover:scale-110 transition-all delay-50 origin-center ease-out hover:bg-[#6cb545]"
                id="website"
                onClick={() => {
                  handleSocialClick("website");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="vertical-divider w-[1px] h-[80%] bg-zinc-100"></div>
          <form className="contact-form-container  w-1/2  flex flex-col gap-4 justify-center items-start">
            <div className="form-heading text-2xl font-thin pb-6">
              Or, Leave a message below
            </div>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input h-12 w-[70%] bg-transparent border-2 border-grey-500"
              placeholder="Name"
            />
            <input
              type="text"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input h-12 w-[70%] bg-transparent border-2 border-grey-500"
              placeholder="Email"
            />
            <textarea
              type="text"
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="form-input h-32 w-[70%] bg-transparent border-2 border-grey-500"
              placeholder="Description..."
            />
            <button
              type="button"
              className="button-submit block w-56 h-12 leading-10 cursor-pointer"
              onClick={handleSend}
              disabled={loading}
            >
              {loading ? (
                <span className="relative z-10 h-full flex justify-center items-center gap-2">
                  <Image
                    src="/circularLoader.svg"
                    width={120}
                    height={120}
                    alt="Loader.."
                  />
                </span>
              ) : (
                <span className="relative z-10 h-full flex justify-center items-center gap-2">
                  Send
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </span>
              )}
            </button>
          </form>
        </div>
        <div className=" footer w-full h-8 bg-[#6cb545] text-center items-center">
          Made by Syamantak Sarkar
        </div>
      </div>
      {error && <div>{error}</div>}
      <Toaster />
    </>
  );
};

export default Contact;
