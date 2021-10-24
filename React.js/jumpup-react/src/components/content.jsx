import { useEffect, useState } from "react";
import "./content.css";

const Content = () => {

    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const [time, setTime] = useState({
        hour: 0,
        minute: 0,
        second: 0,
    })

    const [flag, setFlag] = useState(false);

    useEffect(() => {
        function timeout() {
            const date = new Date();
            setTime({
                hour: date.getHours() < 12 ? date.getHours() : date.getHours() - 12,
                minute: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
                second: date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds(),
            });
        };

        setTimeout(timeout, 1000);

        return () => clearTimeout(timeout);
    });

    const onKeyPress = (keycode) => {
        if (keycode.charCode === 13) {
            if (todos.length > 10) {
                alert("설정된 todo가 너무 많습니다.\n" +
                        "필요없는 todo를 지우고 다시 시도해주세요.");
                return;
            }
            if (flag) {
                alert("너무 자주 todo를 등록하지 말아주세요.");
                return;
            }
            const duplicateChecker = () => {
                return todos.filter(todo => todo.message === todo)
            }
            if (duplicateChecker().length !== 0) {
                alert("중복된 메시지로 작성된 todo가 존재합니다.");
                return;
            }
            setTodos([
                ...todos,
                {
                    message: todo,
                    timestamp: {
                        hour: time.hour,
                        minute: time.minute,
                        second: Number(time.second),
                    },
                }
            ]);
            console.log(todos);
            keycode.preventDefault();
            setFlag(true);
            setTimeout(() => {
                setFlag(false);
            }, 1000);
        }
    };

    const onRemoveClicked = message => {
        setTodos(todos.filter(todo => todo.message !== message));
    };

    return (
        <main>
            <div id="content">
                <section id="todowriter--container">
                    <div id="todowriter--janus">
                        <p>
                            {time.hour} : {time.minute} : {time.second}
                        </p>
                        <p>
                            {(new Date().getHours - 6) < 12 ? '☾': '☀'}
                        </p>
                    </div>
                    <div id="todowriter">
                        <p>
                            What are you heading for?
                        </p>
                        <textarea placeholder="Set up your todo.." autoComplete="on" maxLength="100" onChange={(e) => setTodo(e.target.value)} value={todo} onKeyPress={(keycode) => onKeyPress(keycode)} />
                    </div>
                </section>
                {
                    todos.length > 0 &&
                    <section id="todobox--container">
                        {
                            todos.map(todo => (
                                <ul key={todo.message}>
                                    <li id="todobox--message">
                                        {todo.message}
                                    </li>
                                    <li id="todobox--session">
                                        <div id="timestamp">
                                            {todo.timestamp.hour} : {todo.timestamp.minute} : {todo.timestamp.second}
                                        </div>
                                        <div id="remove" onClick={() => onRemoveClicked(todo.message)}>
                                            X
                                        </div>
                                    </li>
                                </ul>
                            ))
                        }
                    </section>
                }
            </div>
        </main>
    );
};

export default Content;