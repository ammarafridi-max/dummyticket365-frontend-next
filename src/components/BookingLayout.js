import { usePathname } from 'next/navigation';
import styles from '@/_styles/booking-layout.module.css';
import Container from './Container';
import PrimarySection from './PrimarySection';

export default function BookingLayout({ children }) {
  return (
    <PrimarySection pt="20px" pb="50px">
      <Container>
        <Menu />
        <div className={styles.body}>{children}</div>
      </Container>
    </PrimarySection>
  );
}

function Menu() {
  const pathname = usePathname();

  return (
    <div className={styles.menuContainer}>
      <button
        className={`${styles.menuItem} ${pathname === '/booking/select-flights' ? styles.active : ''}`}
      >
        <p className={styles.step}>1</p>
        <p>Select Flights</p>
      </button>

      <button
        className={`${styles.menuItem} ${pathname === '/booking/review-details' ? styles.active : ''}`}
      >
        <p className={styles.step}>2</p>
        <p>Review Details</p>
      </button>

      <button className={styles.menuItem}>
        <p className={styles.step}>3</p>
        <p>Payment</p>
      </button>
    </div>
  );
}
