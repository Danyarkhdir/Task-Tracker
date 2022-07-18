import { FcAbout } from "react-icons/fc";
const About = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          marginTop: "60px",
          color: "Black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FcAbout style={{ marginRight: "10px" }} />
        About Me
      </h2>
      <p style={{ textAlign: "center", marginTop: "30px" }}>
        I am a full stack web developer. I have a passion for creating websites.
        you can find me anywhere in the world.
      </p>
    </div>
  );
};

export default About;
