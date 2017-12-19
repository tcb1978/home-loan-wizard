
const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE'
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_PROP = 'UPDATE_PROP'
const UPDATE_FOUND = 'UPDATE_FOUND'
const REAL_ESTATE_AGENT = 'REAL_ESTATE_AGENT'
const COST = 'COST'
const UPDATE_DOWN_PAYMENT = 'UPDATE_DOWN_PAYMENT'
const UPDATE_CREDIT = 'UPDATE_CREDIT'
const UPDATE_HISTORY = 'HISTORY'
const UPDATE_ADDRESS_1 = "UPDATE_ADDRESS_1";
const UPDATE_ADDRESS_2 = "UPDATE_ADDRESS_2";
const UPDATE_ADDRESS_3 = "UPDATE_ADDRESS_3";
const UPDATE_FIRST = "UPDATE_FIRST";
const UPDATE_LAST = "UPDATE_LAST";
const UPDATE_EMAIL = "UPDATE_EMAIL";


export function reducer(state = initialState, action){
    console.log(action);
    switch (action.type) {
        case UPDATE_LOAN_TYPE:
            return {
                ...state, loanType: action.payload
            } 
        case UPDATE_PROPERTY_TYPE:
            return {
                ...state, propertyType: action.payload
            }
        case UPDATE_CITY:
            return {
                ...state, city: action.payload
            }
        case UPDATE_PROP:
            return {
                ...state, propToBeUsedOn: action.payload
            }
        case UPDATE_FOUND:
            return {
                ...state, found: action.payload
            }
        case REAL_ESTATE_AGENT:
            return {
                ...state, realEstateAgent: action.payload
            }
        case COST:
            return {
                ...state, cost: action.payload
            }
        case UPDATE_DOWN_PAYMENT:
            return {
                ...state, downPayment: action.payload
            }
        case UPDATE_CREDIT:
            return {
                ...state, credit: action.payload
            }
        case UPDATE_HISTORY:
            return {
                ...state, history: action.payload
            }
        case UPDATE_ADDRESS_1:
            return {
                ...state, addressOne: action.payload 
            }
        case UPDATE_ADDRESS_2:
            return {
                ...state, addressTwo: action.payload 
            }
        case UPDATE_ADDRESS_3:
            return {
                ...state, addressThree: action.payload 
            }
        case UPDATE_FIRST:
            return {
                ...state, firstName: action.payload 
            }
        case UPDATE_LAST:
            return {
                ...state, lastName: action.payload 
            }

        case UPDATE_EMAIL:
            return {
                ...state, email: action.payload 
            }
        default: 
            return state;
    }
}

export function updateLoanType(loanType){
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

export function updatePropertyType(propertyType){   
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: propertyType
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateProp(propToBeUsedOn) {
    return {
        type: UPDATE_PROP,
        payload: propToBeUsedOn
    }
}

export function updateFound(found) {
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}

export function realEstateAgent(realEstateAgent) {
    return {
        type: UPDATE_FOUND,
        payload: realEstateAgent
    }
}

export function cost(cost) {
    return {
        type:  COST,
        payload: cost
    }
}

export function updateDownPayment(downPayment) {
    return {
        type: UPDATE_DOWN_PAYMENT,
        payload: downPayment
    }
}

export function updateCredit(credit) {
    return {
        type: UPDATE_CREDIT,
        payload: credit
    }
}

export function updateHistory(history) {
    return {
        type: UPDATE_HISTORY,
        payload: history
    };
}

export function updateAddress1(addressOne) {
    return {
        type: UPDATE_ADDRESS_1,
        payload: addressOne
    };
}

export function updateAddress2(addressTwo) {
    return {
        type: UPDATE_ADDRESS_2,
        payload: addressTwo
    };
}

export function updateAddress3(addressThree) {
    return {
        type: UPDATE_ADDRESS_3,
        payload: addressThree
    };
}

export function updateFirst(firstName) {
    return {
        type: UPDATE_FIRST,
        payload: firstName
    };
}

export function updateLast(lastName) {
    return {
        type: UPDATE_LAST,
        payload: lastName
    };
}

export function updateEmail(email) {
    return {
        type: UPDATE_EMAIL,
        payload: email
    };
}

export default reducer;