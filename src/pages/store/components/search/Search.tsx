/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React,{useState} from "react";
import Container from "../../../../components/container/Container";
// eslint-disable-next-line import/no-unresolved
import TextFields from "../../../../components/textfield/TextFields";


function Search() {
    const [find, setFind] = useState("");

  return <Container>
    <TextFields
      id="search"
      label="Rechercher un article"
      value={find}
      onChange={(e:any)=>setFind(e.target.value)}
    />
   </Container>
}

export default Search;
