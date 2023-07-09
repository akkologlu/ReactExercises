import {useEffect, useState} from "react";
import axios from "axios";
import User from "./User";


function UserList({num}) {

    const [users, setUsers] = useState([]);


    const fetchUsers = async () => {
        const response = await axios.get(`https://randomuser.me/api/?results=${num}`);
        setUsers(response.data.results);
    }

    useEffect(()=>{
        fetchUsers();
    },[num])


   console.log(num)

    return (
        <div className="usersDiv">
        {
             users.map((user,idx)=>{
                return <User user={user} key={idx}/>
            })
        }
        </div>
    );
}

export default UserList;