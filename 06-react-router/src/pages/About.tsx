import { navigate } from '../utils';

const About = () => {
  return (
    <>
      <h1>About</h1>

      <p>This is the about page.</p>

      <button onClick={() => navigate('/')}>Go to home page</button>
    </>
  );
};

export default About;
