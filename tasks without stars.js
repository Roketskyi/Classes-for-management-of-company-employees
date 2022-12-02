class COAXManag {
    constructor(firstName, lastName, phoneNumber, position, education, dateOfEmployment) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.position = position;
        this.education = education;
        this.dateOfEmployment = dateOfEmployment;
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
}

const coaxmanag = new COAXManag('Roman', 'Roketskyi', 380665213423, 'DevOps', 'Software engineering', 2013); 

console.log(coaxmanag)