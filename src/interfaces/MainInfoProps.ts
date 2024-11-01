import AssetsPaginated from "./AssetsPaginated";

export default interface MainInfoProps {
    assetsPaginated: AssetsPaginated | null;
    handleAssetsPaginated: Function;
}