import styles from './down-arrow.module.css';

export const DownArrow = () => (
  <button className={styles.container}>
    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.74394 8.67028C8.5564 8.85782 8.30205 8.96317 8.03683 8.96317C7.77161 8.96317 7.51726 8.85782 7.32972 8.67028L0.366551 1.70711C-0.0239716 1.31658 -0.0239716 0.683417 0.366551 0.292892C0.757076 -0.0976318 1.39024 -0.0976316 1.78077 0.292893L8.03683 6.54896L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976312 15.7071 0.292893Z"
        fill="white"
      />
    </svg>
  </button>
);
