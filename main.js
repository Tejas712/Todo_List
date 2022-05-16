
window.addEventListener("load", () => {
    const form = document.getElementById("add_task");
    const input = document.getElementById("task_input");
    const tasks = document.getElementById("tasks");
    const reminder = document.getElementById("settime");
    const alerttune = new Audio("Alert Tone.MP3");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = input.value;

        // check task w
        if (!task) {
            alert("please enter task");
        }
        else {

            //create elements
            const task_list = document.createElement('div');
            task_list.classList.add("task");

            const task_content = document.createElement('div');
            task_content.classList.add('content');


            task_list.appendChild(task_content);

            tasks.appendChild(task_list);
            const show_time = new Date(reminder.value);
            const task_time = document.createElement('div');
            task_time.classList.add('time');
            let d = show_time.getDate();
            let m = show_time.getMonth();
            let y = show_time.getFullYear();
            let h = show_time.getHours();
            let min = show_time.getMinutes();
           
            let date = d + '/' + m +'/' + y; 
            let time = h + ':' + min;
            task_time.innerText =date+"  "  +time; 

            const task_input = document.createElement("input");
            task_input.type = "text";
            task_input.value = task;
            task_input.setAttribute("readonly", "readonly");


            task_content.appendChild(task_time);
            task_content.appendChild(task_input);

            const task_action = document.createElement("div");
            task_action.classList.add("action");

            task_list.appendChild(task_action);



            const task_delete = document.createElement("Button");
            task_delete.classList.add("delete");
            task_delete.innerText = "Delete";

            const task_edit = document.createElement("Button");
            task_edit.classList.add("edit");
            task_edit.innerText = "edit";


            task_action.appendChild(task_edit);
            task_action.appendChild(task_delete);

            //  edit task
            task_edit.addEventListener('click', () => {
                if (task_edit.innerText.toLowerCase() == 'edit') {
                    task_input.removeAttribute("readonly");
                    task_input.focus();
                    task_edit.innerText = "save";
                } else {
                    task_edit.innerText = "edit"
                    task_edit.setAttribute("readonly", "readonly");
                }
            });

            // delete task
            task_delete.addEventListener('click', () => {
                tasks.removeChild(task_list);
            });

            // alert for task
            const current = new Date();
            const timeto = new Date(reminder.value);
            const timeout = timeto.getTime() - current.getTime();
            console.log(timeto.getDate());

            if (timeto > current) {

                setTimeout(() => showmsg(), timeout);
            }

            function showmsg() {
                alerttune.play();
                alert(task);
                task_input.style.textDecoration = "line-through";

            };



        };
        task_input.value = "";
        reminder.value = "";
    });

});