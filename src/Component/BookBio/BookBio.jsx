
import { useLoaderData,useParams } from "react-router-dom";
import {  saveUser,saveWishlistUser } from '../../Component/Utility/Localstoage';
// import { toast } from "react-toastify";

const BookBio = () => {
    
    const handleReadBooks = user =>{
        saveUser(user)
    }
   
    const handleWishlist = (user) =>{
        saveWishlistUser(user);
        console.log()
    }

    const allBooks = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const user = allBooks.find((item) => item.id == idInt)
    const {author,image,bookName,yearOfPublishing,publisher,category,totalPages,review,tags,rating} = user;
    return (
        <div className="w-[90%] m-auto">

            <div className="gap-14 grid pt-12 lg:grid-cols-2 sm:grid-cols-1">
                <div className="card-body flex justify-center items-center rounded-3xl bg-[#1313130D] ">
                    <img className="w-[300px]" src={image} alt="" />
                </div>
                <div>
                    <h1 className="text-[40px] font-bold">{bookName}</h1>
                    <div>
                        <p className="text-[20px] text-[#131313B2] pb-5 font-bold "><span >By: </span>{author}</p>
                        <hr />
                        <p className="text-[20px] text-[#131313B2] pt-4 pb-4">{category}</p>
                        <hr />
                        <p className="text-[16px] pt-4 pb-4 text-[#131313B2]"><span className="font-bold">Review: </span>{review}</p>
                        <div className="flex gap-5 pb-5">
                            <p className="p-3 font-bold">Tag</p>
                            <div className="p-3 text-[16px] text-[#23BE0A] font-bold rounded-3xl bg-[#23BE0A0D]"><p>#{tags[1]}</p></div>
                            <div  className="p-3 text-[#23BE0A] rounded-3xl bg-[#23BE0A0D] text-[16px] font-bold"><p>#{tags[2]}</p></div>
                        </div>
                        <hr />

                        <div className="flex gap-[65px] mt-4">
                            <div className="text-[16px] text-[#646262]">
                            <p>Number of Pages:</p>
                                <p className="mt-2 mb-2">Publisher:</p>
                                <p>Year of Publishing:</p>
                                <p className="mt-2 mb-2">Rating:</p>
                            </div>
                            <div className="text-[16px] text-[#646262]">
                                <p className="font-bold">{totalPages}</p>
                                <p  className="mt-2 mb-2 font-bold">{publisher}</p>
                                <p className="font-bold">{yearOfPublishing}</p>
                                <p  className="mt-2 mb-2 font-bold">{rating}</p>
                            </div>
                        </div>

                        <div className="flex gap-5 pt-8">
                            <button onClick={()=> handleReadBooks(user)} className="btn text-[18px] text-[#131313] bg-blue-600">Read</button>
                            <button onClick={()=>handleWishlist(user)} className="btn text-[18px] text-[#FFFFFF] bg-[#50B1C9]">Wishlist</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookBio;