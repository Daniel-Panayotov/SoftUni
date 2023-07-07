function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    let input = document.querySelector('#inputs textarea');
    let restrOutput = document.querySelector('#bestRestaurant p');
    let workerOutput = document.querySelector('#workers p');

    function onClick() {
        let parsed = JSON.parse(input.value);
        let holder = parsed.map(val => val.split(' - ').join(', ').split(', '));

        let companies = {};

        holder.forEach(val => {
            if (!companies[val[0]]) {
                companies[val[0]] = {
                    money: 0,
                };
            }

            for (let i = 1; i < val.length; i++) {
                let [worker, pay] = val[i].split(' ');
                companies[val[0]][worker] = Number(pay);
                companies[val[0]].money += Number(pay);
            }
        });

        let totalPay = 0;
        let str = '';
        for (let company in companies) {
            let allPay =
                companies[company].money /
                (Object.keys(companies[company]).length - 1);
            if (allPay > totalPay) {
                str = company;
                totalPay = allPay.toFixed(2);
            }
        }

        delete companies[str].money;
        let workers = '';
        let bestSalary = 0;
        for (let worker in companies[str]) {
            if (companies[str][worker] > bestSalary) {
                bestSalary = companies[str][worker];
            }
            workers += `Name: ${worker} With Salary: ${companies[str][worker]} `;
        }
        restrOutput.textContent = `Name: ${str} Average Salary: ${totalPay} Best Salary: ${bestSalary.toFixed(
            2
        )}`;

        workerOutput.textContent = workers;
    }
}
