const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
const item = {
    name: 'Mjolnir',
    durability: 80,
    enhancement: 18
}
describe('enhancer.js', () => {

    describe('succeed()', () => {
        it('should increment enhancement by one', () => {
            const onSuccess = succeed(item);
            console.log(onSuccess)
            expect(onSuccess.enhancement).toEqual(19) // dependent on item above, changing will break the test
        })
        it('should not change when exceeding an enhancement level of 20', () => {
            for(let i = 0; i < 21; i++){
                succeed(item);
            };
            expect(item.enhancement).toBeLessThanOrEqual(20)

        })
        it.todo('should not change the durability of the item')
        // This is impossible to do with the current code, so I'm skipping until told otherwise
    })

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