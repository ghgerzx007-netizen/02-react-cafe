import CafeInfo from "../CafeInfo/CafeInfo";
import React from "react";
import styles from "./App.module.css";
import VoteOptions from "../VoteOptions/VoteOptions";
import type { VoteType, Votes } from "../../types/votes";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};
function App() {
  const [votes, setVotes] = React.useState<Votes>(initialVotes);

  function handleVote(voteType: VoteType) {
    setVotes((prevVotes: Votes) => ({
      ...prevVotes,
      [voteType]: prevVotes[voteType] + 1,
    }));
  }
  function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const canReset = totalVotes > 0;
  const positiveRate =
    totalVotes > 0 ? Math.round((votes.good / totalVotes) * 100) : 0;
  return (
    <div className={styles.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={canReset}
      />
      {totalVotes > 0 && (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      )}
      {totalVotes === 0 && <Notification />}
    </div>
  );
}

export default App;
