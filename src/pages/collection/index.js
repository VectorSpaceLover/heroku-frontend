import { useState } from "react";
import CustomedButton from "./components/customedBtn";
import SearchBox from "./components/searchBox/index.js";
import { Styles, DialogStyles } from './style/collectionStyle';
import Dialog from '@mui/material/Dialog';
import Input from "./components/input";
import EmailInput from "./components/emailInput";
import CloseButton from "./components/closeBtn";
import TextButton from './components/txtButton';
import CollectionCard from './components/collectionCard';

import { collections } from '../../assets/config';
import { Grid } from "@mui/material";

export default function Collection(){
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return(
        <Styles>
            <div className="collection-container">
                
            </div>
        </Styles>
    )
}
