/* 
  Какие условия нужно добавить в функцию getNextGeneration, чтобы она работала корректно?

    Живая клетка с 2 соседями - выживает
    Живая клетка с 4 соседями - умирает
    Мертвая клетка с 3 соседями - оживает
    Мертвая клетка с 2 соседями - остается мертвой
*/

export const getNextGeneration = (
  isAlive: boolean,
  aliveNeighbors: number,
): boolean => {
  return isAlive
    ? aliveNeighbors === 2 || aliveNeighbors === 3
    : aliveNeighbors === 3;
};
