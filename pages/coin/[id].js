import Layout from '../../components/Layout';
import styles from './Coin.module.css';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

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
          <h1 className={styles.coin_name}>{coin.name} ({coin.symbol.toUpperCase()})</h1>
          <p className={styles.coin_current_price}>Current price: {coin.market_data.current_price.usd}</p>
          <p className={styles.coin_data}>All-time high: {coin.market_data.ath.usd} on {coin.market_data.ath_date.usd.substring(0,10)}</p>
          <p className={styles.coin_data}>Block time: {coin.block_time_in_minutes} min</p>
          <p className={styles.coin_data}>Hashing algo: {coin.hashing_algorithm}</p>
          <p className={styles.coin_data}>Market cap: USD${coin.market_data.market_cap.usd.toLocaleString()}</p>
          <p className={styles.coin_data}>Volume: {coin.market_data.total_volume.usd.toLocaleString()}</p>
          <TradingViewWidget
            symbol={"BINANCE:" + coin.symbol.toUpperCase() + "USDT"}
            theme={Themes.LIGHT}
            locale="en"
            width="800px"
            height="500px"
            interval="D"
          />
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