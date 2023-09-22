import React from 'react'

import Navigation from './dashboard-components/navigation'
import Cards from './dashboard-components/cards'
import transaction from "./icons/transaction.png"
import users from "./icons/users.png"
import likes from "./icons/likes.png"
import revenue from "./icons/revenue.png"
import Graph from './dashboard-components/graphs/graph'
import Add from './dashboard-components/add'
import Chart from './dashboard-components/graphs/pie'
import Info from './dashboard-components/Info'

const Dashboard = (props:any) => {
  const cards =[
    {
      id:1,
      name: "Total Revenues",
      value: "$2,129,430",
      icon: revenue,
      color: "#7FCD93",
      up: '+2.5%'
    },
    {
      id: 2,
      name: "Total Transaction",
      value: "1,520",
      icon: transaction,
      color: "#DEBF85",
      up: '+1.7%'
    },
    {
      id: 3,
      name: "Total Likes",
      value: "9,721",
      icon: likes,
      color: "#ECA4A4",
      up: '+1.4%'
    },
    {
      id: 4,
      name: "Total Users",
      value: "892",
      icon: users,
      color: "#A9B0E5",
      up: '+4.2%'
    },
  ]
  return (
    <section className='flex flex-col space-y-[30px]'>
      <Navigation/>
      <div className='flex flex-row lg:flex-wrap min-[320px]:max-lg:flex-wrap gap-8 min-[320px]:max-lg:justify-center'>
        {
          cards.map(card => {
            return(
              <Cards key={card.id} card={card} />
            )
          })
        }
      </div>
      <Graph />
      <div className='flex flex-row min-[320px]:max-lg:flex-wrap gap-8'>
        <Chart />
        {props.formData===undefined ? <Add /> : <Info formData={props.formData}/>}
      </div>
    </section>
  )
}

export default Dashboard