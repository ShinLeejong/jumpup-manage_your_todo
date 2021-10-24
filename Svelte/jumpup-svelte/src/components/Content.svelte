<script>
    /* common */

    let todo = '';
    let todos = [];

    /* todobox logic */

    import { onMount } from 'svelte';

    let date = new Date();
    let flag = false;

    $: hour = date.getHours() < 12 ? date.getHours() : date.getHours() - 12;
    $: minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    $: second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

    onMount(() => {
        console.log("Mounted successfully");
        const clock = setInterval(() => {
            date = new Date();
        }, 1000);
    })

    const onKeyPress = (keycode) => {
        if (keycode.charCode == 13) {
            if (todos.length > 10) {
                alert("설정된 todo가 너무 많습니다.\n" +
                        "필요없는 todo를 지우고 다시 시도해주세요.");
                return;
            }
            if (flag) {
                alert("너무 자주 todo를 등록하지 말아주세요.");
                return;
            }
            todos.push({
                message: todo,
                timestamp: {
                    hour,
                    minute,
                    second
                },
            })
            todo = '';
            keycode.preventDefault();
            todos = todos;
            flag = true;
            setTimeout(() => {
                flag = false;
            }, 1000)
        }
    }

    /* todowriter logic */

    const onRemoveClicked = message => {
        console.log(message)
        todos = todos.filter(todo => todo.message !== message);
    }

</script>

<main>
    <div id="content">
        <section id="todowriter--container">
            <div id="todowriter--janus">
                <p>
                    {hour} : {minute} : {second}
                </p>
                <p>
                    {date.getHours() < 12 ? '☀': '☾'}
                </p>
            </div>
            <div id="todowriter">
                <p>
                    What are you heading for?
                </p>
                <textarea placeholder="Set up your todo.." autocomplete="on" maxlength="100" bind:value={todo} on:keypress={onKeyPress} />
            </div>
        </section>
        {#if todos.length > 0}
            <section id="todobox--container">
                {#each todos as todo (todo.timestamp)}
                    <ul>
                        <li id="todobox--message">
                            {todo.message}
                        </li>
                        <li id="todobox--session">
                            <div id="timestamp">
                                {todo.timestamp.hour} : {todo.timestamp.minute} : {todo.timestamp.second}
                            </div>
                            <div id="remove" on:click={onRemoveClicked(todo.message)}>
                                X
                            </div>
                        </li>
                    </ul>
                {/each}
            </section>
        {/if}
    </div>
</main>

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