const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Newnums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const part = nums.slice(2,5);//3rd num index theke 6th num index er ag porjonto
console.log(part);

const removed = nums.splice(2,4);//3rd num index theke 4 ta index
console.log(removed);

// Newremoved = Newnums.splice(2,4);//3rd num index theke 4 ta index er shathe 77,88 add hobe
// console.log(Newremoved);

const together = nums.join(",");
console.log(together);