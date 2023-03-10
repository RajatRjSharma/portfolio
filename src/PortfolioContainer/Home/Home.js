import React, { Component } from "react";
import Profile from "./Profile/Profile";
import ProfileFooter from "./ProfileFooter/ProfileFooter";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";
import Resume from "../Resume/Resume";
import "./Home.css";

export default class Home extends Component {
  profile = {
    links: {
      github: "https://github.com/rajatrjsharma",
      linkedin: "https://www.linkedin.com/in/rajatrjsharma",
      instagram: "https://www.instagram.com/rj_rajatsharma/",
    },
    fullname: "Rajat Kumar Sharma",
    profileSkills: {
      skills: [
        "Software Developer",
        "Full Stack Developer",
        "Angular Dev",
        "Play Framework",
        "React Dev",
        "Spring Boot",
      ],
      skillTime: 1000,
    },
    profileTagline:
      "I develop applications with front and back end operations.",
  };

  resume = {
    workHistory: [
      {
        role: "Junior Research Engineer - Trainee",
        place: "Buddi.Ai, Chennai",
        startDate: "May 2021",
        endDate: "Present",
        description: [
          `Developed a candidate assessment platform enabling HR to
        hire potential candidates and save the company $3000+ in
        hiring expenses. (Full Time)`,
          `Developed three workflow systems to provide SMEs in the
        healthcare field with tools and platforms to do medical
        coding and annotation. (Internship & Full Time)`,
        ],
      },
      {
        role: "Data Analyst Intern",
        place: "Forsk Technology, Remote",
        startDate: "Aug 2020",
        endDate: "Oct 2020",
        description: [
          `Developed a dashboard for data visualization to get
          insights on Terrorism Activities and Call Data Records.
          (Internship)`,
        ],
      },
    ],
    education: [
      {
        institute: "Lovely Professional University",
        course: "BTech, CSE",
        startDate: "Jul 2018",
        endDate: "Jun 2022",
        description: [
          `CGPA: 7.88`,
          `Specialization in Machine Learning and Robotic Process
          Automation.`,
          `Member of Aashray, Student Organization In LPU, Social
          Services and Event Management.`,
        ],
      },
      {
        institute: "Green Field Sr Sec School",
        course: "10+2 PCM, CBSE",
        startDate: "Mar 2016",
        endDate: "Mar 2018",
        description: [
          `Percentage: 71.2%`,
          `Subjects studied are Maths, English, Physics, Chemistry,
          Physical education.`,
        ],
      },
      {
        institute: "Mount Carmel Sr Sec School",
        course: "Matric, ICSE",
        startDate: "Mar 2003",
        endDate: "Mar 2016",
        description: [
          `Percentage: 67%`,
          `Subjects studied are Maths, Geography, Social Studies,
          Physics, Chemistry, Biology, Hindi, English, and Computer.`,
        ],
      },
    ],
    programmingSkills: [
      {
        skill: "Angular",
        scale: "70",
      },
      {
        skill: "ReactJs",
        scale: "40",
      },
      {
        skill: "Play Framework",
        scale: "60",
      },
      {
        skill: "Type/Javascript",
        scale: "70",
      },
      {
        skill: "HTML & CSS",
        scale: "80",
      },
      {
        skill: "Rest APIs",
        scale: "60",
      },
      {
        skill: "SQL",
        scale: "50",
      },
      {
        skill: "C & C++",
        scale: "70",
      },
      {
        skill: "Java",
        scale: "60",
      },
      {
        skill: "Python",
        scale: "70",
      },
      {
        skill: "Scala",
        scale: "70",
      },
    ],
    projects: [
      {
        projectTitle: [
          {
            title: "Assessment Platform",
            subTitle: "Angular PlayFramework Scala",
            link: "",
          },
        ],
        startDate: "May 2022",
        endDate: "Nov 2022",
        description: [
          `A platform to evaluate candidates based on MCQ and
        Programming Tests.`,
          `Features a bank of questions, email notifications, and
        filtering of results.`,
        ],
      },
      {
        projectTitle: [
          {
            title: "Medical Annotation Platform",
            subTitle: "Angular PlayFramework Scala",
            link: "",
          },
        ],
        startDate: "Dec 2021",
        endDate: "May 2022",
        description: [
          `A platform with functionality to tag various medical terms
        in medical records.`,
          `Features a series of revisions to prevent the wrong
        tagging of terms.`,
          `Also supports a graphical level of tagging with relations
        between different terms.`,
        ],
      },
      {
        projectTitle: [
          {
            title: "Medical Coding Platform",
            subTitle: "Angular PlayFramework Scala",
            link: "",
          },
        ],
        startDate: "Jul 2021",
        endDate: "Dec 2022",
        description: [
          `A platform that provides informative visualization of
        medical records.`,
          `Features a recommendation system based on rules to add
        terms.`,
          `Features a series of revisions to get the relevant codes
        for medical terms with explanations.`,
        ],
      },
      {
        projectTitle: [
          {
            title: "Insights on Call Data Records",
            subTitle: "Python",
            link: "https://drive.google.com/file/d/1fRdY_kmGRFuIvcEQje-5NagVqGVRixic/view?usp=share_link",
          },
          {
            title: "Insights on Terror Activities",
            subTitle: "Python",
            link: "https://drive.google.com/file/d/1FvSwfqpXQka9WfaHfnAdwWP9DXoOY8ss/view?usp=share_link",
          },
        ],
        startDate: "Aug 2020",
        endDate: "Oct 2020",
        description: [
          `Web-based application for graphical data visualization
          using Plotly and Dash on selecting different filters.`,
          `Used Pandas and NumPy for data preprocessing involving
          extraction of date time, emails, and conversion of values
          for readability.`,
        ],
      },
      {
        projectTitle: [
          {
            title: "Contact Manager",
            subTitle: "React JSONPlaceholder",
            link: "https://rajatrjsharma.github.io/cm/",
          },
        ],
        startDate: "April 2020",
        endDate: "May 2020",
        description: [
          `A platform that provides the contact list from dummy API
          JSONPlaceholder.`,
          `Features the addition, deletion and update to the
          contacts.`,
        ],
      },
    ],
  };

  emailConfig = {
    serviceId: "service_19mf5oh",
    templateId: "template_jnz08gs",
    publickey: "F5Jdb-gpz4oSnhLqi",
  };

  toastConfig = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    rtl: false,
    theme: "light",
  };

  clockLoaderConfig = {
    color: "#333333",
    loading: true,
    size: 50,
    ariaLabel: "Loading Spinner",
    dataTestid: "loader",
  };

  render() {
    return (
      <>
        <div className="home-container">
          <Profile profile={this.profile} />
          <ProfileFooter />
        </div>
        <Resume resume={this.resume} />
        <ContactMe
          emailConfig={this.emailConfig}
          toastConfig={this.toastConfig}
          clockLoaderConfig={this.clockLoaderConfig}
        />
        <Footer links={this.profile.links} />
      </>
    );
  }
}
