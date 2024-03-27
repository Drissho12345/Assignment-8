import { PropTypes } from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineManageAccounts } from "react-icons/md";
import { LuBookUp } from "react-icons/lu";
const ReadBooks = ({blog}) => {
    // console.log(blog)
    const {bookName,image,author,totalPages,publisher,yearOfPublishing,rating,tags,category} = blog;
    return (
        <div>
            <div className="gap-14 grid pt-12 lg:grid-cols-2 sm:grid-cols-1">
                <div className="card-body flex justify-center items-center rounded-3xl bg-[#1313130D] ">
                    <img className="w-[300px]" src={image} alt="" />
                </div>
                <div>
                    <h1 className="text-[40px] font-bold">{bookName}</h1>
                    <div>
                        <p className="text-[20px] text-[#131313B2] pb-5 font-bold "><span >By: </span>{author}</p>
                        
                        <div className="flex gap-5 pb-2">
                            <p className="p-3 font-bold">Tag</p>
                            <div className="p-3 text-[16px] text-[#23BE0A] font-bold rounded-3xl bg-[#23BE0A0D]"><p>#{tags[1]}</p></div>
                            <div  className="p-3 text-[#23BE0A] rounded-3xl bg-[#23BE0A0D] text-[16px] font-bold"><p>#{tags[2]}</p></div>
                            
                            <div className='p-3 flex gap-2'>
                            <CiLocationOn/>
                                <div className='text-[#131313CC]'> Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></div>
                                
                            </div>

                        </div>
                            <div className='flex gap-9'>
                                <div className='flex gap-2'>
                                    <MdOutlineManageAccounts></MdOutlineManageAccounts>
                                    <p className=" mb-3">Publisher: <span>{publisher}</span></p>
                                </div>
                                <div className='flex gap-2 mb-3'>
                                    <LuBookUp></LuBookUp>
                                    <p>Page: <span>{totalPages}</span></p>
                                </div>
                            </div>
                        <hr />

                        <div className="flex gap-[65px] mt-4">
                            <div className="text-[16px] bg-[#328EFF26] rounded-3xl  text-[#328EFF]">
                                <p className='p-2 mt-2 mb-2'>Category: <span>{category}</span></p>
                            </div>
                            <div className="text-[16px] rounded-3xl  bg-[#FFAC3326] text-[#FFAC33]">
                                <p className="mt-2 mb-2 p-2">Rating: <span className="mt-2 mb-2 font-bold">{rating}</span></p> 
                            </div>
                            <div>
                                <button className='btn rounded-3xl bg-[#23BE0A]'>View Details</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
ReadBooks.propTypes = {
    blog: PropTypes.object
}

export default ReadBooks;