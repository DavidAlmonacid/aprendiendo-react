import { TwitterFollowCard } from "./components/TwitterFollowCard";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <TwitterFollowCard userName="DavidAlmonacid" initialFollowing>
        David Almonacid
      </TwitterFollowCard>

      <TwitterFollowCard userName="MoureDev" initialFollowing={false}>
        Brais Moure
      </TwitterFollowCard>

      <TwitterFollowCard userName="freeCodeCamp" initialFollowing={false}>
        freeCodeCamp.org
      </TwitterFollowCard>
    </div>
  );
};

export default App;
