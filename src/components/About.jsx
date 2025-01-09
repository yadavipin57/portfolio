const About = () => {
  return (
    <div className="p-10 mt-10 text-white bg-[#303030] ">
      <div id="about">
        <h2 className="text-[#E1451D] text-3xl font-bold underline">About</h2>
      </div>
      <div>
        <div className="p-10 pb-0">
          <p className="text-lg">
            Hello! 👋 I&apos;m Vipin, a passionate Frontend Developer with
            expertise in building engaging and responsive user interfaces. With
            a solid foundation in technologies like HTML5, CSS3, JavaScript,
            React.js, Redux, Tailwind CSS, Bootstrap, and more, I specialize in
            transforming ideas into functional and visually appealing web
            applications.
          </p>
        </div>
        <div className="p-10 pb-0">
          <h3 className="text-xl font-bold">Who am I?</h3>
          <p className="text-lg">
            <ul className="list-disc">
              <li>
                I&apos;m someone who thrives in learning new things on the go,
                adapting quickly to new tools, technologies, and frameworks to
                solve real-world problems.
              </li>
              <li>
                Over time, I&apos;ve worked on several projects, each helping me
                hone my technical and problem-solving skills.
              </li>
              <li>
                From small personal projects to larger collaborative
                applications, I bring a detail-oriented and efficient approach
                to every task.
              </li>
            </ul>
          </p>
        </div>
        <div className="p-10 pb-0">
          <h3 className="text-xl font-bold">Skills & Expertise:</h3>
          <p className="text-lg">
            <ul className="list-disc">
              <li>
                Frontend Technologies: HTML5, CSS3, JavaScript, React.js, Redux
              </li>
              <li>Styling Frameworks: Tailwind CSS, Bootstrap</li>
              <li>Database: MySQL, Firebase Firestore</li>
              <li>State Management: Redux, Context API</li>
              <li>Version Control: Git, GitHub</li>
              <li>Tools: Firebase, NPM</li>
              <li>Workflow: Agile development, collaboration tools like GitHub</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;