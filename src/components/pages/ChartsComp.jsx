import React, { useEffect, useRef, useState } from 'react'
import BarChart from '../chart/BarChart'
import LineChart from '../chart/LineChart'
/* eslint-disable */
const ChartsComp = ({ allUsers }) => {

    const formattedDates = allUsers.map((item) => {
        const date = new Date(item.created_at);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        return {
            ...item,
            created_at: formattedDate
        };
    });

    const newArray = formattedDates.reduce((acc, curr) => {
        const date = new Date(curr.created_at)
        const monthName = date.toLocaleString('default', { month: 'long' }); // get month name
        const newDate = date.getMonth()

        const exists = acc.find((item) => item.created_at === monthName)
        if (exists) {
            curr.amount && (exists.amount += curr.amount)
                || curr.price && (exists.price += Math.ceil(curr.price * curr.in_stock))
                || (!curr.price && !curr.amount && !curr.store_name) && (exists.total += 1)
                || (curr.store_name && (exists.store += 1))

        } else {
            curr.amount && acc.push({ created_at: monthName, value: newDate, amount: curr.amount })
                || curr.price && acc.push({ created_at: monthName, value: newDate, price: Math.ceil(curr.price * curr.in_stock) })
                || curr.store_name && acc.push({ created_at: monthName, value: newDate, store: +1 })
                || (!curr.price && !curr.amount && !curr.store_name) && acc.push({ created_at: monthName, value: newDate, total: +1 })
        }

        acc.sort((a, b) => a.value - b.value)
        return acc
    }, [])

    const [userData, setUserData] = useState({
        labels: newArray.map((data) => data.created_at),
        datasets: [{
            label: newArray.map((data) => data.amount)[0] && 'Total Sales'
                || newArray.map((data) => data.price)[0] && 'Products value'
                || newArray.map((data) => data.total)[0] && 'Total users'
                || newArray.map((data) => data.store)[0] && 'All stores',
            data: newArray.map((data) => data.amount && data.amount
                || data.price && data.price
                || data.total && data.total
                || data.store && data.store),
            backgroundColor: ['rgba(247, 205, 18, 0.795)', 'rgba(50, 93, 236, 0.6)', 'rgba(143, 142, 140, 0.685)'],
            borderWidth: 1,
            fill: true,
            borderColor: '#111',
            tension: 0.5,
        }]
    })

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    }

    const prevArrayRef = useRef(newArray)


    useEffect(() => {
        if (JSON.stringify(newArray) !== JSON.stringify(prevArrayRef.current)) {
            console.log(newArray)

            setUserData({
                labels: newArray.map((data) => data.created_at),
                datasets: [{
                    label: newArray.map((data) => data.amount)[0] && 'Total Sales'
                        || newArray.map((data) => data.price)[0] && 'Products value'
                        || newArray.map((data) => data.total)[0] && 'Total users'
                        || newArray.map((data) => data.store)[0] && 'All stores',

                    data: newArray.map((data) => data.amount && data.amount
                        || data.price && data.price
                        || data.total && data.total
                        || data.store && data.store),

                    backgroundColor: ['rgba(247, 205, 18, 0.795)', 'rgba(50, 93, 236, 0.6)', 'rgba(143, 142, 140, 0.685)'],
                    borderWidth: 1,
                    borderColor: '#111',
                    fill: true,
                    tension: 0.5,
                }]
            })
            prevArrayRef.current = newArray
        }
    }, [newArray])

    return (
        <div className='chartDiv'>
            <div>
                {newArray.map((data) => data.total)[0] && <BarChart chartData={userData} options={options} />}
                {newArray.map((data) => data.amount)[0] && <LineChart chartData={userData} options={options} />}
                {newArray.map((data) => data.price)[0] && <LineChart chartData={userData} options={options} />}
                {newArray.map((data) => data.store)[0] && <BarChart chartData={userData} options={options} />}
            </div>
        </div>
    )
}

export default ChartsComp;