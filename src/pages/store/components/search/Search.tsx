/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React,{useState} from "react";
// eslint-disable-next-line import/no-unresolved
import TextFields from "../../../../components/textfield/TextFields";

const [find, setFind] = useState("");

function Search() {
  return <TextFields
    id="search"
    label="Rechercher un article"
    value={find}
    onChange={(e:any)=>setFind(e.target.value)}
  />;
}

export default Search;
