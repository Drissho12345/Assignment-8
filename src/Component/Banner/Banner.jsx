import pic from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className="pl-28 pb-20 gap-10 grid grid-cols-2 bg-[#1b1a1a0d] rounded-3xl  w-[90%] m-auto border">
            <div className='pt-32'>
                <p className="text-[56px] font-bold">Books to freshen up your bookshelf</p>
                <div className='pt-12'>
                    <button className='btn text-[20px] text-[#FFFFFF] bg-[#23BE0A] '>View The List</button>
                </div>
            </div>
            <div className='pt-14 pl-20 text-center'>
                <img src={pic} alt="" />
            </div>
        </div>
    );
};

export default Banner;