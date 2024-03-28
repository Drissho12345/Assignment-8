
import { CiStar } from "react-icons/ci";
import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {image,type,bookName,tags, author,rating,id} = book;
    return (
        <Link to={`/BookBio/${id}`} className="transition border-2  md:hover:scale-105 border-primary hover:border-secondary border-opacity-30 shadow-xl rounded-3xl md:w-full md:w-[90%] mx-auto">
            <div className="card ">
                <figure className="md:px-10 m-5  rounded-3xl bg-[#F3F3F3] pt-10">
                    <img src={image} className=" w-full pb-5 md:h-[350px]" />
                </figure>
                <div className='md:pl-6 md:gap-20 gap-2 p-2 flex'>
                    <div className='bg-[#F3F3F3] font-bold text-[16px] text-[#23BE0A] rounded-2xl p-3'>
                        <p>{tags[0]}</p>
                    </div>
                    <div className='bg-[#F3F3F3] font-bold text-[16px] text-[#23BE0A] rounded-2xl p-3'>
                        <p>{tags[1]}</p>
                    </div>
                </div>
                <div className="md:pl-6 md:pr-6">
                    <h2 className="card-title text-[24px] pt-4">{bookName}</h2>
                    <p className='text-[#131313CC] pt-2 pb-4 text-[18px]'>By: {author}</p>
                    <hr />
                    <div className="flex pt-4 pb-6 justify-between ">
                        <p className=' text-[#131313CC] text-[18px]'>{type}</p>
                        <div className='flex gap-2  text-[#131313CC] text-[18px]'>
                            <p>{rating}</p>
                            <CiStar className='font-bold text-[#131313CC] text-[24px]'></CiStar>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book:PropTypes.object
}

export default Book;