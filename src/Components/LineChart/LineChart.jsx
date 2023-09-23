// import { LineChart as LChart, Line } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineChart = () => {
  const studentData = [
    {
      id: 1,
      studentName: "John Smith",
      mathMarks: 85,
      physicsMarks: 78,
      chemistryMarks: 92,
    },
    {
      id: 2,
      studentName: "Emily Johnson",
      mathMarks: 78,
      physicsMarks: 85,
      chemistryMarks: 89,
    },
    {
      id: 3,
      studentName: "David Wilson",
      mathMarks: 92,
      physicsMarks: 88,
      chemistryMarks: 94,
    },
    {
      id: 4,
      studentName: "Sophia Brown",
      mathMarks: 88,
      physicsMarks: 76,
      chemistryMarks: 82,
    },
    {
      id: 5,
      studentName: "James Davis",
      mathMarks: 76,
      physicsMarks: 90,
      chemistryMarks: 85,
    },
    {
      id: 6,
      studentName: "Olivia Taylor",
      mathMarks: 94,
      physicsMarks: 82,
      chemistryMarks: 91,
    },
    {
      id: 7,
      studentName: "Michael Anderson",
      mathMarks: 80,
      physicsMarks: 76,
      chemistryMarks: 87,
    },
    {
      id: 8,
      studentName: "Emma Thomas",
      mathMarks: 89,
      physicsMarks: 94,
      chemistryMarks: 79,
    },
    {
      id: 9,
      studentName: "Daniel Lee",
      mathMarks: 72,
      physicsMarks: 83,
      chemistryMarks: 88,
    },
    {
      id: 10,
      studentName: "Ava Martinez",
      mathMarks: 91,
      physicsMarks: 89,
      chemistryMarks: 92,
    },
  ];

  return (
    <div width="100%" height="100%">
      <BarChart
        width={900}
        height={500}
        data={studentData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="mathMarks" fill="#8884d8"></Bar>
        <Bar dataKey="physicsMarks" fill="#82ca9d"></Bar>
        <Bar dataKey="chemistryMarks" fill="#ffc658"></Bar>
      </BarChart>
    </div>
  );
};

export default LineChart;
