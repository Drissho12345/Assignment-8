
import { CiStar } from "react-icons/ci";
import { PropTypes } from 'prop-types';

const Book = ({book}) => {
    const {image,category,type,bookName,author,rating} = book;
    return (
        <div className='border rounded-3xl'>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 m-5  rounded-3xl bg-[#F3F3F3] pt-10">
                    <img src={image} className="  pb-5 h-[350px]" />
                </figure>
                <div className='pl-6 gap-20 flex'>
                    <div className='bg-[#F3F3F3] font-bold text-[16px] text-[#23BE0A] rounded-2xl p-3'>
                        <p>{category}</p>
                    </div>
                    <div className='bg-[#F3F3F3] font-bold text-[16px] text-[#23BE0A] rounded-2xl p-3'>
                        <p>{type}</p>
                    </div>
                </div>
                <div className="pl-6 pr-6">
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
        </div>
    );
};

Book.propTypes = {
    book:PropTypes.object
}

export default Book;