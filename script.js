 document.addEventListener('DOMContentLoaded', function () {
    const spinButton = document.getElementById('spinButton');
    const spinButtonBottom = document.getElementById('spinButtonBottom');
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
      const removeAllButton = document.getElementById('removeAllButton');
    const taskList = document.getElementById('taskList');
     const resultText = document.getElementById('resultText');
     const resultSection = document.getElementById('resultSection');

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

    function pickRandomTask(callback) {
          if(tasks.length === 0)
          {
              resultText.textContent = "Please add some tasks!";
             return;
          }
           resultText.textContent = '';
             let i = 0;
           let timeouts = [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.6, 0.6, 0.6, 0.6, 0.6, 1.1, 1.1];

           function showRandomTasks()
            {
               if(i < timeouts.length)
               {
                    let randomIndex = Math.floor(Math.random() * tasks.length);
                    let randomTask = tasks[randomIndex];
                   resultText.textContent = randomTask;
                  setTimeout(showRandomTasks, timeouts[i]*1000);
                   i++;
                } else {
                    let randomIndex = Math.floor(Math.random() * tasks.length);
                     let randomTask = tasks[randomIndex];
                      resultText.textContent = randomTask;
                      resultText.style.fontWeight = 'bold';
                  }
            }
             showRandomTasks();
    }


        spinButton.addEventListener('click', function() {
               pickRandomTask();
        });
    spinButtonBottom.addEventListener('click', function() {
            pickRandomTask();
    });
});
