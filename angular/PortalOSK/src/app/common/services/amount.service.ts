import { Injectable } from '@angular/core';

@Injectable()
export class AmountService {

    isHavingDecimalSeparator(amount: string) {

        if (amount.includes('.')) {
            return { separator: "dot" }
        }

        if (amount.includes(',')) {
            return { separator: "comma" }
        }

        return { separator: null }
    }

    getMinorUnits(amountParts: string[]) {
        var mainAmount = amountParts[0];
        var decimals = amountParts[1];
        console.log(amountParts)
        if (decimals.length < 2) {
            decimals = decimals + 0;

        }
        return mainAmount + decimals

    }
    convertToMinorUnits(amount: string) {

        console.log("amount: " + amount)
        switch (this.isHavingDecimalSeparator(amount).separator) {
            case "dot":
                console.log(this.isHavingDecimalSeparator(amount).separator)

                return parseFloat(this.getMinorUnits(amount.split('.')))

            case "comma":

                console.log(this.isHavingDecimalSeparator(amount).separator)
                return parseFloat(this.getMinorUnits(amount.replace(',', '.').split('.')))

            default:

                return parseFloat(amount) * 100;

        }
    }

    getAmountInFormat(amount: number) {
        return (amount / 100).toFixed(2).toString()
    }
}