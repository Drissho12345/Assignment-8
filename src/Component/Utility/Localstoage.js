import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const getUser = () =>{
    let users =[];
    const storedUsers = localStorage.getItem('readBooks');
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
    localStorage.setItem('readBooks',JSON.stringify(users))
    toast.success("Book read successfully!");
    
}

// ......................

export const getWishlistUser = () =>{
    let users =[];
    const storedUsers = localStorage.getItem('WishlistUser');
    if(storedUsers){
        users = JSON.parse(storedUsers)
    }
    return users;
}
export const saveWishlistUser = user =>{
    let users = getWishlistUser();
    const isExist =users.find(u => u.id === user.id);
    if(isExist){
        return toast.error("Books All Ready Read!");
    }
    users.push(user);
    localStorage.setItem('WishlistUser',JSON.stringify(users))
    toast.success("Book read successfully!");
    
}