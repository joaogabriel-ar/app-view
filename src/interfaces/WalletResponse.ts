import AssetsPaginated from "./AssetsPaginated";

export default interface WalletResponse {
    assets_count: number;
    buy_transactions_count:number;
    sell_transactions_count:number;
    wallet_assets: AssetsPaginated;
    wallet_balance:string;
  }
  