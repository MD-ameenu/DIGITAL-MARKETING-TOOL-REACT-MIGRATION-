
export const Send_info="Send_info";
export const Log_in="Log_in";
export const show_it="show_it";
export const save_template="save_template";

       
export const SignUp= values =>{
    return{
     type: Send_info,
    payload: values
    };
}

export const isLoggedin= ()=>{
    return{
     type: Log_in
    };
}

export const show= ()=>{
    return{
     type: show_it
    };
}

export const savetemplate= Templates =>{
    return{
     type: save_template,
    payload: Templates
    };
}