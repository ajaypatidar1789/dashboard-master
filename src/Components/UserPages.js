import React,{useEffect, useState} from 'react'
import UserCard from './UserCard';
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const UserPages = () => {
  const [userData,setUserData] = useState([]);
  const { t } = useTranslation()

  const fetch = async() => {
    try{
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log("res:",data)
      setUserData(data)
    } catch(err) {
      alert(err)
    }
  }

  useEffect(()=>{
    fetch();
  },[])

  return (
    <div className='flex flex-col justify-center' style={{width:'90%',margin:'auto'}}>

      <span className='Leadership flex flex-col text-4xl font-bold items-center m-5' >{t("Our_Leadership")}</span>

      <div className='flex flex-wrap justify-center'>
        {
          userData.length > 0 && userData.map((user)=> {
            const {id,name, username, email} = user
            return <UserCard key={user.email} name={name} username={username} email={email} id={id}/>
          })
        }
      </div>

    </div>
  )
}

export default UserPages