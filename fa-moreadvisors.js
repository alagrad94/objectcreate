const financialAdvisor = Object.create ({}, {

    company: {
        value: "Russell's Financial Wizards",
        writable: true,
        enumerable: true
        },

    specialty:  {
        value: "",
        writable: true,
        enumerable: true
        },

    name: {
        value: "",
        writable: true,
        enumerable: true
        },

    portfolio: {
        value: [],
        writable: true
        },

    worth: {
        get: function () {
            let netWorth = 0;
            this.portfolio.forEach(stock => {
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
            this.portfolio.push(purchaseObj);
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
            for (let i = 0; i < this.portfolio.length; i++) {
                if (sellObj.stock === this.portfolio[i].stock) {
                    delete this.portfolio[i]
                }
            }
            let filtered = this.portfolio.filter(stock => stock != "undefined")
            this.portfolio = filtered;
        },
        enumerable: false
    },

    toString: {
        value: function(){
            console.log(`​​​​​${this.name} is an advisor at ${this.company}. Current portfolio value is US$ ${this.worth}`)
        }
    },

})



const JuliaKimChung = Object.create(financialAdvisor)
    JuliaKimChung.name = "Julia Chung";
    JuliaKimChung.specialty = "Making tons of cash trading bonds";
    JuliaKimChung.portfolio = [];

const IkeNwaelele = Object.create(financialAdvisor)
    IkeNwaelele.name = "Ike Nwaelele";
    IkeNwaelele.specialty =  "Making tons of cash trading futures";
    IkeNwaelele.portfolio = [];

const ImaBigpimp = Object.create(financialAdvisor)
    ImaBigpimp.name = "Ima Bigpimp",
    ImaBigpimp.specialty = "Making tons of cash trading commodities"
    ImaBigpimp.portfolio = [];


ImaBigpimp.purchase("TRTR", 100, 50);
ImaBigpimp.purchase("TSTS", 100, 20);
ImaBigpimp.sell("TRTR", 100, 50)
JuliaKimChung.purchase("ABCD", 2500, 1.25);
JuliaKimChung.purchase("DCBA", 250, 5.25);
JuliaKimChung.sell("ABCD", 2500, 1.25);
IkeNwaelele.purchase("JIHG", 100, 10);
IkeNwaelele.purchase("GHIJ", 200, 3);
IkeNwaelele.sell("JIHG", 100, 10);
console.log(ImaBigpimp);
console.log(JuliaKimChung);
console.log(IkeNwaelele);
console.log(financialAdvisor);
console.log(`${ImaBigpimp.name}'s Net Worth is: ${ImaBigpimp.worth}.  ${JuliaKimChung.name}'s Net Worth is: ${JuliaKimChung.worth}.  ${IkeNwaelele.name}'s Net Worth is: ${IkeNwaelele.worth}.`)
ImaBigpimp.toString();
JuliaKimChung.toString();
IkeNwaelele.toString();
