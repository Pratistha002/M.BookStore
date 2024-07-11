import React from 'react';
import Cards from './Cards';
import list from "../../public/list.json";
import {Link} from "react-router-dom";

function Course() {
  return (<>
    <div className="max-w-screen-2xl container mx-auto md:px-20 py-4">

<div className='mt-28 items-center justify-center text-center'>
<h1 className='text-2xl  md:text-4xl'> We're delighted to have you here<span className='text-red-400'> Bibliophiles📔😊</span> </h1>
<p className=" mt-12"> All your Favorite , Adventurous, Thriller, Entertaining , Knowledgable ,Romantic ,Fictional and non-Fictional books are here . 
  <br/>All yours !!😊📖 explore your self in the world of books and do friendship with them . </p>



  {/* Button */}
<Link to="/">
  <button className="bg-red-500 text-white mt-6 px-4 py-2 rounded-md hover:bg-red-800 duration-300">Back</button>
  </Link>
</div>
<div className="mt-12 grid grid-flow-cols-1 md: grid-cols-4">
  {
list.map((item)=>(
  <Cards key={item.id} item={item} />
))
  }
</div>

    </div>


    </>
  );
}

export default Course;