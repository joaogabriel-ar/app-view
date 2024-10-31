import WalletAsset from "./WalletAsset";

export default interface Asset {
    asset_type_id: number;
    created_at?: string;
    id: number;
    name: string;
    price: string;
    quantity: number;
    updated_at?: string;
    pivot: WalletAsset;
}