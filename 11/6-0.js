const solution = (food_times, k) => {
  let foods = food_times
    .map((time, idx) => ({ id: idx + 1, time }))
    .sort((a, b) => a.time - b.time);

  console.log(foods);
  while (foods.length) {
    const foodCount = foods.length;
    const food = foods.shift();
    if (foodCount * food.time <= k) {
      k -= foodCount * food.time;
      foods = foods.map((f) => ({ id: f.id, time: f.time - food.time }));
    } else {
      foods.unshift(food);
      const foodIdx = k === 0 ? 0 : k % foods.length;
      const sorted = foods.sort((a, b) => a.id - b.id);
      return sorted[foodIdx].id;
    }
  }
  return -1;
};

console.log(solution([3, 1, 2], 5));
console.log(solution([3, 4, 5], 7));
console.log(solution([3, 4, 5, 1, 1], 7));

console.log(solution([2, 2, 2], 6));
console.log(solution([2, 2, 1], 6));
