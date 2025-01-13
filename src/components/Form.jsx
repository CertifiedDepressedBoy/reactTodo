import React, { useRef } from 'react'

const Form = ({submit}) => {
    const ref = useRef(null);

    const submitHandling = () => {
        submit(ref)
        ref.current.value = ''
    }

  return (
    <div>
        <h3 className='fw-bold mb-5 text-center'>React ToDo-List</h3>
        <div className="row">
            <div className="col">
                <input type="text" ref={ref} className='form-control' placeholder='Enter Task...' />
            </div>
            <div className="col">
                <button type='button' onClick={ () => submitHandling() } className='btn btn-primary w-50'>Create</button>
            </div>
        </div>
    </div>
  )
}

export default Form
