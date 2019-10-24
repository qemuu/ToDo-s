var toSend = []
var tasks = []

function fetchAndRender() {
    $.getJSON("http://localhost:3000/TaskList").then(data => {
        tasks = data
        renderTasks(tasks)
        // console.log(tasks)
    })
}

function renderTasks(tasks) {
    tasks.forEach(function (index) {
        $(".container").append(
            `
        <div>
            <p class="activiti" data-test="${index.id}">${index.name}</p>
        </div>`)


    })
}

fetchAndRender()

$(".container").on('click', '.activiti', function (e) {
    let that = $(e.target)

    const id = that.data('test')
    const task = tasks.find(t => t.id == id)
    task.completed = !task.completed




    toSend.push(task)

    that.css("background-color", "red")
    return task
})
// console.log(task)
function sendArray(arrayTo) {
    arrayTo.forEach(elem =>
        $.ajax({
            method: "PUT",
            url: `http://localhost:3000/TaskList/${elem.id}`,
            data: JSON.stringify(elem),
            contentType: "application/json"

        }))

}



$(".send").on('click',function(){
    // sendArray(toSend)
    console.log(task)

} )


