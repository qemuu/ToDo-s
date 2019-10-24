let name = $.getJSON("http://localhost:3000/TaskList", function (data) {
    console.log(data)

    data.forEach(function (index) {
        $(".container").append(
            `
        <div>
            <p class="activiti">${index.name}</p>
        </div>`)


    })
    
}
)

// console.log(name)

let activities = []


$(".container").on('click', '.activiti', function (e) {
    let that = $(e.target)
    
    //tutaj myślałem o tym zeby sprawdzić czy kliknięty element znajduje się w którymś z obiektów od JSON ,ale nie wiem jak to zrobić
    //plus ta pentla niżej raz działa raz nie. Jeżeli uzywam debuggera i przechodze po kroku to dział (z console logiem) a bez nie działa
    // for(let i = 0 ; i<name.responseJSON; i++){
//     if (name.responseJSON[i].name === that.text()){
//         activities.push(name.responseJSON[i])
//     }
// }
    
    that.css("background-color", "red")
    // activities.push(that.text())

})
// to ma być przycisk wysyłający POST tylko musze własnie zebrać data do wysłania
$(".send").on('click', function () {
    for (let i = 0; i < activities.length; i++) {
        const element = activities[i];
        console.log(element)

    }
})

// for(let i = 0 ; i<name.responseJSON; i++){
//     if (name.responseJSON[i].name === that.text()){
//         console.log('chuj')
//     }
// }