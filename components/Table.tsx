import Link from "next/link";
import { NextRouter } from "next/router";
import React from "react";
import { Data, Tag } from "../src/data";

const tagToColor = (tag: Tag) => {
  switch (tag) {
    case Tag.Breakfast:
      return "bg-emerald-300";
    case Tag.Lunch:
      return "bg-teal-300";
    case Tag.Dinner:
      return "bg-amber-300";
    case Tag.Snaks:
      return "bg-orange-300";
  }
};

const HoldersTableTable = function HoldersTableTable(props: { data: Data[] }) {
  const tableStdPadding = " pl-2 pr-1 sm:pl-3 ";

  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className={`py-2 pl-2 pr-1  text-sm font-semibold text-gray-900 lg:min-w-[130px] text-left`}
          >
            Title
          </th>
          <th
            scope="col"
            className={`py-2 pl-2 pr-1  text-sm font-semibold text-gray-900 lg:min-w-[130px] text-left hover:bg-gray-200 cursor-pointer`}
            onClick={() => {
              // TODO
              // Add a dropdown here that let's the user select a tag to filter by
            }}
          >
            Tags
          </th>
          <th
            scope="col"
            className={`py-2 pl-2 pr-1  text-sm font-semibold text-gray-900 lg:min-w-[130px] text-left`}
          >
            Price
          </th>
          <th
            scope="col"
            className={`py-2 pl-2 pr-1  text-sm font-semibold text-gray-900 lg:min-w-[130px] text-left`}
          >
            Description
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {props.data.map((d, idx) => (
          <tr key={idx} className="hover:bg-accent_color-950 cursor-pointer">
            <td
              className={`whitespace-nowrap ${tableStdPadding} text-sm text-gray-500 text-left`}
            >
              {d.title}
            </td>

            <td
              className={`whitespace-nowrap ${tableStdPadding} text-sm text-gray-500 `}
            >
              <div className="flex flex-wrap justify-start items-center h-full ">
                {d.tags.map((tag, idx) => {
                  return (
                    <div
                      className={`mr-1  text-black rounded-lg my-0.5 py-1 px-2 ${tagToColor(
                        tag
                      )}`}
                      key={idx}
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
            </td>
            <td
              className={`whitespace-nowrap ${tableStdPadding} text-sm text-gray-500 text-left`}
            >
              {d.price}
            </td>

            <td
              className={`whitespace-nowrap ${tableStdPadding} text-sm text-gray-500 text-left`}
            >
              Some Description
            </td>
          </tr>
        ))}
        <tr></tr>
      </tbody>
    </table>
  );
};

export default HoldersTableTable;
