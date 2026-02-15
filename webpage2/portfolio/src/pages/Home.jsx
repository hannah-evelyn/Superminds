import profilePic from "../assets/profile_pic.jpg"; // optional local image

function Home() {
  return (
    <div className="page home-page">
      <div className="hero">
        <img src={profilePic} alt="Profile" className="hero-img" />
        <div className="hero-text">
          <h1>Hi, I'm Hannah</h1>
          <p>Computer Science Student learning how to develope webpages using HTML/CSS and React.js</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
