import MainNavbar from './DefaultNavbar';

function About() {
  return (
    <div>
      <MainNavbar />
      <div className="container position-relative" style={{ top: '5.5rem' }}>
        <h1>About Page</h1>
      </div>
    </div>
  );
}

export default About;
