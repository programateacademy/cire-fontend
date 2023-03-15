import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import BackButton from '../atoms/BackButton'

const FormValidation = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm() 
  const customSubmit = (data) => {
      //console.log(data)
      alert("¡Validación exitosa!")
  }

  const [colorInput, setColorInput] = useState('#fff7f7')
  useEffect( ()=> {
      let words = watch('prueba')
      if(words === 'react'){setColorInput('#614ad3')}
  } )
  
  return (
    <>
    <div>
      <BackButton />
      </div>
        <h2>Completa la información</h2>
        <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
            <div className='form-control'>
                <label>Nombre completo:</label>
                <input type="text" {...register('name',{ 
                    required:true,
                    maxLength:100
                })} />
                {errors.name?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.name?.type === 'maxLength' && <small className='fail'>El máximo de caracteres es 5</small>}
            </div>
            <div className='form-control'>
                <label>Edad:</label>
                <input type="number" {...register('age', {
                    required:true,
                    min:5,
                    max:9
                })} />
                {errors.age?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.age?.type === 'min' && <small className='fail'>La edad mínima es de 5 años</small>}
                {errors.age?.type === 'max' && <small className='fail'>La edad máxima es de 9 años</small>}
            </div>
            
                
            <button type='submit'>Send</button>
        </form>

        <div>
        <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
        <h2 >ACADÉMICO</h2>
            <div className='form-control'>
            <h3>Trabaj en clase</h3>
                <label>Descripción</label>
                <input type="text" {...register('description',{ 
                    required:true,
                    maxLength:100
                })} />
                {errors.name?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.name?.type === 'maxLength' && <small className='fail'>El máximo de caracteres es 5</small>}
            </div>
            <div className='form-control'>{}
                <label>Plan de acción</label>
                <input type="text" {...register('actionPlan', {
                    required:true,
                    min:5,
                    max:9
                })} />
                {errors.age?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.age?.type === 'min' && <small className='fail'>La edad mínima es de 5 años</small>}
                {errors.age?.type === 'max' && <small className='fail'>La edad máxima es de 9 años</small>}
            </div>
            
                
            <button type='submit'>Send</button>
        </form>
        </div>
    </>
  )
}

export default FormValidation