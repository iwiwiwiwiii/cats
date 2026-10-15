import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Your Pets Best <br />
          Life Starts Here
        </h1>
        <p className={styles.description}>
          Are You Ready for a Pet Store That Understands Them?
          Imagine a place where your furry family members arent just customers,
          but honored guests. A place where every product and service is curated
          with your pets true happiness and well-being in mind.
        </p>
        <button className={styles.ctaButton}>Explore Now</button>
      </div>

      <div className={styles.imageWrapper}>
        <div className={styles.blob}></div>

        <Image
          src="/images/lapka2.png"
          alt="paw light"
          width={140}
          height={140}
          className={`${styles.paw} ${styles.pawLight}`}
        />

        <Image
          src="/images/lapka3.png"
          alt="paw dark"
          width={75}
          height={75}
          className={`${styles.paw} ${styles.pawTopRight}`}
        />

        <Image
          src="/images/lapka3.png"
          alt="paw dark"
          width={65}
          height={65}
          className={`${styles.paw} ${styles.pawMiddleRight}`}
        />

        <Image
          src="/images/lapka3.png"
          alt="paw dark"
          width={70}
          height={70}
          className={`${styles.paw} ${styles.pawMiddleLeft}`}
        />

        <Image
          src="/images/lapka3.png"
          alt="paw dark"
          width={65}
          height={65}
          className={`${styles.paw} ${styles.pawBottomLeft}`}
        />

        <Image
          src="/images/cat.png"
          alt="Cute cat with paws up"
          fill
          priority
          className={styles.catImage}
        />
      </div>
    </section>
  );
}