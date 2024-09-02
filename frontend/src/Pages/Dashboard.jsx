import React from 'react'
import DashboardStatsGrid from '../Components/DashboardStatsGrid'
import TransactionChart from '../Components/TransactionChart'
import BuyerPieChart from '../Components/BuyerPieChart'
import Sidebar from '../Components/Shared/Sidebar'
import Calender from '../Components/Calender'
import RecentOrders from '../Components/RecentOrder'

const Dashboard = () => {
  return (
    <div className='flex gap-5'>
    <div className=' flex bg-neutral-100 h-screen w-screen  overflow-hidden'>
   <Sidebar/>
    <div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
        <BuyerPieChart />
    </div>
    <div className="flex flex-row gap-4 w-full h-full">
      <RecentOrders />
				<Calender />
			</div>
    </div>
    </div>
    </div>
  )
}

export default Dashboard

