import styles from '@/_styles/not-found.module.css';
import PrimaryButton from '@/components/PrimaryButton';
import Container from '@/components/Container';
import PrimarySection from '@/components/PrimarySection';

export default function PageNotFound() {
  return (
    <PrimarySection py="75px">
      <Container>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>404 Error!</h1>
          <h2 className={styles.subtitle}>
            Sorry, but the page you're looking for doesn't exist.
          </h2>
          <PrimaryButton href="/">Back To Home</PrimaryButton>
        </div>
      </Container>
    </PrimarySection>
  );
}
