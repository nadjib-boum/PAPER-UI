import styles from './Home.module.scss';


function TextContent () {
  return (
    <ol>
      <li>Practice to feel comfortable and confident</li>
      <li>Understand the problem and the requirements</li>
      <li>Write clean code</li>
      <li>Test your code</li>
      <li>Communicate your thought process</li>
    </ol>
  );
}


export default function HomePage () {
  return (
    <div className={styles.home}>
      <h1>Hi Vercel</h1>
    </div>
  )
}
