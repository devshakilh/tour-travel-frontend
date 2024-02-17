'use client'

import Image from 'next/image'
import travelNewsImg1 from '../assets/images/latest-travel1.png'
import travelNewsImg2 from '../assets/images/latest-travel2.png'
import travelNewsImg3 from '../assets/images/latest-travel3.png'
import travelNewsImg4 from '../assets/images/latest-travel4.png'
import travelNewsImg5 from '../assets/images/latest-travel5-big.png';
import { useState } from 'react'
// import NewsDetails from './NewsDetails';
import Link from 'next/link'



const itemsPerPage = 4;


const blogs = [
  {
id:1,
title:'Revolutionising the travel industryone partnership at a time',
img: travelNewsImg1,
read:'5 min read'

  },
  {
id:2,
title:'Revolutionising the travel industryone partnership at a time',
img: travelNewsImg1,
read:'5 min read'

  },
  {
id:3,
title:'Revolutionising the travel industryone partnership at a time',
img: travelNewsImg1,
read:'5 min read'

  },
  {
id:4,
title:'Revolutionising the travel industryone partnership at a time',
img: travelNewsImg1,
read:'5 min read'

  },
  {
id:5,
title:'Revolutionising the travel industryone partnership at a time',
img: travelNewsImg1,
read:'5 min read'

  },
  {
id:6,
title:'Revolutionising the travel industryone partnership at a time',
img: travelNewsImg1,
read:'5 min read'

  },
  {
id:7,
title:'Revolutionising the travel industryone partnership at a time',
img: travelNewsImg1,
read:'5 min read'

  },
  {
id:8,
title:'There are many variations of passages available but',
img: travelNewsImg5,
read:'5 min read',
desc1:'It is a long established fact that a reader will be distracted by the readable content of.The point of using Lorem Ipsum is that it has a more',
desc2:'It is a long established fact that a reader will be distracted by the readable long established fact that a reader will be distracted content of a page when looking at its layout.',


  },
]


const LatestTravelNews = () => {
 

  return (
    <>
 <section>
      <div className="container">
        {/* <!-- Section Heading --> */}


        <div className="section_heading_center">
          <h2>Latest travel news</h2>

        </div>

        <div className="latest-travel-part">
{/* {blogs?.map((blog)=> (<NewsDetails key={blog.id} blog={blog}/>))} */}

<div>
{blogs?.slice(0,6)?.map((blog) => (<div key={blog.id} className="news-div1" >

<div className="latest-travel-div1">
  <div className="home_news_img">
    <Link  href="#"><Image src={blog.img} alt="img"/></Link>
  </div>
  <div className="home_news_content">
    <h3><Link href="#">{blog.title}</Link></h3>
    <p><Link href="#">26 Oct 2021</Link> <span> <i className="fas fa-circle"></i>5min
        read</span> </p>
  </div>
</div>

</div> 
 ))}
</div>


  
  <div>
  {blogs?.slice(7)?.map((blog)=>( <div  key={blog.id}className="news-div2">

<div className="new-big-img">
  <Link href="#"><Image src={blog.img} alt="img"/></Link>
</div>
<h3><Link href="#">{blog.title}</Link> </h3>
<p>{blog.desc1}</p>
<p>{blog.desc2}</p>
<Link href="#">Read full article <i className="fas fa-arrow-right"></i></Link>

</div>))}
 
  </div>

          
 
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestTravelNews