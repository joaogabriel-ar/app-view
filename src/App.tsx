import Header from './components/Header';
import './index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import InfoCards from './components/InfoCards';
import AssetsList from './interfaces/AssetsPaginated';
import AssetsPaginated from './interfaces/AssetsPaginated';
import { MainInfoContainer, Wrapper } from './styles/styles';
import ChartCard from './components/main/ChartCard';
import ListCard from './components/main/ListCard';
import Link from './interfaces/Link';

interface WalletResponse {
  assets_count: number;
  buy_transactions_count: number;
  sell_transactions_count: number;
  wallet_assets: AssetsList;
  wallet_balance: string;
}

function App() {
  const [balance, setBalance] = useState<number>(0);
  const [assetsCount, setAssetsCount] = useState<number>(0);
  const [sellCount, setSellCount] = useState<number>(0);
  const [buyCount, setBuyCount] = useState<any>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [assetsPaginated, setAssetsPaginated] = useState<AssetsPaginated | null>(null);
  const [page, setPage] = useState<number | undefined>(1);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    paginate();
  }, [page]);

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


  async function paginate() {

    if (assetsPaginated && page) {

      let link = assetsPaginated.links.find((l: Link) => parseInt(l.label) == page);

      if (link && link.url) {

        const response = await axios.get<WalletResponse>(link.url);

        if (response.data) {          

          setAssetsPaginated(response.data.wallet_assets);

        }

      }
    }
  }

  function handlePagination(page: number | undefined) {    
    setPage(page);

  }

  return (
    <Wrapper>
      <Header />
      <InfoCards loading={loading} balance={balance} assetsCount={assetsCount} sellCount={sellCount} buyCount={buyCount} />
      <MainInfoContainer>
        <ChartCard />
        <ListCard assetsPaginated={assetsPaginated} handlePagination={handlePagination} page={page} />
      </MainInfoContainer>
    </Wrapper>
  );
}

export default App;
