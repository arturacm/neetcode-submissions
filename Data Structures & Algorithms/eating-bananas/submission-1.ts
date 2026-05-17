function isValidSpeed(piles: number[], h: number, speed: number): boolean{
    let amount = 0;
    for (let pile of piles){
        amount += Math.ceil(pile/speed)
        console.log(amount)
    }
    return amount <= h;
}

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = Math.max(...piles);
        while (left<= right){
            let speed = Math.floor((left+right)/2);

            const prevValid = isValidSpeed(piles, h, speed - 1)
            const currentValid = isValidSpeed(piles, h, speed)

            if (!prevValid && currentValid){
                return speed;
            }
            if (prevValid && currentValid){
                right = speed - 1;
            } else {
                left = speed + 1;
            }

        }
        return -1;
    }
}


