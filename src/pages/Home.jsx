import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* landing */}
      <div
        style={{
          height: "100vh",
          backgroundImage: 'url("/landing.png")',
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div
          style={{ backgroundColor: "rgba(0,0,0,.4)" }}
          className="w-50 p-5 rounded text-center text-light"
        >
          <h1>
            Designed To Get Hired. Your Skills, Your Story, Your Next Job -All
            In One.
          </h1>
          <Link
            to={"/resume"}
            style={{ backgroundColor: "#755846" }}
            className="btn text-light mt-3"
          >
            Make Your Resume With AI
          </Link>
        </div>
      </div>
      {/* about */}
      <div className="container my-5">
        <h1 className="text-center mb-5">What's AI rBuilder</h1>
        <div className="row align-items-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <p style={{ textAlign: "justify" }}>
              An AI rBuilder is a web application that helps users create
              professional resumes quickly and efficiently using artificial
              intelligence. Traditional resume creation can be time-consuming
              and difficult, especially for freshers who may not know the
              correct format or keywords required for modern recruitment
              systems.
            </p>

            <p style={{ textAlign: "justify" }}>
              The system can suggest job-specific keywords, professional
              summaries, and skill recommendations to make the resume more
              effective and ATS (Applicant Tracking System) friendly.
            </p>

            <p style={{ textAlign: "justify" }}>
              The main goal of the AI rBuilder is to simplify the resume
              creation process and help job seekers build professional,
              well-structured resumes in a few minutes. Users can edit content,
              preview their resume, and download it in formats such as PDF.
            </p>

            <p style={{ textAlign: "justify" }}>
              This type of system is especially useful for students & fresh
              graduates, who want to create high-quality resumes that increase
              their chances of getting shortlisted for job interviews.
            </p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <img
              width={"100%"}
              height={"550px"}
              src="/resume.png"
              alt="resume"
            />
          </div>
        </div>
      </div>
      {/* banner */}
      <div style={{
          height: "80vh",
          backgroundImage: 'url("/meeting.jpg")',
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}></div>
      {/* testimony */}
       <div className="container my-5">
        <h1 className="text-center mb-5">Testimony</h1>
        <div className="row align-items-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h5>Trusted by proffessionals world wide</h5>
            <p style={{ textAlign: "justify" }}>
              At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
            </p>

            <p style={{ textAlign: "justify" }}>
              In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
            </p>

            <p style={{ textAlign: "justify" }}>
              Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out
            </p>

          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="row ">
              <div className="col-md-3">
                <img className="img-fluid p-2" src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=996" alt="user" />
              </div>
              <div className="col-md-3">
                <img className="img-fluid p-2" src="https://wallpapers.com/images/hd/artistic-profile-picture-png-77-zmjtx1yi8ropv7hz.jpg" alt="user" />
              </div>
              <div className="col-md-3">
                <img className="img-fluid p-2" src="https://d22e6o9mp4t2lx.cloudfront.net/cms/Screenshot_2024_04_05_130256_473f8428ec.png" alt="user" />
              </div>
              <div className="col-md-3">
                <img className="img-fluid p-2" src="https://imgcdn.stablediffusionweb.com/2024/6/14/e97975bb-e925-426d-be79-fb225e8289fc.jpg" alt="user" />
              </div>
              <div className="col-md-3">
                <img className="img-fluid p-2" src="https://imgcdn.stablediffusionweb.com/2024/10/10/dfbf7741-3f6f-478d-b658-f7454c72f33a.jpg" alt="user" />
              </div>
              <div className="col-md-3">
                <img className="img-fluid p-2" src="https://img.freepik.com/premium-photo/design-professional-profile-picture-with-sharp-focus-natural-lighting-clean-neutral-background_880763-20280.jpg?w=1060" alt="user" />
              </div>
              <div className="col-md-3">
                <img className="img-fluid p-2" src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg" alt="user" />
              </div>
              <div className="col-md-3">
                <img className="img-fluid p-2" src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?cs=srgb&dl=pexels-olly-3763188.jpg&fm=jpg" alt="user" />
              </div>
              <div className="col-md-3">
                <img className="img-fluid p-2" src="https://cdn.syncfusion.com/blazor/images/image-editor/profile.png" alt="user" />
              </div>
              <div className="col-md-3">
                <img className="img-fluid p-2" src="https://imgcdn.stablediffusionweb.com/2024/5/4/83f8e638-f1c8-4473-a7e0-a6cf7783254b.jpg" alt="user" />
              </div>
              <div className="col-md-3">
                <img className="img-fluid p-2" src="https://img.freepik.com/premium-photo/beautiful-woman-profile-picture_1013690-85.jpg?w=2000" alt="user" />
              </div>
              <div className="col-md-3">
                <img className="img-fluid p-2" src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="user" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
