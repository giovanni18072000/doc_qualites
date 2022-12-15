// import React, { Component } from "react";
// import { render } from "react-dom";
// import { Bar } from "react-chartjs-2";
// import { UserData } from './UserData.js';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: {
//         labels: UserData.map(o => o.year),
//         datasets: [
//           {
//             label: 'Users Gained',
//             backgroundColor: 'rgba(0, 255, 0, 0.2)',
//             borderColor: 'rgb(0, 255, 0)',
//             borderWidth: 1,
//             data: UserData.map(o => o.userGain)
//           }
//         ]
//       },
//       options: {
//         plugins: {
//           title: {
//             display: true,
//             text: 'Bar Chart'
//           }
//         }
//       }
//     };
//   }

//   render() {
//     return (
//       <Bar 
        // data={this.state.data}
        // options={this.state.options}
//       />
//     );
//   }
// }

// render(<App />, document.getElementById("root"));






import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function Chart(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "HISTOGRAMME ETAT AVANCEMENT",
      },
    },
  };

    const labels = [
      "DAM",
      "DOM",
      "DAIJE",
      "DAP",
      "DAGC",
      "SMQ-SE",
      "DIGC",
      "DPTF",
    ];
   const data = {
    labels,
    datasets: [
      {
        //label: 'DOM',
         data: labels.map((lable) =>{
              return (lable.DOM)
         }),
        data:[10,20,30,30,40,50,60,70,80,90,100],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      // {
      //   label: 'DAM',
      //   // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   data:[10,20,30,30,40,50,60,70,80,90,100],
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // }
    ],
  };
  
  return (
    <>
      <div style={{ width: "1200px", margin: "auto auto" }}>
        <Bar options={options} data={data} />
      </div>
    </>
  );
}

export default Chart;






// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       data:[10,20,30,30],
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       data:[10,20,30,30],
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// export function App() {
//   return <Bar options={options} data={data} />;
// }