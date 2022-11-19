// import React from 'react'

// function About() {
//   return (
//     <div>About</div>
//   )
// }

// export default About
import React from 'react';


export default function App() {
  

  return (
    <>
    <header>
      
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://www.mexatk.com/wp-content/uploads/2016/08/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D9%84%D9%88%D9%86-%D8%A7%D8%B3%D9%88%D8%AF-2.jpg')", height: '400px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-info'>
              <h1 className='mb-3 '>من نحـن؟</h1>
              
              
            </div>
          </div>
        </div>
      </div>
    </header>
   
  <div className="container">

    <div className="section section-padding pb-0 " style={{ color: "black", marginTop: "100px" }}>
      <div className="">
        <div className="row learts-mb-n30">

          <div className="col-md-6 col-12 align-self-center learts-mb-30 ">
            <div className="about-us3">
              <h2 className="title">مـن نحـن؟</h2>
              <div className="desc">
                <p className="">موقع قرآن.كوم هو صدقة جارية. نأمل أن نسهل على الجميع قراءة القرآن الكريم ودراسته وتعلمه. القرآن الكريم له أسماء عديدة منها القرآن الكريم والكتاب والفرقان والموعظة والذكر والنور.يهدف الموقع إلى تسهيل قراءة القرآن ودراسته وتعلمه. المشروع مفتوح المصدر،</p>
              </div>

            </div>
          </div>
          <div className="col-md-6 col-12 text-center learts-mb-30 ">
            <img src="https://images.pexels.com/photos/8164749/pexels-photo-8164749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="img-fluid" />
          </div>

        </div>
      </div>

    </div>
    <br />
    <br />
    <br />

    <div className="section section-padding pb-0 mt5 " >
      <div className="">
        <div className="row learts-mb-n30">
          <div className=" col-md-6 col-12 align-self-center learts-mb-30">
            <img src="https://www.islamicnetwork.net/wp-content/uploads/2020/06/Islamic-Network-Logo.png" alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 col-12 text-center learts-mb-30" >
            <div className="about-us3" style={{ color: "black", marginTop: "100px" }}>

              <h2 className="title">الشكر موصول إلى</h2>
              <div className="desc">
                <p>

لم يكن هذا المشروع ممكنًا بدون العديد من المكتبات والمشاريع مفتوحة المصدر التي استخدمناها:

</p>
<ul>
<li> <a href='https://alquran.cloud/api'>alquran.cloud/api</a></li>
<li><a href='https://github.com/islamic-network'>islamic-network</a></li>
</ul>
              </div>

            </div>
          </div>


        </div>
      </div>
    </div>
  

 

    </div>


    
    </>

  );
}
