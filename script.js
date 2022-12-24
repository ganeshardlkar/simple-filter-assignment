var employee = document.getElementById("employee");

var e = document.getElementById("prof");

var count = 3;

let prof = [
    {id:1, name:"John", age:"18", profession:"Developer"},
    {id:2, name:"Jack", age:"20", profession:"Developer"},
    {id:3, name:"Karen", age:"19", profession:"Admin"}
]

function addNewUser() {
    count++;
    var newusername = document.getElementById("newUserName").value;
    var newuserprof = document.getElementById("newUserProf").value;
    var newuserage = document.getElementById("newUserAge").value;

    var obj = {
        id: count,
        name: newusername,
        age: newuserage,
        profession: newuserprof
    };
    
    prof.push(obj)

    console.log(prof);
    renderHTML(prof);
    
    // var frm = document.getElementsByName('frm');
    var frm = document.getElementById('add');
    frm.reset();
}
var value = '';

if(value == '') {
    renderHTML(prof);
}

function selectProf() {
    value = e.options[e.selectedIndex].value;
    // console.log(value);
}


function filter() {
    if(value == '') {
        return alert('Please select the profession')
    }
    var result = prof.filter(checkProfession);

    console.log(result);
    renderHTML(result);
}

function checkProfession(item) {
    if(item.profession == value) {
        return item;
    }
}



function renderHTML(item) {
    employee.innerHTML = item.reduce((htmlString, item) => {
        return htmlString + `
            <div class="employeeItem">
                <span>
                    ${item.id}.
                </span>
                <span>
                    Name: ${item.name}
                </span>
                <span>
                    Age: ${item.age}
                </span>
                <span>
                    Profession: ${item.profession}
                </span>
                
            </div>
        `;
    }, "");
}