import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React from 'react'
import product_data from '../productMenuData'

const Product = ({ setMobileScreen, close }) => {
  return (
    <div className=' dark:bg-black bg-white relative pb-40 px-4'>
      <span className='font-bold dark:text-white cursor-pointer flex items-center' onClick={() => setMobileScreen('')}>
        <ChevronDownIcon className="h-6 w-6 rotate-90" aria-hidden="true" />
        back</span>
      <br />
      <div className=" w-full px-3 mx-auto h-full">
        <div className='space-y-6 '>
          <div className='space-y-1 text-center dark:text-white'>
            <h4 className='text-lg  font-semibold text-center'>
              {product_data.platform.title}
            </h4>
            <p className='text-center'>
              {product_data.platform.description}
            </p>
          </div>

          {/* <div className='flex flex-col items-center justify-center gap-3'>
            {product_data.platform.links.map((item) => {
              return (
                <div
                  className='w-full'>
                  <Link href={item.url}
                    onClick={() => {
                      close()
                      setMobileScreen('')
                    }}
                  >
                    <div className="flex shadow justify-between items-center w-full border border-gray-400/80 py-4 p-3 rounded-sm bg-slate-100">
                      <p className="text-lg font-medium ">   {item.title}</p>
                      <button>
                        <ChevronDownIcon className="h-8 w-8 -rotate-90" aria-hidden="true" />
                      </button>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div> */}

          <div className='flex flex-col gap-y-6 w-full'>
            <div className='flex flex-col w-full gap-4'>
              {product_data.hubs.map((hub, index) => (

                <Link
                  href={hub.link.url} key={index}
                  onClick={() => {
                    close()
                    setMobileScreen('')
                  }}
                >
                  <div className='p-3 flex justify-between gap-x-2 bg-white border-gray-400/80 shadow border rounded-sm w-full'>
                    <div className='flex gap-4'>
                      <div className="pt-1 text-primary">
                        {hub.icon}
                      </div>
                      <div className='space-y-2'>
                        <h5 className="font-semibold "> {hub.title}</h5>
                        <p>{hub.description}</p>
                      </div>
                    </div>
                    <button>
                      <ChevronDownIcon className="h-8 w-8 -rotate-90" aria-hidden="true" />
                    </button>
                  </div>
                </Link>
              ))}

            </div>


            {/* <div className="flex flex-col items-center w-full mx-auto gap-4 justify-center pt-6">

              {product_data.footer.map((item, index) => (
                <Link
                  href={item.link.url} key={index} className='w-full'
                  onClick={() => {
                    close()
                    setMobileScreen('')
                  }}
                >
                  <div className='p-3  flex justify-between bg-white border-gray-400/80  shadow border  rounded-sm w-full'>
                    <div>
                      <h5 className="font-semibold  ">    {item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                    <button>
                      <ChevronDownIcon className="h-8 w-8 -rotate-90" aria-hidden="true" />
                    </button>
                  </div>
                </Link>
              ))
              }
            </div> */}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Product