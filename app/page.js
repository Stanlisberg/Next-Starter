import styles from './styles/page.module.css'
import Link from 'next/link';
import Course from '@/components/Course';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-content'>
        <h2>LIST OF COURSES</h2 >
        <Course />
        <Link href='/ninja' className={styles.link}><div className={styles.button}>See Listing</div></Link>
      </div>
    </div>
  )
}

export default Home;
