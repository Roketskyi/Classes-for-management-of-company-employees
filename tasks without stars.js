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
        this._position;
    }

    set position(value) {
        if (['ITManag', 'SysAdmin', 'JSDeveloper', 'DevOps'].includes(value)) this._position = value
        else this._position = null;
    }
}

const coaxmanag = new COAXManag('Roman', 'Roketskyi', 380665213423, 'JSSDeveloper', 'Software engineering', 2013); 

console.log(coaxmanag)
