
import { Input } from "@material-tailwind/react";


const Searh = (props)=>{
return(
    <div className="w-30 mt-5 ml-5 mr-5">
      <Input label="Pesquisar" onInput={(ev)=>{
        props.setWord(ev.target.value)
        props.search()
      }} />
    </div>
)
}


export default Searh