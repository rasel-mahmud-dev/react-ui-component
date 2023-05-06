import React, {useEffect, useState} from 'react';
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import dayjs from "dayjs";

import "./Calendar.scss"


function getMonthDayMartix(currentDate = new Date()) {

    /*
    Month index = 3
    prev month March = 31
    April total days = 30
    next month May   = 31


    start April 1 from Saturday [6]


    * */

    let cc = new Date(currentDate)
    cc.setDate(1)

    // start on day index 0 - 6
    const firstDayOfTheMonth = cc.getDay();


    let currentMonthCount = 0 - firstDayOfTheMonth;
    // 0 = sunday
    // 6 = sat


    // first week.
    // [Su] 1st loop pull date previous that -6 date from now ==> 26-3-2023
    // [Mo] 2nd loop pull date previous that -5 date from now ==> 27-3-2023
    // [Tu] 3rd loop pull date previous that -4 date from now ==> 28-3-2023
    // [We] 4th loop pull date previous that -3 date from now ==> 29-3-2023
    // [Th] 5th loop pull date previous that -2 date from now ==> 20-3-2023
    // [Fr] 6th loop pull date previous that -1 date from now ==> 31-3-2023
    // [Sa] 7th loop pull date previous that 0 date from now ==> 01-3-2023

    // second week.
    // [Su] 1st loop pull date previous that 1 date from now ==> 2-3-2023
    // [Mo] 2nd loop pull date previous that 2 date from now ==> 3-3-2023
    // [Tu] 3rd loop pull date previous that 3 date from now ==> 4-3-2023
    // [We] 4th loop pull date previous that 4 date from now ==> 5-3-2023
    // [Th] 5th loop pull date previous that 5 date from now ==> 6-3-2023
    // [Fr] 6th loop pull date previous that 6 date from now ==> 7-3-2023
    // [Sa] 7th loop pull date previous that 7 date from now ==> 8-3-2023

    // third week
    // ....


    const daysMatrix = new Array(6).fill([]).map(() => {
        // currentMonthCount++;
        // let ccDate = new Date(currentDate)
        // ccDate.setDate(currentMonthCount)
        // return ccDate.getDate()

        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            let ccDate = new Date(currentDate)
            ccDate.setDate(currentMonthCount)
            return dayjs(ccDate)
        });
    });
    // console.log(daysMatrix)
    return daysMatrix
}

function getDayClass(day, daySelected) {
    const format = "DD-MM-YY";

    const nowDay = dayjs().format(format);
    const nowDate = dayjs(new Date())

    const currDay = day.format(format);
    const slcDay = daySelected && dayjs(daySelected).format(format);


    if (nowDay === currDay) {
        return "today";
    } else if (currDay === slcDay) {
        return "selected-date";
    } else if (nowDate.year() === day.year() && nowDate.month() === day.month()) {
        return "current-month"
    } else {
        return ""
    }
}


const Calendar = ({className = "", onChange, value}) => {

    let weeks = [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ]

    const [currentDate, setCurrentDate] = useState(new Date())

    const [daysMatrix, setDaysMatrix] = useState(getMonthDayMartix(currentDate))

    const [daySelected, setDaySelected] = useState(currentDate)


    function jumpNextMonth() {
        let updatedCurrentDate = new Date(currentDate)
        updatedCurrentDate.setMonth(updatedCurrentDate.getMonth() + 1)
        setCurrentDate(updatedCurrentDate)
    }


    function jumpPrevMonth() {
        let updatedCurrentDate = new Date(currentDate)
        updatedCurrentDate.setMonth(updatedCurrentDate.getMonth() - 1)
        setCurrentDate(updatedCurrentDate)
    }

    useEffect(() => {
        if (value) {
            // let index = dayjs(new Date(value))
            // setDaySelected(index)
            // setCurrentDate(index.month())
        }
    }, [value])


    useEffect(() => {
        setDaysMatrix(getMonthDayMartix(currentDate))
    }, [currentDate]);


    function handleSelectDate(day) {
        let d = day.toDate()
        onChange && onChange(d)
        setDaySelected(day)
    }


    return (
        <div className={`${className} small-calendar`}>

            <div className="flex justify-between px-1 mb-2 mt-3">
                <p className="text-sm text-gray-700 font-medium">{
                    dayjs(new Date(currentDate)).format(
                        "MMMM YYYY"
                    )}</p>

                <div className="flex items-center gap-x-1">
                    <li className="date list-none text-2xl"
                        onClick={() => jumpPrevMonth()}>
                        <div className="date-cell">
                            <BiChevronLeft className="text-sm"/>
                        </div>
                    </li>
                    <li className="date list-none text-2xl mr-3"
                        onClick={() => jumpNextMonth()}>
                        <div className="date-cell">
                            <BiChevronRight className="text-sm"/>
                        </div>
                    </li>
                </div>
            </div>

            <div>
                <div className="grid grid-cols-7">
                    {weeks.map(week => (
                        <div className="date" key={week}>
                            <span className="date-cell">{week}</span>
                        </div>
                    ))}
                </div>

                {/*** month view *****/}

                <div className="grid grid-cols-7 grid-rows-6">

                    {daysMatrix.map((row) => (
                        row.map(day => (
                            <div key={day.date()} onClick={() => handleSelectDate(day)}
                                 className={`date py-1 ${getDayClass(day, daySelected)} `}>
                                <span className="date-cell">{day.format("D")}</span>
                            </div>
                        ))
                    ))}
                </div>
            </div>

        </div>
    );
};


export default Calendar;