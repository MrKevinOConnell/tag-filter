import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Tag } from '../src/data'
const CustomDialog = function HoldersTableTable(props: { onApply:(filters: Tag[]) => void, isOpen: boolean, onClose: () => void }) {
  const [filterTags, setFilterTags] = useState<Tag[]>([]);  
  const onClickTag = (filter: Tag) => {
    if(!filterTags.includes(filter)) {
    setFilterTags([...filterTags,filter])
    }
    else {
      setFilterTags(filterTags.filter(tag => tag !== filter))
    }
  }
  const handleOnClose = () => {
        setFilterTags([])
        props.onClose && props.onClose() 
      }  

      const handleOnApply = () => {
        props.onApply && props.onApply(filterTags)
        handleOnClose()
       }  
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => handleOnClose()}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg mb-5 font-medium text-center justify-center text-gray-900"
                >
                  Choose your filters
                </Dialog.Title>

                <div className="mt-4">
                  {Object.values(Tag).map(tag => { return (
<button className={`inline-flex m-2 justify-center rounded-md border border-transparent bg-blue-${filterTags.includes(tag) ? "100" : "300"} px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`} onClick={() => {
  onClickTag(tag)
}}>{tag}</button>)
  })}
  
                </div>
                <button className="inline-flex mt-6 justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-medium font-medium hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={() => handleOnApply()}>Apply</button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
    )
  }

  export default CustomDialog