import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
 
const Graph = () => {

    const[prodData, setProdData] = React.useState<any[]>([])
    React.useEffect(()=>{
        fetch('https://dummyjson.com/products?limit=4&skip=2')
        .then(res => res.json())
        .then(data => setProdData(data.products))
    },[])


    const labels = prodData.map((product) => product.brand)
    const data = {
        labels,
        datasets: [
            {
                label: "Price",
                data: prodData.map((product) => product.price),
                backgroundColor: '#98D89E',
                barPercentage: 0.4,
                borderRadius:5
            },
            {
                label: "Stock",
                data: prodData.map((product) => product.stock),
                backgroundColor: '#EE8484',
                barPercentage: 0.4,
                borderRadius:5
            }
        ]
    }
    
    const options = {
        plugins: {
          legend: {
            position: 'top' as const, 
            element: {
                point: {
                    radius: 2
                }
            },
            labels: {
                pointStyle: 'circle',
                usePointStyle: true,
                useBorderRadius: true,
                borderRadius: 1
            }
          },
        },
        maintainAspectRatio : false,
        scales: {
            x: {
                grid:{
                    display: false,
                }
            },
            y:{

            }
        }, 
        
    };
  return (
    <div>
        <section className="flex-1 h-[360px] px-[40px] py-[30px] bg-white rounded-[20px] border-2 shadow-xl">
            <h1 className="text-[20px] font-bold">Activities</h1>
            <h1 className="text-[14px] font-normal text-[#858585] mb-[10px]">May - June 2021</h1>
            <article className='w-auto h-[80%]'>
                <Bar data={data} options={options}/>
            </article>

        </section>
    </div>
  )
}

export default Graph