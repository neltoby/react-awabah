import { Chart } from "react-google-charts";
import { Button } from "@/components/Button"

const data = [
  ["Time", "Personal Subscribers", "Business Subscribers"],
  ["12am", 15, 10],
  ["1am", 12, 7],
  ["2am", 13, 9],
  ["3am", 10, 8],
  ["4am", 11, 5],
  ["5am", 8, 7],
  ["6am", 9, 9],
  ["7am", 11, 5],
  ["8am", 10, 7],
  ["9am", 9, 8],
  ["10am", 10, 6],
  ["11am", 12, 8],
  ["12pm", 11, 7],
  ["1pm", 9, 5],
  ["2pm", 7, 6],
  ["3pm", 10, 5],
  ["4pm", 12, 4],
  ["5pm", 3, 7],
  ["6pm", 11, 6],
  ["7pm", 9, 7],
  ["8pm", 9, 5],
  ["9pm", 8, 6],
  ["10pm", 7, 7],
];

const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

const Graph = () => {
  return (
    <div className='mt-6 box-border pb-8 mb-2 h-full flex flex-col justify-between'>
      <div className='grid grid-cols-5'>
        <div className="col-start-1 col-span-2">
          <span className='text-gray-800 text-lg font-semibold leading-relaxed'> Subscription Trend</span>
          <span className='text-neutral-500 text-sm font-medium leading-tight ml-4 px-2 py-[0.75rem] rounded border border-solid border-gray-200'>4th August, 2023</span>
        </div>
        <div className="col-start-4 col-span-2 flex justify-end">
          <div className='bg-gray-100 text-xs text-gray-400 rounded-md p-[5px]'>
            <Button className="py-[6px] px-[0.75rem] rounded-sm bg-white text-black" label='Today' />
            <Button className="py-[6px] px-[0.75rem]" label='Week' />
            <Button className="py-[6px] px-[0.75rem]" label='Month' />
            <Button className="py-[6px] px-[0.75rem]" label='Custom' />
          </div>
        </div>
      </div>
      <div className="overflow-hidden h-[18rem] box-border">
        <Chart
          chartType="LineChart"
          width="65rem"
          height="100%"
          data={data}
          options={options}
        />
      </div>
    </div>
  )
}

export default Graph