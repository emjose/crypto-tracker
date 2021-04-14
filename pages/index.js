import Head from 'next/head'
import CoinList from '../components/CoinList'
import SearchBar from '../components/SearchBar'
import Layout from '../components/Layout'
// import styles from '../styles/Home.module.css'

export default function Home({filteredCoins}) {
  return (
    <Layout>
      <div className="coin_app"></div>

      <SearchBar type='text' placeholder='Search'/>
      <CoinList filteredCoins={filteredCoins}/>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')

  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins
    }
  }
}


// Emmanuel Jose logo and favicon. © Emmanuel Jose. All Rights Reserved.