import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  Brush,
} from "recharts";
import CustomToolTip from "./CustomToolTip";
import styled from "styled-components";

const data = [
  {
    name: "Jan",
    uv: 6000,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 16000,
    amt: 40000,
  },
  {
    name: "Mar",
    uv: 3000,
    amt: 2400,
  },
  {
    name: "April",
    uv: 27000,
    amt: 2400,
  },
  {
    name: "Mei",
    uv: 7000,
    amt: 2400,
  },
  {
    name: "Jun",
    uv: 45000,
    amt: 2400,
  },
  {
    name: "Jul",
    uv: 9500,
    amt: 2400,
  },
  {
    name: "Aug",
    uv: 22000,
    amt: 2400,
  },
  {
    name: "Sep",
    uv: 33000,
    amt: 2400,
  },
  {
    name: "Oct",
    uv: 4000,
    amt: 2400,
  },
  {
    name: "Nov",
    uv: 30000,
    amt: 2400,
  },
  {
    name: "Dec",
    uv: 26000,
    amt: 2400,
  },
];

const SalesChart = () => {

  const [barGraphData, setBarGraphData] = useState({});
  const [focusBar, setFocusBar] = useState(null);

  return (
    <ResponsiveContainerMain width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        onMouseMove={(state) => {
          if (state.isTooltipActive) {
            setFocusBar(state.activeTooltipIndex);
          } else {
            setFocusBar(null);
          }
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 14, color: "#525252" }}
          tickMargin={10}
          stroke=""
        />
        <YAxis
          domain={[0, 50000]}
          ticks={[0, 5000, 10000, 20000, 30000, 40000, 50000]}
          tick={{ fontSize: 14, color: "#525252" }}
        />
        <Tooltip
          position={{ y: barGraphData.y }}
          offset={-45}
          cursor={false}
          contentStyle={{
            textAlign: "center",
            background: "black",
            color: "white",
          }}
          content={<CustomToolTip active={false} payload={[]} label="" />}
        />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="rgba(52, 202, 165, 1)"
              stopOpacity={0.6}
            />
            <stop
              offset="95%"
              stopColor="rgba(52, 202, 165, 0)"
              stopOpacity={0.2}
            />
          </linearGradient>
        </defs>
        {/* <Legend /> */}

        {window.innerWidth > 601 ? null : (
          <Bar
            dataKey="uv"
            name={" "}
            fill="url(#colorUv)"
            barSize={28}
            radius={[20, 20, 0, 0]}
            onMouseOver={(data) => {
              setBarGraphData(data);
            }}
            onMouseLeave={(data) => {
              setBarGraphData(data);
            }}
          ></Bar>
        )}
        {window.innerWidth > 601 ? null : (
          <Brush startIndex={8}>
            <Bar
              dataKey="uv"
              name={" "}
              fill="url(#colorUv)"
              barSize={28}
              radius={[20, 20, 0, 0]}
              onMouseOver={(data) => {
                setBarGraphData(data);
              }}
              onMouseLeave={(data) => {
                setBarGraphData(data);
              }}
            ></Bar>
          </Brush>
        )}
        {window.innerWidth < 601 ? null : (
          <Bar
            dataKey="uv"
            name={" "}
            fill="url(#colorUv)"
            barSize={28}
            radius={[20, 20, 0, 0]}
            onMouseOver={(data) => {
              setBarGraphData(data);
            }}
            onMouseLeave={(data) => {
              setBarGraphData(data);
            }}
          ></Bar>
        )}
      </BarChart>
    </ResponsiveContainerMain>
  );
};
export default SalesChart;

const Div1 = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const Div = styled(Bar)`
  /* &&{ */
  /* display:flex;
         @media screen and (max-width: 600px){
        display:none; */

  /* } */
  /* } */
`;

const ResponsiveContainerMain = styled(ResponsiveContainer)`
  && {
    /* background-color: red; */
    overflow-x: scroll;
    @media screen and (max-width: 600px) {
      overflow-x: scroll;
      width: 100%;
    }
  }
`;
