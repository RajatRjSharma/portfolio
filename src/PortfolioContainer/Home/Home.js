import React, { lazy, Suspense, useState } from "react";
import Profile from "../Profile/Profile";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import Resume from "../Resume/Resume";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import portfolio from "../../assets/profile/portfolio.js";

const ContactMe = lazy(() => import("../ContactMe/ContactMe"));

const emailConfig = {
  serviceId: process.env.REACT_APP_SERVICE_ID,
  templateId: process.env.REACT_APP_TEMPLATE_ID,
  publickey: process.env.REACT_APP_PUBLIC_KEY,
};

export default function Home() {
  const [resumeTab, setResumeTab] = useState("work-history");

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Profile profile={portfolio.profile} />
        <FeaturedProjects projects={portfolio.resume.projects} />
        <Resume
          resume={portfolio.resume}
          activeTab={resumeTab}
          onTabChange={setResumeTab}
        />
        <div id="contact-form">
          <Suspense
            fallback={
              <div className="contactme-container" aria-hidden="true" />
            }
          >
            <ContactMe
              emailConfig={emailConfig}
              toastConfig={portfolio.toastConfig}
              clockLoaderConfig={portfolio.clockLoaderConfig}
            />
          </Suspense>
        </div>
      </main>
      <Footer links={portfolio.profile.links} />
    </>
  );
}
