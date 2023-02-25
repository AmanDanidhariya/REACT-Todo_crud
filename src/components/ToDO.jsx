import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faPen,
    faTrashCan,
  } from "@fortawesome/free-solid-svg-icons";
  import { isDisabled } from "@testing-library/user-event/dist/utils";

const ToDO = ({toDo,markTask, setUpdateTask, deleteTask}) =>{
    return(
        <Fragment>
        {toDo &&
            toDo
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((task, index) => {
                return (
                  <Fragment key={task.id}>
                    <div className="col taskBg">
                      <div className={task.status ? "done" : ""}>
                        <span className="taskNumber">{index + 1}</span>
                        <span className="taskText">{task.title}</span>
                      </div>
                      <div className="iconsWrap">
                        <span title="Completed" onClick={(e)=>markTask(task.id)}>
                          <FontAwesomeIcon icon={faCircleCheck} />
                        </span>
                          {task.status ? isDisabled:(
                            <span title="Edit" onClick={()=>setUpdateTask({
                              id:task.id,
                              title: task.title,
                              status: task.status? true:false
                            })}>
                            <FontAwesomeIcon icon={faPen} />
                          </span>
                          )}
                           
    
                        <span title="Delete" onClick={()=>deleteTask(task.id)}>
                          <FontAwesomeIcon icon={faTrashCan} />
                        </span>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
        </Fragment>
    )
}

export default ToDO;