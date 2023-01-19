import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import StarIcon from '@material-ui/icons/Star';
function AllTasks(props) {
    var todayDate = new Date().setHours(0, 0, 0, 0);

    const columns = [
        { field: 'SNo', headerName: 'S. No', type: 'number', width: 100 },
        {
            field: 'TaskName',
            headerName: 'Task Name',
            width: 150,
            editable: false,
        },
        {
            field: 'Favourite',
            headerName: 'Favourite',
            width: 90,
            editable: false,
            renderCell: (params) => {
                return params.value === true ? <StarIcon style={{ color: '#ffc727' }} /> : ' ';
            },
        },
        {
            field: 'TaskDescription',
            headerName: 'Task Description',
            width: 200,
            editable: false,
        },
        {
            field: 'TaskDate',
            headerName: 'Task Date',
            type: 'date',
            width: 200,
            editable: false,
        },
        {
            field: 'Status',
            headerName: 'Status',
            width: 150,
            editable: false,
            renderCell: (params) => {
                const classNameStatus = params.value === 'in Progress' ? 'badge inProgress' : 'badge pending';
                return <span className={classNameStatus}>{params.value}</span>
            },
        }
    ];

    return (
        <div>
            <h2 className='section_heading'>All Tasks</h2>

            <div className='mt_3'>

                {props.taskList.length > 0 ?
                    <div style={{ height: 300, width: '100%' }}>
                        <div style={{ display: 'flex', height: '100%' }}>
                            <div style={{ flexGrow: 1 }}>
                                <DataGrid
                                    rows={
                                        props.taskList.map((currVal, index) => {
                                            let { favourite, taskName, taskDesc, taskDate } = currVal;
                                            let istodayDate = new Date(taskDate).setHours(0, 0, 0, 0);
                                            let statusDiv = null;

                                            if ((istodayDate === todayDate) || (istodayDate > todayDate)){
                                                statusDiv = 'in Progress';
                                            }else{
                                                statusDiv = 'Pending';
                                            }
                                            return { id: index, SNo: index + 1, TaskName: taskName, TaskDescription: taskDesc, TaskDate: taskDate, Status: statusDiv, Favourite: favourite}
                                        })
                                    }
                                    columns={columns}
                                    pageSize={5}
                                    disableSelectionOnClick
                                />
                            </div>
                        </div>
                    </div> : <p>No task added yet</p>
                }

                {/* <table className='allTaskTable'>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Task Name</th>
                            <th>Task Description</th>
                            <th>Task Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.taskList.length > 0 ?
                            (props.taskList.map((itemValue, index) => {

                                let { favourite, taskName, taskDesc, taskDate } = itemValue;
                                let istodayDate = new Date(taskDate).toLocaleDateString();
                                return (
                                    <tr key={taskName}>
                                        <td>{index + 1}</td>
                                        <td>{taskName} {favourite === true ? <i className="fa fa-star" aria-hidden="true"></i> : null}</td>
                                        <td>{taskDesc}</td>
                                        <td>{taskDate}</td>
                                        <td>{(istodayDate === todayDate) || (istodayDate > todayDate) ? (
                                            <span className='badge inProgress'>in Progress</span>
                                        ) : (<span className='badge pending'>Pending</span>)}</td>
                                    </tr>
                                )
                            })) : <tr><td colSpan="5">No task added yet</td></tr>
                        }
                    </tbody>
                </table> */}

            </div>
        </div>
    )
}

export default AllTasks
