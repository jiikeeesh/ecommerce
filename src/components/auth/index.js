
// import {API} from '../../config'


export const signup=(user)=>{
    return fetch(`http://localhost:5000/api/postuser`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-type":'application/json'

        },
        body:JSON.stringify(user)

    })
    .then(response=>{
        return response.json();
    })
    .catch(error=>{
        console.log(error);
    });
}

export const authenticate=(data,next)=>{
    if(typeof window !=='undefined'){
        localStorage.setItem('jwt',JSON.stringify(data))
        next();
    }
}

export const isAuthenticated=()=>{
    if(typeof window=='undefined'){
        return false;
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
}
else{
    return false;
}
}

//sign in

export const signin=(user)=>{

    return fetch(`http://localhost:5000/api/signin`,{
     method:"POST",
     headers:{
         Accept:'application/json',
         "Content-Type":"application/json"
     },
     body:JSON.stringify(user)
    })
    .then(response=>{
       return response.json() ;
    })
    .catch(err=>{
        console.log(err);
    });
   };
   
   //signout
   
   export const signout=(next)=>{
    if(typeof window !=='undefined'){
        localStorage.removeItem('jwt',JSON.stringify('jwt'));
        next();
        return fetch(`http://localhost:5000/api/signout`,{
            method:"POST",
        })
        .then(response=>{
            console.log('signout',response)
        })
        .catch(err=>console.log(err))
    }
   }

// forget pasword
export const forgetpassword=(user)=>{

    return fetch(`http://localhost:5000/api/resetpassword`,{
     method:"POST",
     headers:{
         Accept:'application/json',
         "Content-Type":"application/json"
     },
     body:JSON.stringify(user)
    })
    .then(response=>{
       return response.json() ;
    })
    .catch(err=>{
        console.log(err);
    });
   };
   