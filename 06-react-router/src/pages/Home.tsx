import { navigate } from '../utils';

const Home = () => {
  return (
    <>
      <h1>Home</h1>

      <p>This is the home page.</p>

      <button onClick={() => navigate('/about')}>Go to about page</button>
    </>
  );
};

export default Home;
