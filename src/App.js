// import { useEffect, useState } from 'react';
// import './App.css';
// import Header from './Header';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(()=>{
//     async function getData(){
//       const call = await fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001');
//       const res = await call.json();
//       console.log(res)
//       setData(res)
//     }
//     getData();
//   },[]);  
//   return (
//     <>
//     <div className="" style={{width:'100%', height:'100vh'}}>
// <div className="" style={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)'}}>

//     <Header/>
//     <div className="row">
//     {
//       data.map((e)=>{
// return <div className="" style={{display:'flex', justifyContent:'space-between',marginTop:'30px'}}>
//   <div className="h5">{e.firstName}</div>
//   <div className="h5">{e.lastName}</div>
// </div>

//       })
//     }
//     </div>
// </div>
//     </div>
//     </>
//   );
// }

// export default App;

// usefull when we deal with one api what would happen if we need to deal with multiple apis

// ------------------------------------------------------------------------------------------------


 
import './App.css';
import Header from './Header';
import useFetch from './useFetch';

function App() {
 const [data] = useFetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
  return (
    <>
    <div className="" style={{width:'100%', height:'100vh'}}>
<div className="" style={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)'}}>

    <Header/>
    <div className="row">
    {
      data.map((e)=>{
return <div className="" style={{display:'flex', justifyContent:'space-between',marginTop:'30px'}}>
  <div className="h5">{e.firstName}</div>
  <div className="h5">{e.lastName}</div>
</div>

      })
    }
    </div>
</div>
    </div>
    </>
  );
}

export default App;
