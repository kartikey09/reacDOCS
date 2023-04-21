
export default function reducerFunction(tasks, payload) {
    switch(payload.type){
        case 'ADD_TASK':{
            return [
                ...tasks,
                {
                    id: payload.id,
                    text: payload.text
                }
            ]
        }
        
        case 'DELETE_TASK':{
            return tasks.filter((task)=>task.id != payload.id)
        }

        case 'EDIT_TASK':{
            return tasks.map((task)=>{
                if(task.id == payload.id){
                    return{
                        id: task.id,
                        text: payload.text
                    }
                } else {
                    return task
                }
            })
        }

        default: {
            return {...state}
        }
    }
}
