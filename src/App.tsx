import styled from 'styled-components';
import Header from './components/Header';
import './index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import InfoCards from './components/InfoCards';
import MainInfo from './components/main/MainInfo';

function App() {
  const [balance, setBalance] = useState<number>(0);
  const [assetsCount, setAssetsCount] = useState<number>(0);
  const [sellCount, setSellCount] = useState<number>(0);
  const [buyCount, setBuyCount] = useState<any>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [assetsList, setAssetsList] = useState<any>(0);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {

      setLoading(true);

      const response = await axios.get(API_BASE_URL + '/wallet/assets/info');
      
      if (response.data) {
        
        setBalance(response.data.wallet_balance);
        setAssetsCount(response.data.assets_count);
        setSellCount(response.data.sell_transactions_count);
        setBuyCount(response.data.buy_transactions_count);
        setLoading(false);
      }
    } catch (err: any) {
      console.error(err);
    }
  }

  const Wrapper = styled.div`
    height: 50%;
    width: 80%;
    margin: auto;
    display:flex;
    justify-content:center;
    align-items:left;
    flex-direction:column;
    gap:15px;
  `;

  return (
    <Wrapper> 
      <Header />
      <InfoCards loading={loading} balance={balance} assetsCount={assetsCount} sellCount={sellCount} buyCount={buyCount}/>
      <MainInfo/>
    </Wrapper>
  );
}

export default App;
