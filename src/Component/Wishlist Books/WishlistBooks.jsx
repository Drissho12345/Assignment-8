import PropTypes from 'prop-types'
import { LuBookUp } from 'react-icons/lu';
import { MdOutlineLocationOn, MdOutlineManageAccounts } from 'react-icons/md';
import { Link } from 'react-router-dom';
const WishlistBooks = ({book}) => {
    // console.log(book)
    const {bookName,image,author,totalPages,publisher,yearOfPublishing,rating,tags,category,id} = book
    return (
        <div>
            <div className=" flex gap-7 sm:flex-col lg:flex-row border-[2px] rounded-lg mt-9 p-5">
                <div className="c-img w-[230px] bg-[#F3F3F3] flex justify-center items-center border rounded-[16px]">
                <img src={image} alt=""  className="w-[129px] h-[172px]"/>
                </div>

                <div className="c-details">
                <h2 className="text-[#131313] text-[40px]">{bookName}</h2>
                <span  className="text-[#646262] text-[20px]">By : {author}</span>

                <div className="flex justify-center items-center gap-5 mt-2 mb-2">
                    <p className="text-[#131313] text-[16px]">Tag</p>
                    <p className="text-[16px] text-[#23BE0A] bg-[#e6fae3] border rounded-[20px] px-[20px] py-[8px]">#{tags[1]}</p>
                        <p className="text-[16px] text-[#23BE0A] bg-[#e6fae3] border rounded-[20px]  px-[20px] py-[8px]">#{tags[2]}</p>

                        <div className='flex justify-center items-center gap-2'>
                        <MdOutlineLocationOn></MdOutlineLocationOn>
                        <p className='text-[#131313CC]'> Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></p>
                        </div>

                </div>
                <div className="flex gap-4 text-[16px]">
                    <div className="flex gap-3 ">
                    <MdOutlineManageAccounts></MdOutlineManageAccounts>
                    <p className=" text-[16px]">Publisher: {publisher}</p>
                    </div>
                    <div className="flex gap-3">
                    <LuBookUp></LuBookUp>
                    <p>Page {totalPages}</p>
                    </div>
                </div>
                <hr  className="mt-4 mb-4"/>

                <div className="flex gap-5">
                    <p className="text-[#328EFF] text-4 px-[11px] py-[12px] bg-[#a5c9f5] rounded-[30px]">Category: {category}</p>
                    <p className="text-[#FFAC33] text-4 px-[11px] py-[12px] bg-[#fdf3f3] rounded-[30px]">Rating: {rating}</p>
                    
                    <Link to={`/ViewData/${id}`}>
                        <button className="text-[#FFF] text-[18px] px-[20px] py-[10px] bg-[#23BE0A] border rounded-[30px]">View Details</button>
                    </Link>
                
                
                </div>
                </div>
            </div>
        </div>
    );
};
WishlistBooks.propTypes ={
    book:PropTypes.object
}
export default WishlistBooks;