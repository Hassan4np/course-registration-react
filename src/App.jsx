import swal from 'sweetalert';
import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Home from './components/Card/Home/Home'

function App() {
const [Cards,setCads] = useState([]);
const [totalCredit,settotalCredit] = useState(0);
const [remaing,setremaing] = useState(0);
const [totalprice,settotalprice] = useState(0);
const hendlecarditem=(carditem,id)=>{
  const Dublicketitem = Cards.find(item=>item.id===id);
  if(Dublicketitem){
  
    return swal("Sorry this item is already added");
  }else{
    let totalPrice= carditem.price;
    let totalCredit = carditem.Credit;
    Cards.forEach(items=>{
      totalCredit = totalCredit+ items.Credit;
      totalPrice = totalPrice+ items.price;
    })
   
    if(totalCredit>20){
      return swal("Sorry Your Credit is Full"); 
    }
     let remaing = (20-totalCredit);
    if(remaing<0){
      return swal("Sorry your Remaing is Empty");
    }
    
    settotalprice(totalPrice);
    setremaing(remaing);
    settotalCredit(totalCredit);
    setCads([...Cards,carditem]); 
  }

}
// console.log(Cards)
  return (
    <div className='bt-[#F3F3F3]'>
      <h1 className='text-3xl text-center font-bold py-10'>Course Registration</h1>
      <div className='md:flex'>
        <Card hendlecarditem={hendlecarditem}></Card>
        <Home carditems={Cards} totalCredit={totalCredit} remaing={remaing} totalprice={totalprice}></Home>
      </div>

    </div>
  )
}

export default App
