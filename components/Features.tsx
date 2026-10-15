import styles from './Features.module.css';

const featuresData = [
  {
    id: 1,
    title: 'Premium Food',
    description: 'Healthy and delicious meals for your furry friends.',
  },
  {
    id: 2,
    title: 'Grooming',
    description: 'Professional care to keep your pet looking their best.',
  },
  {
    id: 3,
    title: 'Vet Care',
    description: 'Compassionate veterinary services for your pet.',
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.header}>
        <h2>What We Offer</h2>
        <p>Everything your pet needs under one roof</p>
      </div>

      <div className={styles.grid}>
        {featuresData.map((feature) => (
          <div key={feature.id} className={styles.card}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}