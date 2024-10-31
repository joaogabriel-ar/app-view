import AssetsPaginated from "../../interfaces/AssetsPaginated";
import ListCard from "./ListCard";

interface MainInfoProps {
    assetsPaginated: AssetsPaginated | null;
}
  
export default function MainInfo({assetsPaginated}:MainInfoProps) {

    return (
        <>
            <ListCard assetsPaginated={assetsPaginated} />
        </>
    )

}