const financialAdvisor = Object.create (null, {

    company: {
        value: "Russell's Financial Wizards",
        writable: true,
        enumerable: true
        },

    specialty:  {
        value: "Making tons of cash trading stocks",
        writable: true,
        enumerable: true
        },

    name: {
        value: "Russell Reiter",
        enumerable: true
        },

    portfolio: {
        value: stocks = [],
        writable: true
        },

    worth: {
        value: function () {
            let netWorth = 0;
            stocks.forEach(stock => {
                netWorth += stock.quantity*stock.price
            });
            return netWorth;
        },
        enumerable: false
    },

    purchase: {
        value: function (symbol, quantity, price) {
            let purchaseObj = {
                "stock": symbol,
                "quantity": quantity,
                "price": price,
                "buyTransaction": true
            }
            stocks.push(purchaseObj);
        },
        enumerable: false
    },

    sell: {
        value: function (symbol, quantity, price) {
            let sellObj = {
                "stock": symbol,
                "quantity": quantity,
                "price": price,
                "buyTransaction": true
            }
            for (let i = 0; i < stocks.length; i++) {
                if (sellObj.stock === stocks[i].stock) {
                    delete stocks[i]
                }
            }
            let filtered = stocks.filter(stock => stock != "undefined")
            stocks = filtered;
        },
        enumerable: false
    },

    toString: {
        value: function(){
            console.log(`​​​​​${this.name} is an advisor at ${this.company}. Current portfolio value is US$ ${this.worth()}`)
        }
    },

})
financialAdvisor.purchase("TWTR", 100, 34.59);
financialAdvisor.purchase("STRT", 100, 24.59);
financialAdvisor.purchase("COOL", 100, 69.69);
financialAdvisor.purchase("NOPE", 100, 4.59);
financialAdvisor.sell("TWTR", 100, 34.59);
financialAdvisor.sell("STRT", 100, 34.59);
console.log("Net worth is now: " + financialAdvisor.worth().toFixed(2));
financialAdvisor.toString();