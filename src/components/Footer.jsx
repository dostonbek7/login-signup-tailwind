import React from 'react'

function Footer() {
  return (
    <div className='bg-neutral-400 py-4 text-center font-medium dark:bg-slate-800 dark:text-slate-200'>
      <p>All right reserved. {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer