import HttpRequest from '../util/HttpRequest';
export default  {
    register:(username,password,callback)=>{
        HttpRequest.post("/api/user/register",{username,password}).then(response=>{
            callback(response.data);
        },error=>{
            callback(null)
        }).catch(error=>{
            callback(null)
        })
    },
    register :(username,password,callback)=>{
        HttpRequest.get("/api/user/register",{username,password}).then(response=>{
            callback(response.data);
        },error=>{
            callback(null)
        }).catch(error=>{
            callback(null)
        })
    },
    login:(username,password,callback)=>{
        HttpRequest.post("http://localhost:5000/login",{username,password}).then(response=>{
            callback(response.data);
        },error=>{
            callback(null)
        }).catch(error=>{
            callback(null)
        })
    },
    addTask:(title,notes,dueDate,userId,callback)=>{
        HttpRequest.post("http://localhost:5000/auhenticated/task",{title,notes,dueDate,userId}).then(response=>{
            callback(response.data);
        },error=>{
            callback(null)
        }).catch(error=>{
            callback(null)
        })
    },
    loadTasks:(userId,callback)=>{
        HttpRequest.get(`http://localhost:5000/auhenticated/tasks/${userId}`).then(response=>{
            callback(response.data);
        },error=>{
            callback(null)
        }).catch(error=>{
            callback(null)
        })
    },
    authenticate:(callback)=>{
        HttpRequest.get(`http://localhost:5000/authenticated/`).then(response=>{
            callback(response.data);
        },error=>{
            callback(null)
        }).catch(error=>{
            callback(null)
        })
    }
}