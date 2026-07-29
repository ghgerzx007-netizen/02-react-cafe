import styles from "./VoteStats.module.css";


interface VoteStatsProps {
  Good: number;
  Neutral: number;
  Bad: number;
  Total: number;
  Positive: number;
}
function VoteStats(props: VoteStatsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{props.Good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{props.Neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{props.Bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{props.Total}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{props.Positive}%</strong>
      </p>
    </div>
  );
}

export default VoteStats;
