import SearchBar from '../components/SearchBar'
import CoinList from '../components/CoinList'
import Layout from '../components/Layout'
import CoinListHeader from '../components/CoinListHeader'
import {useState} from 'react'
import Image from 'next/image'

export default function Home({filteredCoins}) {
  const [search, setSearch] = useState('')

  const allCoins = filteredCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

    const handleChange = event => {
      event.preventDefault()

      setSearch(event.target.value.toLowerCase())
    }

  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type="text" placeholder='Search for a coin' onChange={handleChange}/>
        <CoinList filteredCoins={allCoins}/>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d%2C%2030d')
  
  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins
    }
  }


}