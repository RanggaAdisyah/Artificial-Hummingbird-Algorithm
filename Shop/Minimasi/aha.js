import { Hummingbird } from './hummingbird.js'; // Pastikan pathnya sesuai

class AHA {
    constructor(nHummingbirds, nDimensi, objFunction) {
        this.nHummingbirds = nHummingbirds;
        this.hummingbirds = [];
        this.nDimensi = nDimensi;
        this.objFunction = objFunction;
        this.bestGlobalPosition = Array(nDimensi).fill(0);
        this.bestGlobalFitness = Infinity;
        this.iterationData = [];  
        this.initHummingbirds();
    }

    initHummingbirds() {
        for (let i = 0; i < this.nHummingbirds; i++) {
            const hummingbird = new Hummingbird(this.nDimensi, this.objFunction);
            hummingbird.inisialisasi(0, 30);
            this.hummingbirds.push(hummingbird);
        }
    }

    evaluateFitness() {
        this.hummingbirds.forEach((hummingbird) => {
            hummingbird.calculateFitness();
        });
    }

    updateGlobalBest() {
        this.hummingbirds.forEach((hummingbird) => {
            if (hummingbird.fitness < this.bestGlobalFitness) {
                this.bestGlobalFitness = hummingbird.fitness;
                this.bestGlobalPosition = [...hummingbird.position];
            }
        });
    }

    updatePosition(alpha = 0.5) {
        this.hummingbirds.forEach((hummingbird) => {
            const movementType = Math.random();
            const newPosition = Array(this.nDimensi).fill(0);

            for (let i = 0; i < this.nDimensi; i++) {
                if (movementType < 0.33) {
                    newPosition[i] = hummingbird.position[i] + (Math.random() * 2 - 1) * alpha;
                } else if (movementType < 0.66) {
                    newPosition[i] =
                        hummingbird.position[i] +
                        alpha * (this.bestGlobalPosition[i] - hummingbird.position[i]);
                } else {
                    newPosition[i] = hummingbird.position[i] + (Math.random() * 2 - 1) * alpha;
                }
                newPosition[i] = Math.min(Math.max(newPosition[i], 0), 30);
            }

            hummingbird.position = newPosition;
        });
    }

    mainAHA() {
        this.evaluateFitness();
        this.hummingbirds.forEach((hummingbird) => hummingbird.updateBest());
        this.updateGlobalBest();
        this.updatePosition();
        this.iterationData.push(this.bestGlobalFitness);  // Menyimpan data Gbest Fitness per iterasi
    }
}

export { AHA };
