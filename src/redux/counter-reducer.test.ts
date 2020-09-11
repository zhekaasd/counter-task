import {
    changeValueAC,
    counterReducer,
    InitialType,
    resetValueAC, setChangedValueAC,
    setValueMaxAC,
    setValueMinAC
} from "./counter-reducer";


let startState: InitialType = {
    max: 1,
    min: 0,
    value: 0,
    inc: true,
    reset: true,
    set: false,
    editMode: false};
beforeEach(() => {
    startState = {
        max: 15,
        min: 5,
        value: 10,
        inc: true,
        reset: true,
        set: false,
        editMode: false
    }
});


test('the counter should be correct and disabled "set" button', () => {

    const endState = counterReducer(startState, changeValueAC());

    expect(endState.value).toBe(11);
    expect(endState.inc).toBe(false);
    expect(endState.reset).toBe(false);
    expect(endState.set).toBe(true);
})


test('should be correct return value and disabled "reset" button', () => {
    const endState = counterReducer(startState, resetValueAC());

    expect(endState.value).toBe(5);
    expect(endState.reset).toBe(true);
})


test('should be correct "set" min value and activated "set" button', () => {
    const endState = counterReducer(startState, setValueMinAC(666));

    expect(endState.min).toBe(666);
    expect(endState.set).toBe(false);
    expect(endState.reset).toBe(true);
    expect(endState.inc).toBe(true);
})


test('should be correct "set" max value and activated "set" button', () => {
    const endState = counterReducer(startState, setValueMaxAC(666));

    expect(endState.max).toBe(666);
    expect(endState.set).toBe(false);
    expect(endState.reset).toBe(true);
    expect(endState.inc).toBe(true);
})


test('should be correct set value in "state" and disable "set" button', () => {
    const endState = counterReducer(startState, setChangedValueAC(23));

    expect(endState.value).toBe(23);
    expect(endState.inc).toBe(false);
    expect(endState.reset).toBe(true);
    expect(endState.set).toBe(true);
})