// Main Imports
import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'

// Components
import PopUp from '../../Components/PopUp'
import ReactTable from '../../Components/ReactTable'
import RoundButton from '../../Components/RoundButton'

// Material UI
import { Chip } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase'
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { FormControl } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FlagIcon from '@material-ui/icons/Flag';
import FlagOutlined from '@material-ui/icons/FlagOutlined'
import NativeSelect from '@material-ui/core/NativeSelect'
import TextField from '@material-ui/core/TextField';

// Requests
import { createTask } from '../../../graphql/mutations'
import { listStudents, listUsers } from '../../../graphql/queries'

const UserTasksCard = props => {

    // STATES
    let [addDoc, setAddDoc]         = useState('')
    let [taskNote, setTaskNote]     = useState('')
    let [dateDue, setDateDue]       = useState('')
    let [teamMember, setTeamMember] = useState('')
    let [flag, setFlag]             = useState(false)
    let [showPopUp, setShowPopUp]   = useState(false)
    let [studentId, setStudentId]   = useState('')

    let [loading, setLoading]       = useState(true)
    let [error, setError]           = useState(false)
    
    let [usersList, setUsersList]       = useState([])
    let [studentList, setStudentList]   = useState([])

    // Use Effects
    useEffect(() => {
        queryUsersStudents()
        console.log("Task Card Use Effect Triggered")
    }, [])  

    // Styles
    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
    }));
    const BootstrapInput = withStyles((theme) => ({
        root: {
            'label + &': {
                marginTop: theme.spacing(0),
                // marginBottom: '20px'
                borderColor: '#2a2e32',
                },
            },
            input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            fontSize: 16,
            width: 180,
            height: 48,
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            fontFamily: [
                'Roboto',
            ].join(','),
            '&:focus': {
                borderRadius: 4,
                borderColor: '#2a2e32',
                boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2);',
            },
            },
    }))(InputBase);  
    const classes = useStyles()
    
    // Handle data situations
    if(error) return <p> An error occured with User Task Card... </p>
    if(loading) return <p> Loading... </p>

    // OTHER VARIABLES
    // Documents and Chips
    let documents = ["FAFSA", "Data Sheet", "Citizenship", "Selective Service", "Course Enrollment", "Reimbursement", "Other - FA", "Other - CE"]
    let documentChips = documents.map(d => {
        return addDoc !== d ? <Chip label={d} className="task-chip-unselected" style={{marginRight: 10, marginBottom: 10}} onClick={() => documentChange(d)} /> : <Chip label={d} className="task-chip-selected" style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} />
    })

        /** 
     * HELPER FUNCTIONS
     */

    // REQUESTS
    async function addTask(taskData) {
        try { 
            console.log("Creating Task. Input Data:")
            console.log(taskData)
            await API.graphql(graphqlOperation(createTask, {input:taskData})) 

        }
        catch (err) { return <p> An error occurred with create task mutation... </p> }
    }
    async function queryUsersStudents() {
        try {
            // Make the requests
            const usersQueryData = await API.graphql(graphqlOperation(listUsers))
            const studentsData = await API.graphql(graphqlOperation(listStudents)) // Add a filter for current students
            
            console.log("usersQueryData: ", usersQueryData)
            console.log("usersQueryData.data.listUsers.items[0].id: ", usersQueryData.data.listUsers.items[0].id)
            console.log("studentsData: ", studentsData)

            // Create the Lists
            setUsersList(usersQueryData.data.listUsers.items.map(user => { 
                return <option key={user.id} value={user.id}>{user.firstName} {user.lastName} </option> 
            }))
            setStudentList(studentsData.data.listStudents.items.map(student => { 
                return <option key={student.id} value={student.id}>{student.firstName} {student.lastName} </option> 
            }))
            
            // End the loading process
            setLoading(false)

        } catch (err) { 
            console.log("Error fetching:", err)
            setError(true)
        }
    }

    const handleTaskSubmit = (e) => {
        e.preventDefault()
        console.log("Team Member Data:", teamMember)
        let taskInput = {
            assignedDate:   new Date(), //Date, as a string
            completed:      false, //Boolean, false by default
            completedDate:  null, //Date, null by default
            detail:         taskNote, //String, the note describing the task
            document:       addDoc, //String; the "chips"
            dueDate:        dateDue, //Date, as a string
            flag:           flag, //Boolean
            userID:         teamMember, //ID
            studentID:      studentId, //ID
        }
        addTask(taskInput)
        setShowPopUp(false)
    }

    // Change the currently selected document for a new task
    const documentChange = (document) => {
        setAddDoc(document)
    }

    const flagToggle = () => {
        console.log('handle flag icon toggle')
        if (flag === true) { setFlag(false) } 
        else { setFlag(true) }
    }

    const popupOpen = () => {
        console.log('Open Task Pop-up')
        setShowPopUp(true)
    }

    const popupClose = () => {
        console.log('Closing Documents Pop-up')
        setShowPopUp(false)
    }

    
    let taskBody = (
        <div className="add-task">
            <div className="add-task">
                <div className="add-task-row-one">
                    <h4>Add Task -</h4>
                    <FormControl>
                        <label className="dropdown-label">What student is this task for?</label>
                        <NativeSelect id="studentId" value={studentId} onChange={e => setStudentId(e.target.value)} input={<BootstrapInput />} style={{width: 200, marginRight: 30}} >
                            <option aria-label="None" value="" />
                            {studentList}
                        </NativeSelect>
                    </FormControl>
                </div>
                <div className="task-flag">
                    {flag ? <FlagIcon onClick={flagToggle} /> : <FlagOutlined onClick={flagToggle} />}
                </div>
                <div className="add-task-row-two">
                    <FormControl>
                        <label className="dropdown-label">Who will be completing the task?</label>
                        <NativeSelect id="teamMember" value={teamMember} onChange={e => setTeamMember(e.target.value)} input={<BootstrapInput />} style={{width: 200, marginRight: 30}} >
                            <option aria-label="None" value="" />
                            {usersList}
                        </NativeSelect>
                    </FormControl>
                    <FormControl>
                        <label className="dropdown-label">When should the task be completed by?</label>
                        <TextField id="dueDate"
                            variant="outlined"
                            type="date"
                            value={dateDue}
                            onChange={e => setDateDue(e.target.value)}
                            defaultValue=""
                            InputLabelProps={{ shrink: true }}
                        />
                    </FormControl>
                </div>
                <div className="add-task-row-three">
                    <div className="add-task-note">
                        <label>What needs to be completed?</label>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={8}
                            variant="outlined"
                            style={{width: 300, marginRight: 5}}
                            value={taskNote}
                            onChange={e => setTaskNote(e.target.value)}
                        />
                    </div>
                    <div className="add-task-doc">
                        <label>What type of document is the task related to?</label>
                        {/* {chips} */}
                        {documentChips}
                    </div>
                </div>
                <button className="task-cancel" onClick={popupClose}>CANCEL</button>
                <button className="task-save" onClick={handleTaskSubmit}>ADD TASK</button>
            </div>
        </div>
    )

    return (
        <div className="my-tasks">
            <Card className={classes.root}>
                <div className="card-header">My Tasks</div>
                <CardContent className={classes.content}>
                    <div className="task-table-dashboard">
                        <ReactTable data = {props.tasks} columnsForTable = {columnsForTable} />
                    </div>
                    <PopUp 
                        body={taskBody}
                        open={showPopUp}
                        onClose={popupClose}
                    /> 
                </CardContent>
                <RoundButton className="round-button-dashboard-task" onClick={popupOpen} />
            </Card>
        </div>
    )
}

let columnsForTable = [
    {
        Header:()=><h3 className="my_custom_class"><FlagOutlined style={{height: 30, width: 30}} /> </h3>,
        accessor: 'flag'
    },
    {
        Header:()=><h3 className="my_custom_class">Last Name </h3>,
        accessor: 'lastName'
    },
    {
        Header:()=><h3 className="my_custom_class">First Name </h3>,
        accessor: 'firstName'
    },
    {
        Header:()=><h3 className="my_custom_class">Student ID </h3>,
        accessor: 'ubbId'
    },
    {
        Header:()=><h3 className="my_custom_class">Document </h3>,
        accessor: 'document'
    },
    {
        Header:()=><h3 className="my_custom_class">Due <ExpandMoreIcon fontSize="small" /></h3>,
        accessor: 'dueDate'
    },
    {
        Header:()=><h3 className="my_custom_class">Task in Detail </h3>,
        accessor: 'detail'
    }
]

export default UserTasksCard