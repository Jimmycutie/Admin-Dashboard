import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Chart = () => {
    const[prodData, setProdData] = React.useState<any[]>([])
    React.useEffect(()=>{
        fetch('https://dummyjson.com/products?limit=4&skip=2')
        .then(res => res.json())
        .then(data => setProdData(data.products))
    },[])

    return (
        <div className='flex flex-col h-[250px] lg:w-[50%] min-[320px]:max-lg:w-[100%] bg-white px-[40px] py-[30px] rounded-[20px] border-2 shadow-xl'>
            <div className='flex flex-row justify-between'>
                <h1 className='font-bold text-[18px]'>Top products</h1>
                <h1 className='font-normal text-[14px] text-[#858585]'>May-June 2021</h1>
            </div>
            <ResponsiveContainer width={"100%"} height={"100%"} aspect={0} >
                <PieChart>
                    <Pie
                    data={prodData}
                    cx={80}
                    cy={90}
                    innerRadius={45}
                    outerRadius={60}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="price"
                    >
                    {prodData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                    
                    <Legend
                        payload={
                            prodData.map(
                                (entry, index) => ({
                                    id: entry,
                                    type: "circle",
                                    value: `${entry.brand} (${entry.price})`,
                                    color: COLORS[index % COLORS.length]
                                })
                            )
                        }
                        align='right'
                        layout='vertical'
                        verticalAlign='middle'
                        iconSize={10}
                    />
                    
                </PieChart>
            </ResponsiveContainer>
        </div>

    );
}

export default Chart