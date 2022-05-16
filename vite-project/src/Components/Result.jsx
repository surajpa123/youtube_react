import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../Redux/store'
const Result = () => {

const storeData = useSelector((store)=> store.Data)

const title = useSelector((store)=> store.Title)

const store = useSelector((store)=> store.Description)
console.log(store)


  return (
    <div class= "container">
<iframe style={{width:"70%",height:"500px"}} src={storeData} ></iframe>
<h2>{title}</h2>


    <p>{store}</p>
    </div>
  )
}

export default Result