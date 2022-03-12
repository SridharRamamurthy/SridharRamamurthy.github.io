
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, LabelList } from "recharts";

const RADIAN = Math.PI / 180;


const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    startAngle,
    endAngle,
    innerRadius,
    outerRadius,
    index,
    payload,
    name,
    ...props
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const ar = innerRadius + (outerRadius - innerRadius) * 0.2;
    const ax = cx + ar * Math.cos(-midAngle * RADIAN);
    const ay = cy + ar * Math.sin(-midAngle * RADIAN);

    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius - 34) * cos;
    const sy = cy + (outerRadius - 34) * sin;

    let datalabel = name

    return (
        <React.Fragment>
          
            <text
                width="500"
                x={sx}
                y={sy}
                angle={90 - midAngle}
                textAnchor="middle"
                verticalAnchor="end"
                fontSize={10}
                fontWeight={400}
                fill="#FFFFFF"
                gradientTransform=""
                width={12}
                cursor="pointer"
                fontWeight="Bold"
            >
                {datalabel}
            </text>
        </React.Fragment>
    );
};

const renderCustomizedIcon = ({
    cx,
    cy,
    midAngle,
    startAngle,
    endAngle,
    innerRadius,
    outerRadius,
    index,
    payload,
    name,
    ...props
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const ar = innerRadius + (outerRadius - innerRadius) * 0.2;
    const ax = cx + ar * Math.cos(-midAngle * RADIAN);
    const ay = cy + ar * Math.sin(-midAngle * RADIAN);

    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius - 34) * cos;
    const sy = cy + (outerRadius - 34) * sin;

    let datalabel = name

    return (
        <React.Fragment>
            <text
                width="500"
                x={x}
                y={y}
                angle={90 - midAngle}
                textAnchor="start"
                verticalAnchor="end"
                fontSize={10}
                fontWeight={400}
                fill="#FFFFFF"
                gradientTransform=""
                width={12}
                cursor="pointer"
                fontWeight="Bold"
            >
                {datalabel.slice(0, 1)}

            </text>

        </React.Fragment>

    );
};
const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value,
        name,
        labelValue,
        type
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} >
                {payload.name}
            </text>

            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#333"
            >

                {
                    type ?
                        `(${labelValue} ${type})`
                        : `(${labelValue})`}
            </text>

        </g>
    );
};

export default function ReChart(props: any) {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    return (
        <PieChart width={550} height={400}>
            <Pie
                paddingAngle={1}
                data={props.innerData}
                dataKey="value"
                nameKey="name"
                cx="275"
                cy="200"
                innerRadius={60}
                outerRadius={120}
                fill={"transparent"}
                isAnimationActive={false}
                // label={(entry) => entry.name}
                label={renderCustomizedLabel}
                labelLine={false}
            >

            </Pie>
            <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                isAnimationActive={false}
                label={renderCustomizedIcon}
                labelLine={false}
                paddingAngle={1}
                data={props.data}
                cx={275}
                cy={200}
                innerRadius={130}
                outerRadius={160}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={onPieEnter}

            >

            </Pie>
        </PieChart>
    );
}
