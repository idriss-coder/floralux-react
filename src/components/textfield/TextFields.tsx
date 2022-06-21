/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React from "react";
import "./TextFields.scss"
import { SearchTwoTone, ListAltTwoTone } from "@mui/icons-material"
// eslint-disable-next-line import/no-unresolved
import BoxIcon from "../boxIcon/BoxIcon";
// eslint-disable-next-line import/no-unresolved
import couleurs from "../../constants/couleur";

export default function TextFields({id, label, value, onChange}:any) {
  const handleSetting = ()=>{}
  return (
    <div className="textfield">
      <div className="fIcon">
        <SearchTwoTone />
      </div>
      <div style={{width:"100%"}}>
        <input className="field" type="text" id={id} placeholder={label} value={value} onChange={onChange} />
      </div>
      <BoxIcon handleClick={handleSetting} color={couleurs.tertiary}>
        <ListAltTwoTone />
      </BoxIcon>
    </div>
  );
}
