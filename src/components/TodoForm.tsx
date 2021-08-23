import React, { useRef, useState } from "react";

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {

    const blurFunction = () => {
        setTimeout(() => {
            document.getElementById("add_btn")?.classList.remove("add_btn_focus")
        }, 80);
    }
    const focusFunction = () => {
        document.getElementById("add_btn")?.classList.add("add_btn_focus")
    }
    const ref = useRef<HTMLInputElement>(null)
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        }
    }
    const onAddBtn = () => {
        props.onAdd(ref.current!.value)
        ref.current!.value = ''
    }
    return (
        <div className="form_container">
            <div className="input-field mt2">
                <input onFocus={focusFunction} onBlur={blurFunction}
                    ref={ref}
                    type="text"
                    id="title"
                    autoComplete="off"
                    onKeyPress={keyPressHandler}
                    className="materialize-textarea add_input" />
                <label htmlFor="title" className="active">What needs to be done?</label>
            </div>
            <button id="add_btn" className="add_btn" onClick={onAddBtn}>
                <i className="material-icons red-text">add_box</i>
            </button>
        </div>
    )
}
