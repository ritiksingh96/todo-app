import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
function AddTask(props) {
    
    return (
        <div>
            <h2 className='section_heading'>Add New Task</h2>

            <form className='addtaskForm'>
                <div className='form_groups'>
                    <TextField id="taskName" name='taskName' label="Enter Task Name" value={props.field.taskName} onChange={(event) => props.setFields(event)} />
                </div>

                <div className='form_groups'>
                    <TextField id="taskDesc" name='taskDesc' label="Enter Task Description" value={props.field.taskDesc} onChange={(event) => props.setFields(event)} />
                </div>

                <div className='form_groups'>
                    <TextField id="taskDate" name='taskDate' type="date" label="Enter Task Date" value={props.field.taskDate} onChange={(event) => props.setFields(event)} InputLabelProps={{ shrink: true,}} />
                </div>

                <div className='form_groups'>
                    <input type="checkbox" id="favourite" name="favourite" value={props.field.favourite} onChange={(event) => props.setFields(event)} />
                    <label className='labelForRadio ml_2' htmlFor="favourite"> Mark as favourite</label>
                    
                </div>
            </form>

            <div className='mt_2'>
                <Button variant="contained" type="button" color="primary" size="medium" onClick={(event) => props.setList(event)}>
                    <PlaylistAddCheckIcon style={{marginRight: '6px'}} /> Add Task
                </Button>
            </div>
        </div>
    )
}

export default AddTask
