import React, {MouseEvent} from "react";

export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget) //***
    }

    const saveUser = () => {
        console.log('user  saved');
    }

    const onNameChanged = () => {
        console.log('user changed')
    }

    const focusLostHandler = () => {
        console.log('focus is lost')
    }


    return (<div>
        Simba<textarea onChange={onNameChanged}
                       onBlur={focusLostHandler}
    ></textarea>
        <input/>
        <button name={'delete'} onClick={deleteUser}>x</button>
        <button name={'save'} onClick={saveUser}>x</button>
    </div>)
}