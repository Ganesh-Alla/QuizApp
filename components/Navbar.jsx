"use client"

const NavBar = () => {

  return (
    <>
{/* <nav className="sticky top-0 bg-blue-100 border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">I S T E</span>
    </div>
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CODE COMBAT</span>
    </div>
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NIPUNA</span>
    </div>
  </div>
</nav> */}
<nav className="bg-blue-800 text-white border-gray-200 p-4 fixed w-full top-0 z-50">
    <div className="container mx-auto">
        <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">I S T E</span>
    </div>
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CODE COMBAT</span>
    </div>
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NIPUNA</span>
    </div>
        </div>
    </div>
</nav>
  </>
  )
}

export default NavBar