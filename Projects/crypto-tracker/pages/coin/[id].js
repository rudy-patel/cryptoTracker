import Layout from '../../components/Layout';
import styles from './Coin.module.css';

const Coin = ({ coin }) => {
  return (
    <Layout>
      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <img
            src={coin.image.small}
            alt={coin.name}
            className={styles.coin_image}
          />
          <h1 className={styles.coin_name}>{coin.name}</h1>
          <p className={styles.coin_ticker}>{coin.symbol.toUpperCase()}</p>
          <p className={styles.coin_current}>Current price: {coin.market_data.current_price.usd}</p>
          <p className={styles.coin_ath}>All-time high: {coin.market_data.ath.usd} on {coin.market_data.ath_date.usd.substring(0,10)}</p>
          <p className={styles.coin_block_time}>Block time: {coin.block_time_in_minutes} min</p>
          <p className={styles.coin_hashing_algo}>Hashing algo: {coin.hashing_algorithm}</p>
          
        </div>
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