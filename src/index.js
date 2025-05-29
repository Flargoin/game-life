"use strict";
/*
  Какие условия нужно добавить в функцию getNextCellState, чтобы она работала корректно?

    Живая клетка с 2 соседями - выживает
    Живая клетка с 4 соседями - умирает
    Мертвая клетка с 3 соседями - оживает
    Мертвая клетка с 2 соседями - остается мертвой
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextGeneration = getNextGeneration;
function getNextGeneration(isAlive, aliveNeighbors) {
    return isAlive
        ? aliveNeighbors === 2 || aliveNeighbors === 3
        : aliveNeighbors === 3;
}
