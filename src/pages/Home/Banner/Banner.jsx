import bannerImg1 from '../../../assets/images/banner/1.jpg'
import bannerImg2 from '../../../assets/images/banner/2.jpg'
import bannerImg3 from '../../../assets/images/banner/3.jpg'
import bannerImg4 from '../../../assets/images/banner/4.jpg'





const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] mt-16">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={bannerImg1}
          className="w-full object-cover rounded-xl"
        />
        <div className="absolute flex items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
         <div className='text-white md:w-1/3 ml-5 md:ml-24 space-y-7'>
          <h1 className='text-5xl md:text-6xl font-bold md:leading-[75px]'>Affordable Price For Car Servicing</h1>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div>
            <button className='btn btn-error normal-case mr-5'>Discover More</button>
            <button className='btn normal-case btn-outline text-white'>Latest Project</button>
          </div>
         </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn glass btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn bg-orange-600 border-none btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={bannerImg2}
          className="w-full object-cover"
        />
        <div className="absolute flex items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
         <div className='text-white md:w-1/3 ml-5 md:ml-24 space-y-7'>
          <h1 className='text-5xl md:text-6xl font-bold md:leading-[75px]'>Affordable Price For Car Servicing</h1>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div>
            <button className='btn btn-error normal-case mr-5'>Discover More</button>
            <button className='btn normal-case btn-outline text-white'>Latest Project</button>
          </div>
         </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn glass btn-circle mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn bg-orange-600 border-none btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={bannerImg3}
          className="w-full object-cover"
        />
        <div className="absolute flex items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
         <div className='text-white md:w-1/3 ml-5 md:ml-24 space-y-7'>
          <h1 className='text-5xl md:text-6xl font-bold md:leading-[75px]'>Affordable Price For Car Servicing</h1>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div>
            <button className='btn btn-error normal-case mr-5'>Discover More</button>
            <button className='btn normal-case btn-outline text-white'>Latest Project</button>
          </div>
         </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn glass btn-circle mr-4">
            ❮
          </a>
          <a href="#slide4" className="btn bg-orange-600 border-none btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={bannerImg4}
          className="w-full object-cover"
        />
        <div className="absolute flex items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
         <div className='text-white md:w-1/3 ml-5 md:ml-24 space-y-7'>
          <h1 className='text-5xl md:text-6xl font-bold md:leading-[75px]'>Affordable Price For Car Servicing</h1>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div>
            <button className='btn btn-error normal-case mr-5'>Discover More</button>
            <button className='btn normal-case btn-outline text-white'>Latest Project</button>
          </div>
         </div>
        </div>
       <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn glass btn-circle mr-4">
            ❮
          </a>
          <a href="#slide1" className="btn bg-orange-600 border-none btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
