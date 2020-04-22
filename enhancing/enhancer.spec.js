const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
// Item here for file
let item = {
    name: 'Mjolnir',
    durability: 80,
    enhancement: 15
}

describe('enhancer.js', () => {

    describe('succeed()', () => {
        it('should increment enhancement by one', () => {
            let { enhancement } = item
            let onSuccess = succeed(item);
            expect(onSuccess.enhancement).toBe(enhancement += 1) // dependent on item above, changing will break the test
        })
        it('should not change when exceeding an enhancement level of 20', () => {
            for(let i = 0; i < 21; i++){
                succeed(item);
            };
            expect(item.enhancement).toBeLessThanOrEqual(20)

        })
        it('should not change the durability of the item', () => {
            let { durability } = item
            let original = succeed(item)
            expect(original.durability).toBe(durability)
        });
        // This is impossible to do with the current code, so I'm skipping until told otherwise
    })

    describe('fail()', () => {
        it('should decrease durability by five if enhancement is 15 or less', () => {
            let { durability } = item
            item.enhancement = 14; // if time add a range between fn to throw a random acceptable number here 
            let onFail = fail(item);
            console.log('in fail', onFail.enhancement)
            expect(onFail.enhancement).toBeLessThan(15)
            expect(onFail.durability).toBe(durability -= 5)
        });
        it('should decrease durability by 10 if enhancement is 15 or more', () => {
            let { durability } = item
            item.enhancement = 15; // if time add a range between fn to throw a random acceptable number here 
            let onFail = fail(item);
            expect(onFail.enhancement).toBeGreaterThanOrEqual(15)
            expect(onFail.durability).toBe(durability -= 10)
        });
        it.todo('should decrease enhancement level by one if the enhancement level is greater than 16');
    })

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