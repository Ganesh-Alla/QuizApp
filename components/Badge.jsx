import React from 'react'

const Badge = ({num,selected,answers,handleQuestion}) => {
  return (
    <button type="button" onClick={()=>handleQuestion(num-1)}
    className={
      (num === selected
        ? answers.includes(num)?"border-blue-600 text-xl border-4 bg-green-600 text-white rounded-bl-xl rounded-br-xl p-1 m-2 leading-none flex items-center":'bg-blue-600 text-xl text-white rounded-bl-xl rounded-br-xl p-2 m-2 leading-none flex items-center'
        : answers.includes(num)?"bg-green-600 text-xl text-white rounded-bl-xl rounded-br-xl p-2 m-2 leading-none flex items-center":'bg-blue-400 text-xl text-white rounded-bl-xl rounded-br-xl p-2 m-2 leading-none flex items-center')
    }>
    {num}
</button>
  )
}

export default Badge