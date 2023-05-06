import React, {useState} from 'react';
import DocsPageLayout, {OverviewContent} from "@app/pages/docs/DocsPageLayout.tsx";
import useGetActiveHash from "@app/hooks/useGetActiveHash.ts";
import Calendar from "@app/components/Calendar/Calendar.tsx";
import dayjs from "dayjs";

const overviewContent: OverviewContent[] = [
    {label: "Basic", hash: "#basic-calendar"},
    {label: "Themed", hash: "#themed-calendar"},
    {label: "API", hash: "#api"}
]

const CalendarPage = () => {

    const {activeHash} = useGetActiveHash()

    const [selectedDate, setSelectedDate] = useState(new Date())
    const [selectedDate2, setSelectedDate2] = useState(new Date())

    function handleDateChange1(date: Date) {
        setSelectedDate(date)
    }

    function handleDateChange2(date: Date) {
        setSelectedDate2(date)
    }

    return (
        <DocsPageLayout pageTitle="Calendar Page" overviewContent={overviewContent} activeHash={activeHash}
                        location={location}>
                <section id="basic-calendar">
                    <h4 className="font-medium mt-8 mb-2">Basic Calendar</h4>

                    <h4 className="text-sm text-dark-100">
                        Selected Date {dayjs(selectedDate).format("DD MMMM YYYY")}
                    </h4>

                    <div className="card max-w-md ">
                        <Calendar className="rounded-md" onChange={handleDateChange1} value={selectedDate}/>
                    </div>
                </section>



            <section id="themed-calendar">
                <h4 className="font-medium mt-8 mb-2">Themed Calendar</h4>

                <h4 className="text-sm text-dark-100">
                    Selected Date {dayjs(selectedDate2).format("DD MMMM YYYY")}
                </h4>

                <div className="card max-w-md ">
                    <Calendar className="rounded-md" onChange={handleDateChange2} value={selectedDate2}/>
                </div>
            </section>



            <div className="mt-20  border-b border-primary">
            </div>



            <section id="api" className="">
                <h4 className="page-subtile">Api</h4>

            </section>



        </DocsPageLayout>
    );
};

export default CalendarPage;