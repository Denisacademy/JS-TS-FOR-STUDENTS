import {mult, splitIntoWords, sum} from "./01";

let a: number, b: number, c: number;


//every time we set data before launching tests
beforeEach(() => {
    a = 1, b = 2, c = 3
})

test('sum should be correct', () => {
//    state
    a += 200
//    action
    const result = sum(a, b)
    const result1 = sum(b, c)
    const result2 = sum(a, c)

//expect result
    expect(result).toBe(203)
    expect(result1).toBe(5)
    expect(result2).toBe(204)
})

test('multiply should be correct', () => {
//    state

//    action
    const result = mult(a, b)
    const result1 = mult(b, c)
    const result2 = mult(a, c)

//expect result
    expect(result).toBe(2)
    expect(result1).toBe(6)
    expect(result2).toBe(3)
})

test('splitting into word should be correct', () => {
    const sent1 = 'Hello my friend!'
    const sent2 = 'JS - the best programming language.'

    const result = splitIntoWords(sent1)
    const result1 = splitIntoWords(sent2)

    expect(result[0]).toBe('hello')
    expect(result[1]).toBe('my')
    expect(result[2]).toBe('friend')

    expect(result.length).toBe(3)

    expect(result1.length).toBe(6)
    expect(result1[1]).toBe('-')

})