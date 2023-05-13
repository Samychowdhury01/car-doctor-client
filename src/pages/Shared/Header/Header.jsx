/* eslint-disable react/prop-types */
import banner from '../../../assets/images/banner/4.jpg'

const Header = ({pageName}) => {
    return (
        <div className="carousel-item relative w-full md:h-[300px] mt-12 mb-32">
        <img
          src={banner}
          className="w-full object-cover rounded-xl"
        />
        <div className="absolute flex items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-xl">
         <div className='text-white md:w-1/3 ml-5 md:ml-24 space-y-7'>
          <h1 className='text-5xl md:text-6xl font-bold md:leading-[75px]'>{pageName}</h1>
          </div>
         </div>
        </div>
    );
};

export default Header;