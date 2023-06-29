import styles from './styles/page.module.css'
import Link from 'next/link';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-content'>
        <h2>My First Nextjs project</h2 >
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, reiciendis
          perferendis accusamus debitis aspernatur quam. Voluptatem a fugit minus
          amet ullam quo omnis tenetur sapiente alias, quae architecto provident ut.
        </p>
        <Link href='/ninja' className={styles.link}><div className={styles.button}>See Listing</div></Link>
      </div>
    </div>
  )
}

export default Home;
