import styled from 'styled-components';
import Header from './components/Header';
import './index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import InfoCards from './components/InfoCards';
import MainInfo from './components/main/MainInfo';
import AssetsList from './interfaces/AssetsPaginated';
import AssetsPaginated from './interfaces/AssetsPaginated';

interface WalletResponse {
  assets_count: number;
  buy_transactions_count:number;
  sell_transactions_count:number;
  wallet_assets: AssetsList;
  wallet_balance:string;
}

function App() {
  const [balance, setBalance] = useState<number>(0);
  const [assetsCount, setAssetsCount] = useState<number>(0);
  const [sellCount, setSellCount] = useState<number>(0);
  const [buyCount, setBuyCount] = useState<any>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [assetsPaginated, setAssetsPaginated] = useState<AssetsPaginated | null>(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {

      setLoading(true);

      const response = await axios.get<WalletResponse>(API_BASE_URL + '/wallet/assets/info');
      
      if (response.data) {
          
        setBalance(parseFloat(response.data.wallet_balance));
        setAssetsCount(response.data.assets_count);
        setSellCount(response.data.sell_transactions_count);
        setBuyCount(response.data.buy_transactions_count);
        setAssetsPaginated(response.data.wallet_assets);
        setLoading(false);
      }
    } catch (err: any) {
      console.error(err);
    }
  }

  function handleAssetsPaginated(newAssetsPaginated: AssetsPaginated) {
    console.log(newAssetsPaginated);
    
    setAssetsPaginated(newAssetsPaginated);

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
      <MainInfo assetsPaginated={assetsPaginated} handleAssetsPaginated={handleAssetsPaginated}/>
    </Wrapper>
  );
}

export default App;
