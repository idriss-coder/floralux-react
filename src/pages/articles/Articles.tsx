/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line import/no-unresolved
import Page from "../../components/page/Page";
// eslint-disable-next-line import/no-unresolved
import { addSetting } from "../../redux/store";

export default function Articles() {
  const dispach = useDispatch()
  const [ns, setns]  = useState("")
  const settings:Array<{id:Number, name:String}> = useSelector((state:any)=>state.settings)
  // eslint-disable-next-line no-console
  useEffect(()=>console.log(settings),[])
  return (
    <Page title="Vos articles">
      <h1>Tous Vos articles</h1>
      <ul>
        {
          settings.map((setting)=>(
            <li key={setting.id.toString()}>{setting.name}</li>
          ))
        }
        <div>
          <form 
          action="#"
          onSubmit={async(e:any)=>{
            // eslint-disable-next-line no-unused-expressions
            e.preventDefault()
            dispach(addSetting(ns))
            
            setns("")

            
          }} 
          >
            <input type="text" value={ns} onChange={(e:any)=>setns(e.target.value)} />
            <button 
            type="submit">ajouter</button>
          </form>
        </div>
      </ul>
    </Page>
  );
}
