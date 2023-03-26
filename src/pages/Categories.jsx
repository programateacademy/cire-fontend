import React from 'react'
import cincoaños from '../assets/images/categories/categories5.svg'
import seisaños from '../assets/images/categories/categories6.svg'
import sieteaños from '../assets/images/categories/categories7.svg'
import ochoaños from '../assets/images/categories/categories8.svg'
import nueveteaños from '../assets/images/categories/categories9.svg'
import Navbar from '../components/organism/NavbarAdmin'
export const Categories = () => {
  return (
    
 <div className='bg-indigo-100 h-screen'>
<Navbar />
<div className='text-xl font-semibold font-sans text-zinc-600 text-center'>Selecciona una categoría para ver la información</div>

<div class="grid grid-rows-2 grid-flow-col gap-2 justify-center mx-5 mt-20">
  <div>
    <button> <a href="/list5years"> <img src={cincoaños} alt="" /></a>
   
    </button>
  </div>

  <div>
    <button> <a href='/list7years'>
    <img src={sieteaños} alt="" /></a>
    </button>
  </div>

  <div>
    <button> <a href='/list6years'>
    <img  src={seisaños} alt="" /></a>
    </button>
  </div>

  <div>
    <button> <a href='/list8years'>
    <img src={ochoaños} alt="" /></a>
    </button>
  </div>

</div>

<div className='bg-indigo-100 grid grid-rows-1 grid-flow-col gap-2 mt-1 px-24 justify-center'>
<div>
    <button> <a href='/list9years'>
    <img src={nueveteaños} alt="" /></a>
    </button>
  </div>
</div>

 </div>
  )
}
export default Categories;
