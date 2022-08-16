import type { NextPage } from "next";
import { useEffect, useState } from "react";
import CustomDialog from "../components/Dialog";
import Table from "../components/Table";
import data, { Data, Tag } from "../src/data";

const Home: NextPage = () => {
  const [filterTags, setFilterTags] = useState<Tag[]>([]);
  const [currentData, setCurrentData] = useState(data)
  const [showMenu, setShowMenu] = useState(false)

useEffect(() => {
 applyFilters()
},[filterTags])

const removeFilter = (filter: Tag) => {
setFilterTags(filterTags.filter((f) => f !== filter))
}

const applyFilters = () => {
  const filteredData = data.filter(item => { return (
    filterTags.length ?  filterTags.every(filter => item.tags.includes(filter)) : true )})
    setCurrentData(filteredData)
  }

const onClickTags = () => {
  setShowMenu(true)
  }

const onSortChange = (isSorted: boolean) => {
  if(isSorted) {
    const data = currentData.sort((a,b) => {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    })
    console.log("DATA",data)
    setCurrentData(data)
  }
  else {
    applyFilters()
  }
    }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-3xl mx-auto">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Menu</h1>
            <p className="mt-2 text-md text-gray-700">
              A list of all dishes we serve.
            </p>
            <div className="mt-2 text-md text-gray-700">
              Here the select tag should be shown, e.g. <br />
            </div>

            {/* Only show selected Tag below! */}
            <div className="flex mt-8">
            { filterTags && filterTags.map(filter => {return (

 <div
   className={`mr-1  text-black rounded-lg my-0.5 py-1 px-2 border border-gray-400`}
 >
   <button onClick={() => {
     removeFilter(filter)}} >
   {filter}
   </button>
 </div>
            )}) }
          </div> 
          </div>
        </div>
        <div className="mt-2 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <CustomDialog isOpen={showMenu} onApply={(tags) => setFilterTags(tags)} onClose={() => setShowMenu(false)} />
              <Table data={currentData} onTagsClick={() => setShowMenu(true)} onClickSort={(isSorted) => {
                  onSortChange(isSorted)
                }}></Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
