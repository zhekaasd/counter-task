export type InitialType = {
    max: number,
    min: number,
    value: number,
    inc: boolean,
    reset: boolean,
    setSetting: boolean,
    editMode: boolean,
    inputValue: number
}


export type ActionsType = ChangeValueActionType | ResetValueActionType |
    SetValueMinActionType | SetValueMaxActionType | SetChangedValueActionType;


export type ChangeValueActionType = {
    type: 'CHANGE-VALUE'
}

export type ResetValueActionType = {
    type: 'RESET-VALUE'
}

export type SetValueMinActionType = {
    type: 'SET-VALUE-MIN',
    valueMin: number
}

export type SetValueMaxActionType = {
    type: 'SET-VALUE-MAX',
    valueMax: number
}

export type SetChangedValueActionType = {
    type: 'SET-CHANGED-VALUE',
    valueVs: number
}




const initialState:InitialType = {
    max: 1,
    min: 0,
    inputValue: 0,
    value: 0,
    inc: true,
    reset: true,
    setSetting: false,
    editMode: false
};



export const counterReducer = (state: InitialType = initialState, action: ActionsType): InitialType => {
    switch (action.type) {
        case "CHANGE-VALUE": {
            let stateCopy = {...state};
            let counter = stateCopy.value + 1;
            /*            if (counter >= stateCopy.max) {
                            counter = stateCopy.max;
                            stateCopy.inc = true;
                        }*/
            counter >= stateCopy.max ? stateCopy.inc = true : stateCopy.inc = false;

            return {...stateCopy, reset: false, setSetting: true, value: counter};
            /*            stateCopy.reset = false;
                        stateCopy.set = true;
                        stateCopy.value = counter;
                        stateCopy.inc = false;*/
        }

        case 'RESET-VALUE': {
            let stateCopy = {...state};
            if ( stateCopy.value > 0 ) {
                stateCopy.value = stateCopy.min
            }
            stateCopy = {...stateCopy, reset: true, inc: false}

            return stateCopy;
        }

        case "SET-VALUE-MIN": {
            return {...state, min: action.valueMin, reset: true, inc: true, editMode: false, setSetting: false};
        }

        case "SET-VALUE-MAX": {
            return {...state, max: action.valueMax, reset: true, inc: true, editMode: false, setSetting: false};
        }
        case "SET-CHANGED-VALUE": {
            return {...state, value: action.valueVs, inc: false, editMode: true, reset: true, setSetting: true};
        }

        default:
            return state;
    }
}



export const changeValueAC = (): ChangeValueActionType => {
    return {type: 'CHANGE-VALUE', }
}

export const resetValueAC = (): ResetValueActionType => {
    return {type: 'RESET-VALUE'}
}

export const setValueMinAC = (valueMin: number): SetValueMinActionType => {
    return {type: 'SET-VALUE-MIN', valueMin}
}

export const setValueMaxAC = (valueMax: number): SetValueMaxActionType => {
    return {type: 'SET-VALUE-MAX', valueMax}
}

export const setChangedValueAC = (valueVs: number): SetChangedValueActionType => {
    return {type: 'SET-CHANGED-VALUE', valueVs}
}