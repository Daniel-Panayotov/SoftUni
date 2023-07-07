//15:30 - 16:20

function solve() {
    let hireBtn = document.getElementById('add-worker');
    hireBtn.addEventListener('click', hired);

    let sum = document.getElementById('sum');

    let tbody = document.getElementById('tbody');
    tbody.addEventListener('click', clicked);

    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let birth = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');

    function hired(e) {
        e.preventDefault();

        if (
            fname.value != '' &&
            lname.value != '' &&
            email.value != '' &&
            birth.value != '' &&
            position.value != '' &&
            salary.value != ''
        ) {
            let tr = document.createElement('tr');
            tr.appendChild(create('td', fname.value));
            tr.appendChild(create('td', lname.value));
            tr.appendChild(create('td', email.value));
            tr.appendChild(create('td', birth.value));
            tr.appendChild(create('td', position.value));
            tr.appendChild(create('td', salary.value));

            let td = document.createElement('td');
            let edit = create('button', 'Edit', 'edit');
            let fired = create('button', 'Fired', 'fired');
            td.appendChild(fired);
            td.appendChild(edit);
            tr.appendChild(td);
            tbody.appendChild(tr);

            sum.textContent = (Number(sum.textContent) + Number(salary.value)).toFixed(2);

            fname.value = '';
            lname.value = '';
            email.value = '';
            birth.value = '';
            position.value = '';
            salary.value = '';
        }
    }

    function clicked(e) {
        let btn = e.target;
        if (btn.className == 'edit') {
            let [fName, lastname, eMail, bIrth, pOsition, sAlary] =
                btn.parentElement.parentElement.querySelectorAll('td');

            fname.value = fName.textContent;
            lname.value = lastname.textContent;
            email.value = eMail.textContent;
            birth.value = bIrth.textContent;
            position.value = pOsition.textContent;
            salary.value = sAlary.textContent;

            sum.textContent = (Number(sum.textContent) - Number(sAlary.textContent)).toFixed(2);
            btn.parentElement.parentElement.remove();
        } else if (btn.className == 'fired') {
            let money = btn.parentElement.parentElement.querySelectorAll('td')[5].textContent;
            sum.textContent = (Number(sum.textContent) - Number(money)).toFixed(2);
            btn.parentElement.parentElement.remove();
        }
    }

    function create(element, value, clas) {
        let el = document.createElement(element);
        el.textContent = value;
        if (clas) {
            el.className = clas;
        }
        return el;
    }
}
solve();
