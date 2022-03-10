function createCalendar(elem, year, month) {
    month--;
    let first = (new Date(year, month, 1)).getDay();
    first = !first ? 7 : first;
    const last = getMonthLastDay(year, month);
    const rowsCount = Math.ceil((last + first) / 7);
    const calendar = document.createElement('table');
    const thead = getWeekDaysHTML();
    const tbody = document.createElement('tbody');

    tbody.innerHTML = thead;
    calendar.append(tbody);
    const days = calendar.tBodies[0];

    for (let i = 0; i < rowsCount; i++) {
        const row = document.createElement('tr');

        for (j = 0; j < 7; j++) {
            const td = document.createElement('td');
            row.append(td);
        }

        days.append(row);
    }

    let items = calendar.querySelectorAll('td');

    for (let i = 0; i < last; i++) {
        start = first - 1;
        items[i + start].innerText = i + 1;
    }

    elem.append(calendar);
}

function getMonthLastDay(year, month) {
    const last = new Date(year, month + 1, 0);
    return last.getDate();
}

function getWeekDaysHTML() {
    return `
    <thead>
        <tr>
            <th>MO</th>
            <th>TU</th>
            <th>WE</th>
            <th>TH</th>
            <th>FR</th>
            <th>SA</th>
            <th>SU</th>
        </tr>
    </thead>`;
}

const root = document.getElementById('root')
// createCalendar(root, 2022, 1);
// createCalendar(root, 2022, 2);
createCalendar(root, 2022, 3);
// createCalendar(root, 2022, 2);
// createCalendar(root, 2022, 5);
// createCalendar(root, 2022, 6);
// createCalendar(root, 2022, 7);
// createCalendar(root, 2022, 8);
// createCalendar(root, 2022, 9);
// createCalendar(root, 2022, 10);
// createCalendar(root, 2022, 11);
// createCalendar(root, 2022, 12);

