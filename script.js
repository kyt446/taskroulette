    document.addEventListener('DOMContentLoaded', function () {
        const spinButton = document.getElementById('spinButton');
        const spinButtonBottom = document.getElementById('spinButtonBottom');
        const taskInput = document.getElementById('taskInput');
        const addTaskButton = document.getElementById('addTaskButton');
          const removeAllButton = document.getElementById('removeAllButton');
         const taskList = document.getElementById('taskList');

            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
              updateTaskList();
            addTaskButton.addEventListener('click', function() {
              const task = taskInput.value.trim();
                if (task !== '') {
                  tasks.push(task);
                  taskInput.value = '';
                  localStorage.setItem('tasks', JSON.stringify(tasks));
                 updateTaskList();
                }
           });

         removeAllButton.addEventListener('click', function() {
            tasks = [];
            localStorage.setItem('tasks', JSON.stringify(tasks));
             updateTaskList();
          });

          function updateTaskList() {
            taskList.innerHTML = '';
             tasks.forEach(task => {
                  const li = document.createElement('li');
                  li.textContent = task;
                 taskList.appendChild(li);
             });
        }
          function pickRandomTask() {
               if (tasks.length === 0) {
                    alert("Please add some tasks!");
                    return "Please add some tasks!"
                }
                const randomIndex = Math.floor(Math.random() * tasks.length);
                return tasks[randomIndex];
          }
          spinButton.addEventListener('click', function() {
              const randomTask = pickRandomTask();
                if(randomTask) { alert(`Your random task is: ${randomTask}`) }
          });
         spinButtonBottom.addEventListener('click', function() {
                 const randomTask = pickRandomTask();
               if(randomTask) { alert(`Your random task is: ${randomTask}`) }
         });
    });
