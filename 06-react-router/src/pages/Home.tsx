import { Link } from '../components/Link';

const Home = () => {
  return (
    <>
      <h1>Home</h1>

      <p>This is the home page.</p>

      <Link to='/about'>Go to about page</Link>
    </>
  );
};

export default Home;
