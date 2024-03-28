import { Link } from 'react-router-dom';
import pic from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className="md:pl-28 p-4 pb-20 gap-10 md:flex items-center justify-between bg-[#1b1a1a0d] rounded-3xl w-[90%] m-auto border">
            <div className='md:pt-32 pt-4 flex-1'>
                <p className="md:text-6xl text-3xl font-bold">Books to freshen up <br /> your bookshelf</p>
                <Link to="/Listed Books">
                    <div className='md:pt-12 pt-4'>
                        <button className='btn text-[20px] text-[#FFFFFF] bg-[#23BE0A] '>View The List</button>
                    </div>
                </Link>
            </div>
            <div className='pt-14 flex-1 md:pl-20 text-center'>
                <img className=' w-full' src={pic} alt="" />
            </div>
        </div>
    );
};

export default Banner;