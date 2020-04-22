const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
const item = {
    name: 'Mjolnir',
    durability: 80,
    enhancement: 20
}
describe('enhancer.js', () => {

    // describe('succeed()', () => {
    //     it.todo('')
    // })

    // describe('fail()', () => {
        
    // })

    describe('repair()', () => {
        it('should not return null or undefined', () => {
            expect(repair(item)).not.toBeNull();
            expect(repair(item)).not.toBeUndefined();
        })
        it('should have only accept an object with name, durability and enhancement properties', () => {
            const repairedItem = repair(item)
            expect(repairedItem).toHaveProperty('name');
            expect(repairedItem).toHaveProperty('durability');
            expect(repairedItem).toHaveProperty('enhancement');
        });
        it('should not pass a durability property that exceeds or is equal to 100', () =>{
            expect(item.durability).toBeLessThan(100);
        })
        it('durability property should equal 100 when repaired', () => {
            const repairedItem = repair(item)
            expect(repairedItem.durability).toBe(100)
        })
        
        })
    })
    // stretch
    // describe('get()', () => {
        
    // })