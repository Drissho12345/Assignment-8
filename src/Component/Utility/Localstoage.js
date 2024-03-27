import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const getUser = () =>{
    let users =[];
    const storedUsers = localStorage.getItem('users');
    if(storedUsers){
        users = JSON.parse(storedUsers)
    }
    return users;
}
export const saveUser = user =>{
    let users = getUser();
    const isExist =users.find(u => u.id === user.id);
    if(isExist){
        return toast.error("Books All Ready Read!");
    }
    users.push(user);
    localStorage.setItem('users',JSON.stringify(users))
    toast.success("Book read successfully!");
    
}