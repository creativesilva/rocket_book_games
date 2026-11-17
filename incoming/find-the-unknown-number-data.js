// "Find the Unknown Number" game data
// Sourced from classroom worksheets IMG_2094-2097 (Unit 2 Week 3)
// Seven Goals framework: sums 11-20, missing addend + missing sum
// Ready to use in a new game - do NOT put these in Math Mountain

const FIND_UNKNOWN_PROBLEMS = [
  { total:11, left:5,  right:6,  missing:'total' },  // 5+6=?
  { total:12, left:3,  right:9,  missing:'total' },  // 3+9=?
  { total:12, left:4,  right:8,  missing:'right' },  // 4+?=12
  { total:12, left:7,  right:5,  missing:'total' },  // 7+5=?
  { total:13, left:4,  right:9,  missing:'right' },  // 4+?=13
  { total:13, left:5,  right:8,  missing:'right' },  // 5+?=13
  { total:13, left:6,  right:7,  missing:'left'  },  // ?+7=13
  { total:13, left:10, right:3,  missing:'left'  },  // ?+3=13
  { total:14, left:5,  right:9,  missing:'total' },  // 5+9=?
  { total:14, left:6,  right:8,  missing:'right' },  // 6+?=14
  { total:14, left:8,  right:6,  missing:'total' },  // 8+6=?
  { total:15, left:5,  right:10, missing:'total' },  // 5+10=?
  { total:15, left:7,  right:8,  missing:'right' },  // 7+?=15
  { total:15, left:8,  right:7,  missing:'left'  },  // ?+7=15
  { total:16, left:7,  right:9,  missing:'total' },  // 7+9=?
  { total:16, left:8,  right:8,  missing:'right' },  // 8+?=16
  { total:16, left:9,  right:7,  missing:'left'  },  // ?+7=16
  { total:17, left:8,  right:9,  missing:'total' },  // 8+9=?
  { total:17, left:9,  right:8,  missing:'left'  },  // ?+8=17
  { total:17, left:10, right:7,  missing:'right' },  // 10+?=17
  { total:18, left:8,  right:10, missing:'total' },  // 8+10=?
  { total:18, left:9,  right:9,  missing:'total' },  // 9+9=?
  { total:19, left:9,  right:10, missing:'right' },  // 9+?=19
  { total:20, left:10, right:10, missing:'right' },  // 10+?=20
];

// Seven Goals for Addition/Subtraction fluency framework (from math game problems.jpeg):
// Goal 1: within 5s       add: 1+3,2+2,3+1,1+4,2+3,3+2,4+1
// Goal 2: add on to 5s    add: 5+1,5+2,5+3,5+4,5+5
// Goal 3: within 10s      add: 0+10,1+9,2+8,3+7,4+6,5+5
// Goal 4: add on to 10s   add: 10+1...10+10
// Goal 5: doubles         add: 3+3,4+4,5+5,6+6,7+7,8+8,9+9
// Goal 6: with 9s         add: 2+9,3+9,4+9,5+9,6+9,7+9,8+9
// Goal 7: mixed review    add: ALL addition facts
