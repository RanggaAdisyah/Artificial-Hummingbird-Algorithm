class Hummingbird {
    constructor(nDimensi, objFunction) {
        this.objFunction = objFunction;
        this.nDimensi = nDimensi;
        this.position = Array(nDimensi).fill(0);
        this.fitness = Infinity;
        this.bestPosition = Array(nDimensi).fill(0);
        this.bestFitness = Infinity;
    }

    inisialisasi(min, max) {
        for (let i = 0; i < this.nDimensi; i++) {
            this.position[i] = Math.floor(Math.random() * (max - min) + min);
            this.bestPosition[i] = this.position[i];
        }
        this.calculateFitness();
    }

    calculateFitness() {
        this.fitness = this.objFunction(...this.position);
    }

    updateBest() {
        if (this.fitness < this.bestFitness) {
            this.bestFitness = this.fitness;
            this.bestPosition = [...this.position];
        }
    }
}

export { Hummingbird };
