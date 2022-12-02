const todayYear = new Date().getFullYear();

class COAXManag {
    constructor(firstName, lastName, phoneNumber, position, education, yearOfEmployment) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.position = position;
        this.education = education;
        this.yearOfEmployment = yearOfEmployment;
    }

    get position() {
        this._position;
    }
    set position(value) {
        if (['ITManag', 'SysAdmin', 'JSDeveloper', 'DevOps'].includes(value)) this._position = value
        else this._position = null;
    }

    get yearOfEmployment() {
        this._position;
    }
    set yearOfEmployment(value) {
        if (value > todayYear) this._yearOfEmployment = null;
        else this._yearOfEmployment = value;       
    }
}

const coaxmanag = new COAXManag('Roman', 'Roketskyi', 380665213423, 'DevOps', 'Software engineering', 2023); 

console.log(coaxmanag)
