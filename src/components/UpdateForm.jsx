import {Fragment} from "react";

const UpdateForm = ({ updateTask, cancelUpdateTask, update, changeTask }) => {
  return (
    <Fragment>
      {/*update task*/}
      <div className="row">
        <div className="col">
          <input
            value={updateTask && updateTask.title}
            onChange={(e) => changeTask(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={update} className="btn btn-lg btn-success mr-20">
            update
          </button>
          <button onClick={cancelUpdateTask} className="btn btn-lg btn-warning">
            cancel
          </button>
        </div>
      </div>
      <br />
    </Fragment>
  )
}

export default UpdateForm;
