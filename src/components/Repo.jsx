import styles from "./Repo.module.css";
import nestingIcon from "../assets/Nesting.svg";
import starIcon from "../assets/Star.svg";

function Repo({ repo }) {
  if (!repo) {
    console.error("Repo: проп 'repo' не передан или undefined");
    return null;
  }
  const {
    name,
    description,
    stargazers_count,
    forks_count,
    updated_at,
    html_url,
  } = repo;
  const updatedLabel = updated_at
    ? new Date(updated_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";
  return (
    <li className={styles.wrapper}>
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.name}
      >
        {name}
      </a>
      {description && <div className={styles.description}>{description}</div>}
      <div className={styles.footer}>
        <div className={styles.stat}>
          <img src={nestingIcon} />
          <span className={styles.stat}>{forks_count}</span>
        </div>
        <div className={styles.stat}>
          <img src={starIcon} />
          <span>{stargazers_count}</span>
        </div>

        {updatedLabel && (
          <span className={styles.updated}>updated {updatedLabel}</span>
        )}
      </div>
    </li>
  );
}
export default Repo;
