import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React from 'react'

const Resources = ({ setMobileScreen, resources_data, close }) => {
  return (
    <div className=' dark:bg-black bg-white relative pb-40 px-4'>
      <span className='font-bold dark:text-white cursor-pointer flex items-center pt-4' onClick={() => setMobileScreen('')}>
        <ChevronDownIcon className="h-6 w-6 rotate-90" aria-hidden="true" />
        back</span>
      <br />

      {resources_data.items.map((item) => {
        return (
          <div>
            <h1 className='text-center font-semibold text-xl py-4 dark:text-white'>{item.title}</h1>
            <div className='flex flex-col gap-2'>
              {item.items.map((subItem) => {
                return (
                  <div >
                    <div
                      className='w-full'
                    >
                      <Link
                        href={subItem.url}
                        passHref
                        onClick={() => {
                          close()
                          setMobileScreen('')
                        }}
                      >
                        <div className="flex shadow justify-between items-center w-full border border-gray-400/80 p-3 py-4 rounded-sm bg-slate-100">
                          <p className="text-lg font-medium "> {subItem.title}</p>
                          <button>
                            <ChevronDownIcon className="h-8 w-8 -rotate-90" aria-hidden="true" />
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Resources