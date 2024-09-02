import React from 'react'
import { Link } from 'react-router-dom'

const recentOrderData = [
	{
		
		student_id: '4324',
		customer_id: '23143',
		student_name: 'Shirley A. Lape',
		percentage: '93.6%',
		standard: '8th Class'
	},
	{
	
		student_id: '5434',
		customer_id: '65345',
		student_name: 'Mason Nash',
		percentage: '95.9%',
		standard: '9th Class'
	},
	{
		
		student_id: '9854',
		customer_id: '87832',
		student_name: 'Luke Parkin',
		percentage:"99.3%",
		standard: '10th Class'
	},
	{
	
		student_id: '8763',
		customer_id: '09832',
		student_name: 'Anthony Fry',
		percentage: '95.2%',
		standard: '11th Class'
	},
	{
		
		student_id: '5627',
		customer_id: '97632',
		student_name: 'Ryan Carroll',
		percentage: '98.4%',
		standard: '12th Class'
	}
]

export default function RecentOrders() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Top Performer</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							
							<th>Student ID</th>
							<th>Student Name</th>
							<th>Standard</th>
							<th>Percentage</th>
						</tr>
					</thead>
					<tbody>
						{recentOrderData.map((order) => (
							<tr key={order.id}>
								
								<td>
									<Link to={`/student/${order.student_id}`}>#{order.student_id}</Link>
								</td>
								<td>
									<Link to={`/student/${order.student_id}`}>{order.student_name}</Link>
								</td>
								<td>{order.standard}</td>
								<td>{order.percentage}</td>
								
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}