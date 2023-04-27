import React, { useState } from "react";
import MyContext from "./Createcontext";

const DataFetching = (props) => {
    const [comparedata,setcomparedata]=useState([]);
    const [columnNames, setColumnNames] = useState([]);
    const [projectdata,setprojectdata]=useState([]);
    const [item1,setitem1]=useState(-1)
    const [item2,setitem2]=useState(-1)
    const [item3,setitem3]=useState(-1)
    const[able,setable]=useState(false)
    const[coldata,setcoldata]=useState([])
    const[free,setfree]=useState(0)
   
    const fetchingdata=async(setdata)=>{
       const url = `https://api.airtable.com/v0/appI2TY2F0bnyL4rm/Comparision%20Table/recsUvOBrpMGxDQnC?api_key=key3rcNBRgJ2iurx4`;
       // https://api.airtable.com/v0/appI2TY2F0bnyL4rm/Comparision%20Table/recsUvOBrpMGxDQnC?fields%5B%5D=-fldlRyR54qzwHyEIs,-fld6nUtXYrisQRn7o&filterByFormula={4S Aradhya Homes}='{2.58}'&api_key=key3rcNBRgJ2iurx4

       
       let data1 = await fetch(url);
      
     let parsedData = await data1.json();
      
     const recordFields = parsedData.fields;
     const columns = Object.keys(recordFields);
     return columns
    
   }
   const fetchingdata1=async()=>{
       const url = `https://api.airtable.com/v0/appI2TY2F0bnyL4rm/Comparision%20Table?fields%5B%5D=fldlRyR54qzwHyEIs&view=Grid%20view&api_key=key3rcNBRgJ2iurx4`;
       
       let data = await fetch(url);
      
     let parsedData = await data.json();
      
       setcomparedata(parsedData.records);
       console.log(comparedata)
      }
      const handlecompare=async(item1)=>{
       const url = `https://api.airtable.com/v0/appI2TY2F0bnyL4rm/Comparision%20Table?fields%5B%5D=${item1}&filterByFormula=NOT({Field1}="image")&view=Grid%20view&api_key=key3rcNBRgJ2iurx4`;
     
       let data = await fetch(url);
      
     let parsedData = await data.json();
      console.log("hellosetstate")
      console.log(parsedData.records)

     // var get =  await JSON.parse(localStorage.getItem('project'));
     //     get.push(parsedData.records)
     //      localStorage.setItem('project',JSON.stringify(get))
          setcoldata(coldata=>[...coldata,parsedData.records])
     
         return 1
      
      }
      const getKey=(keyitem)=>{
       const keys1 = Object.keys(keyitem);
       return keys1[0];
      }
      const fetchfunction=async(columnNames)=>{
       const url = `https://api.airtable.com/v0/appI2TY2F0bnyL4rm/Comparision%20Table/?fields%5B%5D=${columnNames}&filterByFormula=OR({Field1}=%27Locality%27,{Field1}=%27Area%27,{Field1}=%27City%27,{Field1}=%27image%27)&api_key=key3rcNBRgJ2iurx4`;
       
       let data1 = await fetch(url);
    //   const url1 = `https://api.airtable.com/v0/appI2TY2F0bnyL4rm/Comparision%20Table/?fields%5B%5D=${columnNames}&filterByFormula=OR({Field1}=%27image%27)&api_key=key3rcNBRgJ2iurx4`;
     let parsedData = await data1.json();
     // let data2 = await fetch(url1);
     // let parsedData1 = await data2.json();
     // var get = JSON.parse(localStorage.getItem('content'));
     //     get.push(parsedData.records)
     //     localStorage.setItem('content',JSON.stringify(get))
     //     var get1 = JSON.parse(localStorage.getItem('image'));
     //     get1.push(parsedData1.records)
     //     localStorage.setItem('image',JSON.stringify(get1))
         setprojectdata(projectdata=>[...projectdata,parsedData.records])
    }
    const fetchingprojectdata=async()=>{
     const url = `https://api.airtable.com/v0/appI2TY2F0bnyL4rm/Comparision%20Table?fields%5B%5D=fld6nUtXYrisQRn7o&filterByFormula=NOT({Field1}="image")&view=Grid%20view&api_key=key3rcNBRgJ2iurx4`;
     
     let data = await fetch(url);
    
   let parsedData = await data.json();
   // var get =  await JSON.parse(localStorage.getItem('project'));
   //       get.push(parsedData.records)
   //        localStorage.setItem('project',JSON.stringify(get))
   //        console.log("getting")
   //        console.log(get)
          setcoldata(coldata=>[...coldata,parsedData.records])

    
    return 1
    }


   return(<MyContext.Provider value={{comparedata,setcomparedata,columnNames,setColumnNames,fetchingdata,fetchingdata1,handlecompare,projectdata,getKey,fetchfunction,item1,setitem1,item2,setitem2,item3,setitem3,able,setable,setprojectdata,fetchingprojectdata,coldata,setcoldata,free,setfree}}>
       {props.children}
</MyContext.Provider>);
}

export default DataFetching
