import AssetsPaginated from "../../interfaces/AssetsPaginated";
import ListCard from "./ListCard";

interface MainInfoProps {
    assetsPaginated: AssetsPaginated | null;
    handleAssetsPaginated: Function;
}
  
export default function MainInfo({assetsPaginated, handleAssetsPaginated}:MainInfoProps) {

    return (
        <>
            <ListCard assetsPaginated={assetsPaginated} handleAssetsPaginated={handleAssetsPaginated}/>
        </>
    )

}