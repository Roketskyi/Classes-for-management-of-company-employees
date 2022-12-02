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
        return this._position;
    }
    set position(value) {
        if(value === 'ITManag') {
            return this._position = value;
        } else if(value === 'SysAdmin') {
            return this._position = value;
        } else if(value === 'JSDeveloper') {
            return this._position = value;
        } else if(value === 'DevOps') {
            return this._position = value;
        } 

        this._position = undefined;
    }

    get yearOfEmployment() {
        return this._position;
    }
    set yearOfEmployment(value) {
        if(value > 2022) {
            return this._yearOfEmployment = undefined;
        } else if (Date()) {
            return this._yearOfEmployment = value;
        }
        
    }
}

const coaxmanag = new COAXManag('Roman', 'Roketskyi', 380665213423, 'DevOps', 'Software engineering', 2023); 

console.log(coaxmanag)