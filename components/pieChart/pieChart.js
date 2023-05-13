import { useState,useEffect } from "react"
import styles from './pieChart.module.css'

import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions,setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["66% of water ","Rest of your body material"],
            datasets: [
                {
                    label: 'Total All Cases',
                    data: [66.66, 33.33],
                    backgroundColor: [
                        '#CCFBFE',
                        '#CDD6DD',
                    ],
                    borderColor: [
                      '#1f1f1f',
                      '#1f1f1f',
                    ],
                    borderWidth: 1,
                  },
            ]
        })
        setChartOptions({
            plugins:{
                legend:{
                    position: 'top'
                },
                title: {
                    display:true,
                    text: "Your human body"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    },[])
    return(
        <>
            <div className={styles.container}>
                <Pie data={chartData} options={chartOptions} />
            </div>
        </>
    )
}