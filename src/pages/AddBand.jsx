import React from "react";
import AddingBand from "../components/addingBand/addingBand";
import { useDispatch } from "react-redux";
import { addBand } from "../redux/bandsSlice";
import "./styles.css"
const AddBand = () =>{
    const dispatch = useDispatch();
    const handleAddingBand = (newBandData) => {
        dispatch(addBand(newBandData));;
      }
    return (
        <div className="page">
            <AddingBand onBandAdd = {handleAddingBand}></AddingBand>

        </div>
    );
}
export default AddBand;