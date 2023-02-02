import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import SwiperCore, { Autoplay } from "swiper";
import Avatar1 from "./assest/avatar1.png";
import Avatar2 from "./assest/avatar2.png";
import Avatar3 from "./assest/avatar3.png";
import Avatar4 from "./assest/avatar4.png";
import Image from "next/image";

export default function index() {
  const items = [
    {
      image: Avatar1,
      name: "Stacy L",
      desc: "i've worked with many educations, but very few who are as encouraging, thorough, and as passionate as Mike. He enters every tutoring session seemingly excited for math, and with a... read more",
    },
    {
      image: Avatar2,
      name: "Tabitha S",
      desc: "i've worked with many educations, but very few who are as encouraging, thorough, and as passionate as Mike. He enters every tutoring session seemingly excited for math, and with a... read more",
    },
    {
      image: Avatar3,
      name: "Mandy R",
      desc: "i've worked with many educations, but very few who are as encouraging, thorough, and as passionate as Mike. He enters every tutoring session seemingly excited for math, and with a... read more",
    },
    {
      image: Avatar4,
      name: "Stephen",
      desc: "i've worked with many educations, but very few who are as encouraging, thorough, and as passionate as Mike. He enters every tutoring session seemingly excited for math, and with a... read more",
    },
  ];
  SwiperCore.use([Autoplay]);
  return (
    <section className="md:mt-72 mt-24">
    <div className="md:w-[50%] text-center items-center md:ml-96">
    <h1 className="text-[#070A13] md:text-4xl text-2xl font-semibold">What are parent saying</h1>
    <p className="text-[#070A13] mt-4 md:max-w-[36.5rem]">
     Read the reviews below to see what student parents are saying about learnhall on Google
     for our tutoring services.
    </p>
  </div>

      <div className="max-w-[47rem] flex mx-auto py-8">
        <Swiper
        spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 3000 }}
          centeredSlides={true}
          breakpoints={{
            1000: { slidesPerView: 2 },
            // 600: { slidesPerView: 1, spaceBetween: 10 },
          }}
        >
            {items.map((item, i) => (
          <SwiperSlide
            className="px-8 rounded-3xl my-10 shadow-lg"
            key={i}
          >
            <div className="flex">
              <Image
                className="object-cover rounded-full border-1"
                src={item.image}
                alt="avatar image"
              />
              <h6 className="md:text-xl font-semibold ml-2 w-[60%]">
                {item.name}
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </h6>
            </div>
            <div className="w-full">
              <p className="my-4">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
        
      </div>
    </section>
  );
}

