import React from 'react'
import { AiFillDollarCircle } from "react-icons/ai";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiParentFill } from "react-icons/ri";
import TransactionChart from './TransactionChart';

export default function Students() {
	return (
		<div className="flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<PiStudentFill className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Students</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">14200</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<FaChalkboardTeacher className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Teachers</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">723</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<RiParentFill className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Parents</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">10456</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<AiFillDollarCircle className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Earnings</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$38.4k</strong>
						<span className="text-sm text-red-500 pl-2">+238</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}
<TransactionChart />
function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}