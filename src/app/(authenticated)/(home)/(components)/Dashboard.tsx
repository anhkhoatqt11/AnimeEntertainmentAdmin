"use client";

import { MdMovieFilter, MdOutlineShowChart } from "react-icons/md";
import { IoTrendingUpOutline } from "react-icons/io5";
import { BiSolidUpArrow } from "react-icons/bi";
import { FaBookQuran } from "react-icons/fa6";
import { RiAdvertisementFill } from "react-icons/ri";
import { FaCoins } from "react-icons/fa6";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { DoughnutChart } from "./DoughnutChart";
import { LineChart } from "./LineChart";
import UserTable from "./UserTable";
Chart.register(CategoryScale);

type propsLineDate = {
  label: string;
  data: number[];
  borderColor: string;
  fill: boolean;
  tension: number;
};
export function Dashboard() {
  const [chartDataDoughnut, setChartDataDoughnut] = useState({
    labels: ["Decal", "Băng rôn", "Bảng hiệu", "Khác"],
    datasets: [
      {
        label: "Tổng thu",
        data: [100203020, 405064640, 24024241, 42423425],
        backgroundColor: [
          "rgb(255, 182, 150)",
          "rgb(19, 241, 164)",
          "rgb(252, 143, 156)",
          "rgb(6, 217, 225)",
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });

  const [chartDataLine, setChartDataLine] = useState({
    labels: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ],
    datasets: [
      {
        label: "Decal",
        data: [2, 1, 4, 7, 4, 6, 3, 2, 8, 9, 12, 6],
        borderColor: "rgb(255, 182, 150)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Băng rôn",
        data: [6, 4, 3, 6, 3, 7, 8, 3, 5, 2, 9, 6],
        borderColor: "rgb(19, 241, 164)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Bảng hiệu",
        data: [6, 4, 3, 4, 3, 6, 7, 8, 3, 5, 7, 5],
        borderColor: "rgb(252, 143, 156)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Khác",
        data: [6, 4, 3, 2, 4, 6, 7, 4, 6, 3, 2, 7],
        borderColor: "rgb(6, 217, 225)",
        fill: false,
        tension: 0.4,
      },
    ],
  });
  return (
    <div className="h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3">
        <div className="bg-white rounded-[16px] shadow h-fit p-6">
          <div className="flex flex-row justify-between items-center">
            <div className="rounded-full bg-blue-500/5 border-1 border-blue-500 h-10 w-10 flex justify-center items-center">
              <MdMovieFilter className="text-blue-500 w-6 h-6" />
            </div>
            <IoTrendingUpOutline className="text-blue-500 w-8 h-8" />
          </div>
          <div className="mt-6 flex flex-row gap-2 items-end">
            <div className="font-semibold text-[24px]">$100.000</div>
            <BiSolidUpArrow className="text-emerald-400 w-3 h-3 mb-2" />
            <div className="text-[12px] mb-1">12%</div>
          </div>
          <div className="text-gray-500 text-sm">Số lượng anime phát hành</div>
        </div>
        <div className="bg-white rounded-[16px] shadow h-fit p-6">
          <div className="flex flex-row justify-between items-center">
            <div className="rounded-full bg-emerald-400/5 border-1 border-emerald-400 h-10 w-10 flex justify-center items-center">
              <FaBookQuran className="text-emerald-400 w-5 h-5" />
            </div>
            <IoTrendingUpOutline className="text-emerald-400 w-8 h-8" />
          </div>
          <div className="mt-6 flex flex-row gap-2 items-end">
            <div className="font-semibold text-[24px]">$100.000</div>
            <BiSolidUpArrow className="text-emerald-400 w-3 h-3 mb-2" />
            <div className="text-[12px] mb-1">12%</div>
          </div>
          <div className="text-gray-500 text-sm">Số lượng truyện phát hành</div>
        </div>
        <div className="bg-white rounded-[16px] shadow h-fit p-6">
          <div className="flex flex-row justify-between items-center">
            <div className="rounded-full bg-fuchsia-500/5 border-1 border-fuchsia-500 h-10 w-10 flex justify-center items-center">
              <RiAdvertisementFill className="text-fuchsia-500 w-6 h-6" />
            </div>
            <IoTrendingUpOutline className="text-fuchsia-500 w-8 h-8" />
          </div>
          <div className="mt-6 flex flex-row gap-2 items-end">
            <div className="font-semibold text-[24px]">$100.000</div>
            <BiSolidUpArrow className="text-emerald-400 w-3 h-3 mb-2" />
            <div className="text-[12px] mb-1">12%</div>
          </div>
          <div className="text-gray-500 text-sm">Số lượng quảng cáo</div>
        </div>
        <div className="bg-white rounded-[16px] shadow h-fit p-6">
          <div className="flex flex-row justify-between items-center">
            <div className="rounded-full bg-yellow-400/5 border-1 border-yellow-400 h-10 w-10 flex justify-center items-center">
              <FaCoins className="text-yellow-400 w-6 h-6" />
            </div>
            <IoTrendingUpOutline className="text-yellow-400 w-8 h-8" />
          </div>
          <div className="mt-6 flex flex-row gap-2 items-end">
            <div className="font-semibold text-[24px]">$100.000</div>
            <BiSolidUpArrow className="text-emerald-400 w-3 h-3 mb-2" />
            <div className="text-[12px] mb-1">12%</div>
          </div>
          <div className="text-gray-500 text-sm">Doanh thu tháng</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        {/* <LineChart chartData={chartDataLine} />
        <DoughnutChart chartData={chartDataDoughnut} /> */}
        {/* </div> */}
      </div>
      <div className="font-medium text-xl p-3">Customers</div>
      <UserTable />
    </div>
  );
}
