<template>
    <main>
        <div id="content">
            <section id="todowriter--container">
                <div id="todowriter--janus">
                    <p>
                        {{ hour }} : {{ minute }} : {{ second }}
                    </p>
                    <p>
                        {{ janus }}
                    </p>
                </div>
                <div id="todowriter">
                    <p>
                        What are you heading for?
                    </p>
                    <textarea placeholder="Set up your todo.." autocomplete="on" maxlength="100" v-model="todo" @keypress="onKeyPress" />
                </div>
            </section>
            <section id="todobox--container" v-if="todos.length > 0">
                <ul v-for="todo in todos" :key="todo.message">
                    <li id="todobox--message">
                        {{todo.message}}
                    </li>
                    <li id="todobox--session">
                        <div id="timestamp">
                            {{todo.timestamp.hour}} : {{todo.timestamp.minute}} : {{todo.timestamp.second}}
                        </div>
                        <div id="remove" @click="onRemoveClicked(todo.message)">
                            X
                        </div>
                    </li>
                </ul>
            </section>
    </div>
    </main>
</template>

<script>

export default {
    data() {
        return {
            todo: '',
            todos: [],
            janus: new Date().getHours - 6 < 12 ? '☾' : '☀',
            flag: false,
            date: new Date(),
        }
    },
    methods: {
        onRemoveClicked(message) {
            this.todos = this.todos.filter(todo => todo.message !== message);
        },
        
        onKeyPress(keycode) {
            if (keycode.charCode == 13) {
                if (this.todos.length > 10) {
                    alert("설정된 todo가 너무 많습니다.\n" +
                            "필요없는 todo를 지우고 다시 시도해주세요.");
                    return;
                }
                if (this.flag) {
                    alert("너무 자주 todo를 등록하지 말아주세요.");
                    return;
                }
                const duplicateChecker = () => {
                    return this.todos.filter(todo => todo.message === this.todo)
                }
                if (duplicateChecker().length !== 0) {
                    alert("중복된 메시지로 작성된 todo가 존재합니다.");
                    return;
                }
                this.todos.push({
                    message: this.todo,
                    timestamp: {
                        hour: this.hour,
                        minute: this.minute,
                        second: this.second,
                    },
                });
                this.todo = '';
                keycode.preventDefault();
                this.flag = true;
                setTimeout(() => {
                    this.flag = false;
                }, 1000)
            }
        },
    },
    mounted() {
        setInterval(() => {
            this.date = new Date();
        }, 1000);
    },
    computed: {
        hour() {
            return this.date.getHours() < 12 ? this.date.getHours() : this.date.getHours() - 12;
        },
        minute() {
            return this.date.getMinutes() < 10 ? '0' + this.date.getMinutes() : this.date.getMinutes();
        },
        second() {
            return this.date.getSeconds() < 10 ? '0' + this.date.getSeconds() : this.date.getSeconds();
        }
    }
}
</script>

<style scoped>
    main {
        flex-grow: 1;
        background: lightgoldenrodyellow;
        opacity: 0.8;
    }

    #content {
        display: flex;
        height: 100%;
    }
    
    /* ////////////////////////////////////////////////////////// */
    /* todowriter */
    #todowriter--container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5rem;
    }

    #todowriter--container > * {
        padding: 1rem 0;
    }

    #todowriter--janus {
        display: flex;
        justify-content: center;
    }

    #todowriter--janus p {
        font-size: 5rem;
        padding: 0 0.5rem;
    }

    #todowriter {
        display: block;
        text-align: center;
        margin-top: 2rem;
        font-size: 2rem;
    }

    #todowriter > p {
        padding-bottom: 1.5rem;
    }

    #todowriter > textarea {
        background: inherit;
        border: none;
        padding: 1rem;
        margin-top: 1rem;
        border-bottom: 1px solid black;
        width: 30rem;
        resize: none;
        overflow: hidden;
    }

    /* ////////////////////////////////////////////////////////// */
    /* todobox */

    #todobox--container {
        flex: 1;
        display: flex;
        padding: 5rem;
        flex-direction: column;
        justify-content: center;
    }

    #todobox--container ul {
        display: flex;
        width: 100%;
        flex-direction: row;
        animation-duration: 1s;
        animation-name: fadein;
    }

    #todobox--container li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem 0;
        border-bottom: 1px solid black;
    }

    #todobox--message {
        flex: 2;
    }

    #todobox--session {
        flex: 1;
    }

</style>