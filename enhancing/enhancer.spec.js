const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {

    // describe('succeed()', () => {
    //     it.todo('')
    // })

    // describe('fail()', () => {
        
    // })

    describe('repair()', () => {
        it.todo('should throw an error when passed null or undefined argument')
        it('should have only accept an object with name, durability and enhancement properties', () => {
            const item = {
                name: 'Mjolnir',
                durability: 80,
                enhancement: 20
            }
            const repairedItem = repair(item)
            expect(repairedItem).toHaveProperty('name');
            expect(repairedItem).toHaveProperty('durability');
            expect(repairedItem).toHaveProperty('enhancement');
        it.todo('durability property should be less than 100')
        it.todo('should return a new item')
        it.todo('durability property should not exceed 100')
        })
    })
    // stretch
    // describe('get()', () => {
        
    // })
})