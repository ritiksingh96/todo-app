function Homepage(props) {
    var todayDate = new Date().setHours(0, 0, 0, 0);
    return (
        <div>
            <h2 className='section_heading'>Todays Task</h2>

            <div className='mt_3'>
                <div className='todaysTaskContainer'>
                    {props.taskList.length > 0 ?
                        (props.taskList.map((itemValue, index) => {

                            let { favourite, taskName, taskDesc, taskDate, } = itemValue;
                            let istodayDate = new Date(taskDate).setHours(0, 0, 0, 0);
                            return (
                                (istodayDate === todayDate) ? (
                                    <div className='todaysTaskGrids' key={taskName}>
                                        {favourite === true ? <i className="fa fa-star" aria-hidden="true"></i> : null}
                                        <h4>Task Name: {taskName}</h4>
                                        {taskDesc !== '' ? <h5>Description: {taskDesc}</h5> : null}
                                        <h5>Date: {taskDate}</h5>
                                        {(istodayDate === todayDate) || (istodayDate > todayDate) ? (
                                            <span className='badge inProgress'>in Progress</span>
                                        ) : (<span className='badge pending'>Pending</span>)}
                                    </div>
                                ) : null
                            )
                        })) : <p>No task added yet</p>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Homepage
