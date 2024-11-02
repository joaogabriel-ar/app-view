import AssetsPaginated from "./AssetsPaginated";

export default interface ListCardI {
    assetsPaginated: AssetsPaginated | null;
    handlePagination: Function;
    page: number | undefined

}