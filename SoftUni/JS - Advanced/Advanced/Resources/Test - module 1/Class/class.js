class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length < this.space) {
            this.wines.push({
                wineName,
                wineType,
                price,
                paid: false,
            });
            return `You reserved a bottle of ${wineName} ${wineType} wine.`;
        }
        throw new Error('Not enough space in the cellar.');
    }

    payWineBottle(wineName, price) {
        let wine = this.wines.find(wine => wine.wineName == wineName);

        if (wine) {
            if (wine.paid == true) {
                throw new Error(`${wineName} has already been paid.`);
            }
            wine.paid = true;
            this.bill += wine.price;
            return `You bought a ${wineName} for a ${price}$.`;
        }
        throw new Error(`${wineName} is not in the cellar.`);
    }

    openBottle(wineName) {
        let bottle = this.wines.find((wine, i) => {
            if (wine.wineName == wineName) {
                wine.i = i;
                return wine;
            }
        });

        if (bottle) {
            if (bottle.paid == false) {
                throw new Error(`${wineName} need to be paid before open the bottle.`);
            }
            this.wines.splice(bottle.i, 1);

            return `You drank a bottle of ${wineName}.`;
        }

        throw new Error(`The wine, you're looking for, is not found.`);
    }

    cellarRevision(wineType) {
        let copy = Array.from(this.wines);
        let str = '';

        if (!wineType) {
            str = `You have space for ${this.space - this.wines.length} bottles more.\nYou paid ${
                this.bill
            }$ for the wine.`;

            copy.sort((a, b) => a.wineName.localeCompare(b.wineName));

            copy.forEach(
                wine =>
                    (str += `\n${wine.wineName} > ${wine.wineType} - ${
                        wine.paid == true ? `Has Paid` : `Not Paid`
                    }.`)
            );
        } else {
            let filtered = copy.filter(wine => wine.wineType == wineType);
            if (!filtered[0]) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }

            str += `${filtered[0].wineName} > ${filtered[0].wineType} - ${
                filtered[0].paid == true ? `Has Paid` : `Not Paid`
            }.`;

            filtered.forEach((wine, i) => {
                if (i > 0) {
                    str += `${wine.wineName} > ${wine.wineType} - ${
                        wine.paid == true ? `Has Paid` : `Not Paid`
                    }.`;
                }
            });
        }

        return str;
    }
}
