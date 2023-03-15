import React from 'react'
import cincoaños from '../assets/categories/categories5.svg'
import seisaños from '../assets/categories/categories6.svg'
import sieteaños from '../assets/categories/categories7.svg'
import ochoaños from '../assets/categories/categories8.svg'
import nueveteaños from '../assets/categories/categories9.svg'

export const Categories = () => {
  return (
 <div className='bg-indigo-100 h-screen'>

<div className='text-xl font-semibold font-sans text-zinc-600 text-center'>Selecciona una categoría para ver la información</div>

<div class="grid grid-rows-2 grid-flow-col gap-2 justify-center mx-5 mt-20">
  <div>
    <button> <a href="/list5years"> <img src={cincoaños} alt="" /></a>
   
    </button>
  </div>

  <div>
    <button>
    <img src={sieteaños} alt="" />
    </button>
  </div>

  <div>
    <button>
    <img  src={seisaños} alt="" />
    </button>
  </div>

  <div>
    <button>
    <img src={ochoaños} alt="" />
    </button>
  </div>

</div>

<div className='bg-indigo-100 grid grid-rows-1 grid-flow-col gap-2 mt-1 px-24 justify-center'>
<div>
    <button>
    <img src={nueveteaños} alt="" />
    </button>
  </div>
</div>

 </div>
  )
}
