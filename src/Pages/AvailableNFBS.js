import React from "react";

import Card from "../components/Sales/Card";
import Dark from "../Media/Cartificate-Dark.png";
import Light from "../Media/NFB Certificate (3)@2x.png";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export default function AvailableNFBS() {
  const [items, setitems] = useState([]);
  const itemsPerPage = 8;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchApi = await fetch("http://3.138.238.97:8080/availableNFB");
        const datas = await fetchApi.json();
        setitems(datas);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items.length]);

  const formatTime = (isoString) => {
    var b = isoString.split(/\D+/);
    return new Date(
      Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6])
    ).toString();
  };

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="">
        <ReactPaginate
          breakLabel="..."
          pageCount={pageCount}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          className="text-white flex justify-end space-x-2 items-center sm:space-x-[3px] "
          previousLinkClassName="bg-cyan-200 text-blue-900 py-1 px-2 rounded-lg sm:text-sm font-bold hover:bg-teal-300"
          nextLinkClassName="bg-cyan-200 text-blue-900 px-2 py-1 rounded-lg sm:text-sm font-bold hover:bg-teal-300"
          pageLinkClassName="bg-white text-blue-500 px-2 py-1 rounded sm:px-1 sm:text-sm sm:hidden hover:bg-gray-600 hover:text-black"
          renderOnZeroPageCount={null}
        />
      </div>
      <div className="text-white grid grid-cols-4 lg:grid-cols-2 justify-center xl:grid-cols-3 sm:grid-cols-1">
        {items.length != 0 &&
          currentItems.map((e, i) => {
            return (
              <div key={i}>
                <Card
                  img={e.image == "Dark" ? Dark : Light}
                  price={e.price}
                  bond={e.bondId}
                  time={formatTime(e.timestamp)}
                  button="BUY"
                />
              </div>
            );
          })}
      </div>
    </>
  );
}
