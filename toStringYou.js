

const russellReiter = Object.create(null, {
    firstName: {
        value: "Russell"
    },
    lastName: {
        value: "Reiter"
    },
    dateOfBirth: {
        value: "September 12, 1971"
    },
    placeOfBirth: {
        value: "Winterpark, FL"
    },
    currentCity: {
        value: "Nashville",
        writable: true
    },
    currentState: {
        value: "Tennessee",
        writable: true
    },
    toString: {
        value: function (){
            console.log(`${this.firstName} ${this.lastName} was born in ${this.placeOfBirth}. He was born on ${this.dateOfBirth}. He currently lives in ${this.currentCity}, ${this.currentState}.`)
        },
        enumerable: false
    }
})
// russellReiter.toString();