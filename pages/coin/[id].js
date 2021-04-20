import Layout from '../../components/Layout';
import styles from './Coin.module.css';
import Tilt from 'react-parallax-tilt';


const Coin = ({ coin }) => {
  return (
    
    <Layout>

      <div className={styles.coin_page}>
        <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        transitionSpeed={1500}
        scale={1.02}
        gyroscope={true}>

        <div className={styles.coin_container}>

          <div className={styles.coin_ticker}>{coin.symbol}</div>
          
          <div>
            <img src={coin.image.large}
            alt={coin.name}
            className={styles.coin_image}/>
          </div>

          <div><h1 className={styles.coin_name}>{coin.name}</h1></div>
          
          <div className={styles.coin_current}>
            ${coin.market_data.current_price.usd}
          </div>
        </div>
        </Tilt>
      </div>

    </Layout>

  );
};

export default Coin;

export async function getServerSideProps(context) {
  
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const data = await res.json();

  return {
    props: {
      coin: data
    }
  };

}