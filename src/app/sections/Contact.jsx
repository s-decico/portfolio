import React, { useContext, useState } from "react";
import "../globals.scss";
import ContactContext from "@/contexts/ContactContext";
import toast, { Toaster } from "react-hot-toast";
import { emailTrigger } from "../Jobs/EmailTrigger";
import Image from "next/image";
import { motion } from "framer-motion";
import { CONTACT_PAGE } from "@/constants";

const Contact = () => {
  const contactObj = useContext(ContactContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSocialClick = (id) => {
    if (id && contactObj?.socials?.[id]) {
      window.open(contactObj.socials[id].url, "_blank", "noopener noreferrer");
    }
  };

  const handleSend = () => {
    if (!formData.name || !formData.email || !formData.description) {
      toast.error(CONTACT_PAGE.FORM.ERROR_MISSING_DETAILS);
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(CONTACT_PAGE.FORM.ERROR_INVALID_EMAIL);
      return;
    }

    setLoading(true);
    const messageData = {
      name: formData.name,
      email: formData.email,
      message: formData.description,
    };

    emailTrigger(messageData)
      .then((status) => {
        if (status) {
          toast.success(CONTACT_PAGE.FORM.SUCCESS_MESSAGE);
          setFormData({ name: "", email: "", description: "" });
        } else {
          toast.error(CONTACT_PAGE.FORM.ERROR_SENDING);
        }
      })
      .catch(() => toast.error(CONTACT_PAGE.FORM.ERROR_GENERAL))
      .finally(() => setLoading(false));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className="relative w-full h-[100dvh] pt-12 md:pt-16 pb-4 px-6 overflow-hidden flex flex-col items-center">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6cb545] opacity-5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6cb545] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <h2 className="heading-font text-4xl md:text-6xl text-center">
          {CONTACT_PAGE.HEADING}
        </h2>
        <div className="w-16 md:w-24 h-1 bg-[#6cb545] mt-2 md:mt-4 rounded-full" />
      </motion.div>

      <div className="flex-grow w-full flex flex-col justify-center items-center py-8">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 md:gap-8"
        >
          <div className="space-y-2 md:space-y-4">
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              {CONTACT_PAGE.SUBHEADING_1}<span className="text-[#6cb545]">{CONTACT_PAGE.SUBHEADING_HIGHLIGHT}</span>{CONTACT_PAGE.SUBHEADING_2}
            </h3>
            <p className="text-white/60 text-sm md:text-lg leading-relaxed max-w-md">
              {CONTACT_PAGE.DESCRIPTION}
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            <a 
              href="mailto:srkr.9298@gmail.com" 
              className="flex items-center gap-3 md:gap-4 group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 glass-morphism flex items-center justify-center group-hover:bg-[#6cb545] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 text-[#6cb545] group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-base md:text-xl text-white/80 group-hover:text-[#6cb545] transition-colors break-all">srkr.9298@gmail.com</span>
            </a>

            <div className="flex gap-4">
              {['github', 'linkedin', 'website'].map((platform) => {
                const url = contactObj?.socials?.[platform]?.url || "#";
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 glass-morphism flex items-center justify-center hover:bg-[#6cb545] group transition-all duration-300"
                  >
                    <SocialIconComponent platform={platform} className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-morphism p-5 md:p-8 border-white/10"
        >
          <form className="flex flex-col gap-3 md:gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1 md:gap-2">
              <label htmlFor="name" className="text-xs md:text-sm font-medium text-white/50 uppercase tracking-widest pl-1">{CONTACT_PAGE.FORM.NAME_LABEL}</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 md:py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#6cb545] transition-colors text-sm md:text-base"
                placeholder={CONTACT_PAGE.FORM.NAME_PLACEHOLDER}
              />
            </div>
            
            <div className="flex flex-col gap-1 md:gap-2">
              <label htmlFor="email" className="text-xs md:text-sm font-medium text-white/50 uppercase tracking-widest pl-1">{CONTACT_PAGE.FORM.EMAIL_LABEL}</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 md:py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#6cb545] transition-colors text-sm md:text-base"
                placeholder={CONTACT_PAGE.FORM.EMAIL_PLACEHOLDER}
              />
            </div>

            <div className="flex flex-col gap-1 md:gap-2">
              <label htmlFor="description" className="text-xs md:text-sm font-medium text-white/50 uppercase tracking-widest pl-1">{CONTACT_PAGE.FORM.MESSAGE_LABEL}</label>
              <textarea
                id="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 md:py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#6cb545] transition-colors resize-none text-sm md:text-base"
                placeholder={CONTACT_PAGE.FORM.MESSAGE_PLACEHOLDER}
              />
            </div>

            <button
              onClick={handleSend}
              disabled={loading}
              className="button-submit w-full py-3 md:py-4 text-sm md:text-lg mt-1 md:mt-2 flex justify-center items-center gap-2 md:gap-3 disabled:opacity-50"
            >
              {loading ? CONTACT_PAGE.FORM.SUBMITTING_BUTTON : (
                <>
                  {CONTACT_PAGE.FORM.SUBMIT_BUTTON}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </motion.div>
        </div>
      </div>

      <footer className="text-white/30 text-[10px] md:text-sm font-light">
        &copy; {new Date().getFullYear()} {CONTACT_PAGE.FOOTER}
      </footer>
    </section>
  );
};

export default Contact;

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

const WebsiteIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
);

const SocialIconComponent = ({ platform, className }) => {
  switch (platform) {
    case 'github': return <GithubIcon className={className} />;
    case 'linkedin': return <LinkedinIcon className={className} />;
    case 'website': return <WebsiteIcon className={className} />;
    default: return null;
  }
};
