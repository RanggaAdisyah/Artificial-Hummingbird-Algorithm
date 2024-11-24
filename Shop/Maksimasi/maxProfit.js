function maxProfit(x, y, z) {
    const profitA = 50000;
    const profitB = 30000;
    const profitC = 40000; 
    const timeA = 2;
    const timeB = 1;
    const timeC = 3; 
    const materialA = 6;
    const materialB = 4;
    const materialC = 8; 
    const maxTime = 24; 
    const maxMaterial = 100; 

    const totalTime = x * timeA + y * timeB + z * timeC;
    const totalMaterial = x * materialA + y * materialB + z * materialC;
    const totalProfit = x * profitA + y * profitB + z * profitC;

    if (totalTime > maxTime || totalMaterial > maxMaterial) {
        return 0;
    } else {
        return totalProfit; 
    }
}

export { maxProfit };
