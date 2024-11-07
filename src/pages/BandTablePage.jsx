import React from "react";
import BandTable from "../components/bandTable/bandTable";
import { useDispatch, useSelector } from "react-redux";
import {deleteBand} from "../redux/bandsSlice";

const BandTablePage = () =>{
    const dispatch = useDispatch();
    const bands = useSelector((state) => state.bands);
    const deleteBandById = (id) =>{
        dispatch(deleteBand(id));
    }
    return (
        <div className="page">
            <BandTable bands = {bands} deleteBand = {deleteBandById}></BandTable>

        </div>
    );
}
export default BandTablePage;