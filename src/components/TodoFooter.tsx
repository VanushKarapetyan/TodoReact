import React from "react";
import { ITodo } from "../interfaces";

type TodoFooterProps = {
    todos: ITodo[]
    onClearCompleted: any
}

export const TodoFooter: React.FC<TodoFooterProps> = ({ todos, onClearCompleted }) => {
    const completedSize = todos.filter((todo) => todo.completed).length;
    return (
        <div className="todo_footer">
            <span>{todos.length} / {completedSize}</span>
            <div className="clear_all_block">
                <p className="clear_all_text red-text">Clear completed</p>
                <i className="material-icons red-text clear_all_icon" onClick={onClearCompleted}>clear</i>
            </div>
        </div>
    )
}