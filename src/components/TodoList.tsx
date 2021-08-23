import { title } from "process";
import React, { useState, useRef } from "react";
import { ITodo } from "../interfaces";

type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove(id: number): void
    onEdit(title: string, id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle, onEdit }) => {
    const ref = useRef<HTMLInputElement>(null)
    const [value, setValues] = useState('')
    if (todos.length === 0) {
        return <p className="center">While no affairs</p>
    }
    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    const editHandler = (event: React.MouseEvent, id: number, title: string) => {
        event.preventDefault()
        const evt = event.target as HTMLElement

        if (evt.parentElement?.previousElementSibling?.classList.contains("form_display")) {
            evt.parentElement?.previousElementSibling?.classList.remove("form_display")
        }
        else {
            evt.parentElement?.previousElementSibling?.classList.add("form_display")
        }
        if (evt.parentElement?.previousElementSibling?.previousElementSibling?.classList.contains("display_title")) {
            evt.parentElement?.previousElementSibling?.previousElementSibling?.classList.remove("display_title")
        }
        else {
            evt.parentElement?.previousElementSibling?.previousElementSibling?.classList.add("display_title")
        }
    }
    const inputChange = (event: React.ChangeEvent) => {
        const evnt = event.target as HTMLInputElement
        setValues(evnt.value)
    }
    const editeInput = (event: React.MouseEvent, id: number, title: string) => {
        event.preventDefault()
        title = value
        onEdit(title, id)
        const event2 = event.target as HTMLElement
        event2.parentElement?.classList.remove("form_display")
        event2.parentElement?.previousElementSibling?.classList.remove("display_title")
    }
    const blurFunction = (event: any) => {
        setTimeout(() => {
            const ev = event.target as HTMLElement
            ev.nextElementSibling?.classList.remove("add_btn_focus")
        }, 80);
    }
    const focusFunction = (event: any) => {
        const evn = event.target as HTMLElement
        evn.nextElementSibling?.classList.add("add_btn_focus")
    }
    return (
        <ul>
            {todos.map(todo => {

                const clases = ['todo']
                if (todo.completed === true) {
                    clases.push('completed')
                }

                return (
                    <li className={clases.join(' ')} key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={onToggle.bind(null, todo.id)} />
                            <span className="scroolbar_span">
                                <div className="content_box"><span className="todo_title">{todo.title}</span></div>
                            </span>
                            <form className="edit_form">
                                <input onFocus={focusFunction} onBlur={blurFunction} className="materialize-textarea edit_input" type="text" onChange={inputChange} placeholder={todo.title} />
                                <button id="save_btn" className="material-icons red-text save_btn" onClick={event => editeInput(event, todo.id, title)}>save</button>
                            </form>
                            <div>
                                <i className="material-icons red-text edit_icon" onClick={event1 => editHandler(event1, todo.id, title)}>edit</i>
                                <i className="material-icons red-text" onClick={event => removeHandler(event, todo.id)}>delete</i>
                            </div>
                        </label>
                    </li>
                )
            })}

        </ul>
    )
}