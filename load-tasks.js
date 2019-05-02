$(document).ready(function () {
    $.ajax('tasks.json', {
        success: function (data) {
            let taskList = $('ul');

            data.tasks.forEach(function (task) {
                let taskListItem = $(document.createElement('li'));
                taskListItem.text(task.name);

                taskList.append(taskListItem);
            });
        }
    });
});