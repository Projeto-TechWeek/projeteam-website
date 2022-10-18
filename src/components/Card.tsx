
import { TextField } from "@mui/material"


export function Card(){
  
  return(
    <>
        <div className='p-6 bg-Secundary text-gray-300 md:h-[400px] md:w-[400px] rounded flex flex-col justify-around'>
          <div className='font-bold text-4xl text-white flex justify-center'>Login</div>
          <div className="relative focus-within:text-indigo-300">
              <input type="text" id="floating_outlined" className="block bg-transparent border-2 outline-none focus:border-indigo-300 rounded p-2 w-full text-[#ededed]" placeholder=" " />
              <label htmlFor="floating_outlined" className="absolute transform -translate-y-14 translate-x-8 bg-Secundary px-2">Floating outlined</label>
          </div>
        </div>
    </>
  )
}