import React, {useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import {Avatar, Chip} from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

// Components
import UserTasksCard from './Components/UserTasksCard'
import StudentStatusCard from './Components/StudentStatusCard'
import FundingCard from './Components/FundingCard'
import CurrentStudentsCard from './Components/CurrentStudentsCard'
import QuickLinksCard from './Components/QuickLinksCard.js'

// Queries and Mutations
import { listTasks } from '../../graphql/queries'

const Dashboard = props => {
    
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(false)
    let [tasks, setTasks] = useState([])
    let [incompleteTasks, setIncompleteTasks] = useState([])
    let [assignedIncompleteTasks, setAssignedIncompleteTasks] = useState([])

    useEffect(() => {
        console.log("Dashboard useEffect Triggered.")
        queryTasks()
        //props.setActiveTab('Dashboard')
    }, [loading])

    // Handle things if the data is not available
    if (error) return <p> Error on Dashboard </p>
    if (loading) return <p >Loading... </p>

    // Query the tasks
    async function queryTasks() {
        try {
            console.log("About to query tasks.")
            const tasksData = await API.graphql(graphqlOperation(listTasks))
            
            console.log("Queried data.")
            setTasks(tasksData.data.listTasks.items)
            setLoading(false)

            setIncompleteTasks(mapData(tasks.filter(task => !task.completed)))
            setAssignedIncompleteTasks(incompleteTasks.filter(task => (task.userId === props.user._id)))
            
            console.log("Query Complete. Task Data:")
            console.log(tasksData)
        } catch (err) { 
            console.log("Error fetching in Dashboard")
            console.log(err)
            setError(true)
        }
    }

    return(
        <div className="dashboard">
            <div className="headline4 greeting"> Well hello {props.user.firstName}! </div>
            <div className="dashboard-row-one">
                <div className="my-tasks">
                    <UserTasksCard
                        filter={"Assigned"}
                        status = {"Incomplete"}
                        tasks = {assignedIncompleteTasks}
                    />
                </div>
                <div className="student-status">    <StudentStatusCard/>    </div>
                <div>                               <FundingCard/>          </div>
            </div>
            <div className="dashboard-row-two">
                <div className="current-students">  <CurrentStudentsCard />                 </div>
                <div className="quick-links">       <QuickLinksCard user={props.user} />    </div>
            </div>
        </div>
    )
}

const mapData = (data) => {
    return data.map(d => {
        console.log('Line 118', data)
        return {
            flag: d.flag ?  <FlagIcon style={{height: 30, width: 30}}/> : '',
            userId: d.userId,
            user:<Chip
                    size="small"
                    avatar={<Avatar>{d.user.avatar}</Avatar>}
                    label={d.user.firstName}
                />,
            document: <Chip
                        size="small"
                        label={d.document}
                    />,
            lastName: <Link to={`/studentrecord/${d.student.id}`}>{ d.student.lastName }</Link>,
            firstName: <Link to={`/studentrecord/${d.student.id}`}>{ d.student.firstName }</Link>,
            docNum: <Link to={`/studentrecord/${d.student.id}`}>{ d.student.docNum }</Link>,
            ubbId: <Link to={`/studentrecord/${d.student.id}`}>{ d.student.ubbId }</Link>,
            dueDate: d.dueDate ? <Moment format="MM/DD/YY">{d.dueDate}</Moment> : '',
            assignedDate: d.dueDate ? <Moment format="MM/DD/YY">{d.dueDate}</Moment> : '',
            detail: <div className="task__detail-ellipsis">{d.detail}</div>
        }
    })
}

export default Dashboard