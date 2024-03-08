export const validators = (data) => {
    let validations = {
        validName: null,
        validPassowrd: null
}
    let validPassowrdValidations = {
        upper: 2,
        lower: 2,
        specialChar: 2,
        nums_: 2,
        min: 8
    }

    let upper = 0
    let lower = 0
    let specialChar = 0
    let nums_ = 0
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', '|', ';', ':', '"', '\'', ',', '.', '<', '>', '/', '?', '`', '~'];

    if (data.name.length == 0) {
        validations.validName = -1
    }

    for (let i in data.name) {
        let char_ = data.name[i]

        let o = nums.indexOf(Number(char_))
        let p = specialCharacters.indexOf(char_)

        if (o != -1 || p != -1) {
            validations.validName = -1
        } else {
            validations.validName = 1
        }
    }
    if (data.password.length < validPassowrdValidations.min) {
        validations.validPassowrd = -1
    }
    else {
        for (let x in data.password) {
            if (specialCharacters.indexOf(data.password[x]) != -1) {
                specialChar = specialChar + 1;
            }
            else if (nums.indexOf(Number(data.password[x])) != -1) {
                nums_ = nums_ + 1;
                console.log(nums_)
            }
            else if (data.password[x] == data.password[x].toUpperCase()) {
                upper = upper + 1;
            }
            else if (data.password[x] == data.password[x].toLowerCase()) {
                lower = lower + 1;
            }
        }
    }
    if (validPassowrdValidations.upper > upper || validPassowrdValidations.lower > lower || validPassowrdValidations.specialChar > specialChar || validPassowrdValidations.nums_ > nums_) {
        validations.validPassowrd = -1
    }
    else {
        validations.validPassowrd = 1
    }

    let validationValue = ''
    if (validations.validName == -1 || validations.validPassowrd == -1) {
        validationValue = 101
    }
    else {
        validationValue = 100
    }
    return validationValue
}