import React from "react";
import "./Resume.css";

export default function Resume() {
  function handleClick(value) {
    changeDisplay(value);
  }

  function changeDisplay(value) {
    let first = "work-history";
    let second = "education";
    let third = "programming-skills";
    let forth = "projects";
    switch (value) {
      case "education":
        first = "education";
        second = "work-history";
        break;
      case "programming-skills":
        first = "programming-skills";
        third = "work-history";
        break;
      case "projects":
        first = "projects";
        forth = "work-history";
        break;
    }
    document.getElementById(first).style.display = "block";
    document.getElementById(first + "-tile").classList.add("left-title-select");
    document.getElementById(second).style.display = "none";
    document
      .getElementById(second + "-tile")
      .classList.remove("left-title-select");
    document.getElementById(third).style.display = "none";
    document
      .getElementById(third + "-tile")
      .classList.remove("left-title-select");
    document.getElementById(forth).style.display = "none";
    document
      .getElementById(forth + "-tile")
      .classList.remove("left-title-select");
  }

  React.useEffect(() => {
    changeDisplay("education");
  });

  return (
    <div className="resume-container">
      <div className="resume-parent">
        <div className="title-text">
          <h1>Resume</h1>
          <span>My formal Bio Details</span>
          <div className="resume-parent-border">
            <span></span>
          </div>
        </div>
        <div className="resume-body">
          <div className="resume-body-left">
            <div
              className="left-title"
              onClick={() => handleClick("education")}
              id="education-tile"
            >
              <i className="fa fa-graduation-cap"></i>
              <span className="left-text">Eduction</span>
            </div>
            <div
              className="left-title"
              onClick={() => handleClick("work-history")}
              id="work-history-tile"
            >
              <i className="fa fa-history"></i>
              <span className="left-text">Work History</span>
            </div>
            <div
              className="left-title"
              onClick={() => handleClick("programming-skills")}
              id="programming-skills-tile"
            >
              <i className="fa fa-laptop"></i>
              <span className="left-text">Programming Skills</span>
            </div>
            <div
              className="left-title"
              onClick={() => handleClick("projects")}
              id="projects-tile"
            >
              <i className="fa fa-tasks"></i>
              <span className="left-text">Projects</span>
            </div>
          </div>
          <div className="resume-body-right">
            <div id="work-history">
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Junior Research Engineer - Trainee{" "}
                      <span className="left-text-sub">Buddi.Ai, Chennai</span>
                    </span>
                  </div>
                  <div className="right-title-2">May 2021 - Present</div>
                </div>
                <div className="right-desc">
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Developed a candidate assessment platform enabling HR to
                      hire potential candidates and save the company $3000+ in
                      hiring expenses. (Full Time)
                    </span>
                  </div>
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Developed two workflow systems to provide SMEs in the
                      healthcare field with tools and platforms to do medical
                      coding and annotation. (Internship & Full Time)
                    </span>
                  </div>
                </div>
              </div>
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Data Analyst Intern{" "}
                      <span className="left-text-sub">
                        Forsk Technology, Remote
                      </span>
                    </span>
                  </div>
                  <div className="right-title-2">Aug 2020 - Oct 2020</div>
                </div>
                <div className="right-desc">
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Developed a dashboard for data visualization to get
                      insights on Terrorism Activities and Call Data Records.
                      (Internship)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div id="education">
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Lovely Professional University{" "}
                      <span className="left-text-sub">BTech, CSE</span>
                    </span>
                  </div>
                  <div className="right-title-2">Jul 2018 - Jun 2022</div>
                </div>
                <div className="right-desc">
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">CGPA: 7.88</span>
                  </div>
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Specialization in Machine Learning and Robotic Process
                      Automation.
                    </span>
                  </div>
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Member of Aashray, Student Organization In LPU, Social
                      Services and Event Management.
                    </span>
                  </div>
                </div>
              </div>
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Green Field Sr Sec School{" "}
                      <span className="left-text-sub">10+2 PCM, CBSE</span>
                    </span>
                  </div>
                  <div className="right-title-2">Mar 2016 - Mar 2018</div>
                </div>
                <div className="right-desc">
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">Percentage: 71.2%</span>
                  </div>
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Subjects studied are Maths, English, Physics, Chemistry,
                      Physical education.
                    </span>
                  </div>
                </div>
              </div>
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Mount Carmel Sr Sec School{" "}
                      <span className="left-text-sub">Matric, ICSE</span>
                    </span>
                  </div>
                  <div className="right-title-2">Mar 2003 - Mar 2016</div>
                </div>
                <div className="right-desc">
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">Percentage: 67%</span>
                  </div>
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Subjects studied are Maths, Geography, Social Studies,
                      Physics, Chemistry, Biology, Hindi, English, and Computer.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div id="programming-skills">
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle skill"></i>
                    <span className="left-text">
                      Angular <span className="left-text-sub"></span>
                    </span>
                  </div>
                  <div className="right-title-2-level">
                    <span className="right-title-2-level-1 right-title-2-level-1-70"></span>
                  </div>
                </div>
              </div>
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle skill"></i>
                    <span className="left-text">
                      React <span className="left-text-sub"></span>
                    </span>
                  </div>
                  <div className="right-title-2-level">
                    <span className="right-title-2-level-1 right-title-2-level-1-40"></span>
                  </div>
                </div>
              </div>
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle skill"></i>
                    <span className="left-text">
                      Play Framework <span className="left-text-sub"></span>
                    </span>
                  </div>
                  <div className="right-title-2-level">
                    <span className="right-title-2-level-1 right-title-2-level-1-60"></span>
                  </div>
                </div>
              </div>
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle skill"></i>
                    <span className="left-text">
                      Type/Javascript <span className="left-text-sub"></span>
                    </span>
                  </div>
                  <div className="right-title-2-level">
                    <span className="right-title-2-level-1 right-title-2-level-1-70"></span>
                  </div>
                </div>
              </div>
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle skill"></i>
                    <span className="left-text">
                      HTML & CSS <span className="left-text-sub"></span>
                    </span>
                  </div>
                  <div className="right-title-2-level">
                    <span className="right-title-2-level-1 right-title-2-level-1-80"></span>
                  </div>
                </div>
              </div>
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle skill"></i>
                    <span className="left-text">
                      Rest APIs <span className="left-text-sub"></span>
                    </span>
                  </div>
                  <div className="right-title-2-level">
                    <span className="right-title-2-level-1 right-title-2-level-1-60"></span>
                  </div>
                </div>
              </div>
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle skill"></i>
                    <span className="left-text">
                      SQL <span className="left-text-sub"></span>
                    </span>
                  </div>
                  <div className="right-title-2-level">
                    <span className="right-title-2-level-1 right-title-2-level-1-50"></span>
                  </div>
                </div>
              </div>
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle skill"></i>
                    <span className="left-text">
                      C & C++ <span className="left-text-sub"></span>
                    </span>
                  </div>
                  <div className="right-title-2-level">
                    <span className="right-title-2-level-1 right-title-2-level-1-70"></span>
                  </div>
                </div>
              </div>
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle skill"></i>
                    <span className="left-text">
                      Java <span className="left-text-sub"></span>
                    </span>
                  </div>
                  <div className="right-title-2-level">
                    <span className="right-title-2-level-1 right-title-2-level-1-60"></span>
                  </div>
                </div>
              </div>
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle skill"></i>
                    <span className="left-text">
                      Python <span className="left-text-sub"></span>
                    </span>
                  </div>
                  <div className="right-title-2-level">
                    <span className="right-title-2-level-1 right-title-2-level-1-70"></span>
                  </div>
                </div>
              </div>
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle skill"></i>
                    <span className="left-text">
                      Scala <span className="left-text-sub"></span>
                    </span>
                  </div>
                  <div className="right-title-2-level">
                    <span className="right-title-2-level-1 right-title-2-level-1-70"></span>
                  </div>
                </div>
              </div>
            </div>
            <div id="projects">
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Assessment Platform{" "}
                      <span className="left-text-sub">
                        Angular PlayFramework Scala
                      </span>
                    </span>
                  </div>
                  <div className="right-title-2">May 2022 - Present</div>
                </div>
                <div className="right-desc">
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      A platform to evaluate candidates based on MCQ and
                      Programming Tests.
                    </span>
                  </div>
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Features a bank of questions, email notifications, and
                      filtering of results.
                    </span>
                  </div>
                </div>
              </div>
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Medical Annotation Platform{" "}
                      <span className="left-text-sub">
                        Angular PlayFramework Scala
                      </span>
                    </span>
                  </div>
                  <div className="right-title-2">Dec 2021 - May 2022</div>
                </div>
                <div className="right-desc">
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      A platform with functionality to tag various medical terms
                      in medical records.
                    </span>
                  </div>
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Features a series of revisions to prevent the wrong
                      tagging of terms.
                    </span>
                  </div>
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Also supports a graphical level of tagging with relations
                      between different terms.
                    </span>
                  </div>
                </div>
              </div>
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Medical Coding Platform{" "}
                      <span className="left-text-sub">
                        Angular PlayFramework Scala
                      </span>
                    </span>
                  </div>
                  <div className="right-title-2">Jul 2021 - Dec 2022</div>
                </div>
                <div className="right-desc">
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      A platform that provides informative visualization of
                      medical records.
                    </span>
                  </div>
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Features a recommendation system based on rules to add
                      terms.
                    </span>
                  </div>
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Features a series of revisions to get the relevant codes
                      for medical terms with explanations.
                    </span>
                  </div>
                </div>
              </div>
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      <a
                        href="https://drive.google.com/file/d/1fRdY_kmGRFuIvcEQje-5NagVqGVRixic/view?usp=share_link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Insights on Call Data Records
                      </a>{" "}
                      <span className="left-text-sub">Python</span>
                    </span>
                  </div>
                  <div className="right-title-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      <a
                        href="https://drive.google.com/file/d/1FvSwfqpXQka9WfaHfnAdwWP9DXoOY8ss/view?usp=share_link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Insights on Terror Activities
                      </a>{" "}
                      <span className="left-text-sub">Python</span>
                    </span>
                  </div>
                  <div className="right-title-2">Aug 2020 - Oct 2020</div>
                </div>
                <div className="right-desc">
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Web-based application for graphical data visualization
                      using Plotly and Dash on selecting different filters.
                    </span>
                  </div>
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Used Pandas and NumPy for data preprocessing involving
                      extraction of date time, emails, and conversion of values
                      for readability.
                    </span>
                  </div>
                </div>
              </div>
              <div className="right-object">
                <div className="right-title">
                  <div className="right-title-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      <a
                        href="https://rajatrjsharma.github.io/cm/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Contact Manager
                      </a>{" "}
                      <span className="left-text-sub">React</span>
                    </span>
                  </div>
                  <div className="right-title-2">April 2020 - May 2020</div>
                </div>
                <div className="right-desc">
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      A platform that provides the contact list from dummy API
                      JsonPlaceHolder.
                    </span>
                  </div>
                  <div className="right-desc-1">
                    <i className="fa fa-circle"></i>
                    <span className="left-text">
                      Features the addition, deletion and update to the
                      contacts.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
