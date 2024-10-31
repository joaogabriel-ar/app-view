export default interface WalletAsset {
    wallet_id: number;
    asset_id: number;
    quantity: number;
    balance: number;
    updated_at?: string;
}