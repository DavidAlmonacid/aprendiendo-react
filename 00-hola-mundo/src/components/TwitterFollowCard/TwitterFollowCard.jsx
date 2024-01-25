import { useState } from "react";
import "./TwitterFollowCard.css";

const TwitterFollowCard = ({ children, userName, initialFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialFollowing);
  const buttonText = isFollowing ? "Following" : "Follow";
  const formattedUserName = `@${userName}`;

  return (
    <article>
      <section>
        <img src={`https://unavatar.io/${userName}`} alt="cat" />

        <div>
          <h3>{children}</h3>
          <span>{formattedUserName}</span>
        </div>
      </section>

      <aside>
        <button
          type="button"
          className={isFollowing ? "is-following" : null}
          onClick={() => setIsFollowing(!isFollowing)}
        >
          <span>{buttonText}</span>
          {isFollowing && <span hidden>Stop following</span>}
        </button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
