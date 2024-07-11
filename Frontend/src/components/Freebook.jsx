import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json";
import Cards from "./Cards";





function Freebook() {
  {/* Using react code to run free books */}
    const filterData = list.filter((data)=>data.category==="Free");

    
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
   
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 py-4 ">
<div>
<h1 className=" font-semibold text-xl pb-2 text-teal-400"> Free Offered Courses</h1>
<p> Start your book by brainstorming ideas, outlining the plot or structure, and setting aside dedicated time to write.
   Begin with a strong hook or premise.
Books are used for education, entertainment, self-improvement, and research. 
  They provide knowledge, insights, and offer an escape from reality.</p>
</div>



    <div >
    <Slider {...settings} >
    { filterData.map((item)=>(
          <Cards item={item} key={item.id}/>
    ))}
      </Slider>
    </div>
    </div>
    </>
  );
}

export default Freebook;
