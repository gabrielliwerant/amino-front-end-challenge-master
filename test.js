var stub0 = [
  {
    "WARD": 1,
    "DIVISION": 1,
    "TYPE": "A",
    "OFFICE": "ATTORNEY GENERAL",
    "CANDIDATE": "Write In",
    "PARTY": "",
    "VOTES": 0
  },
  {
    "WARD": 1,
    "DIVISION": 1,
    "TYPE": "A",
    "OFFICE": "PRESIDENT AND VICE PRESIDENT OF THE UNITED STATES",
    "CANDIDATE": "Write In",
    "PARTY": "",
    "VOTES": 1
  },
  {
    "WARD": 1,
    "DIVISION": 1,
    "TYPE": "A",
    "OFFICE": "ATTORNEY GENERAL",
    "CANDIDATE": "Write In",
    "PARTY": "",
    "VOTES": 10
  },
  {
    "WARD": 1,
    "DIVISION": 1,
    "TYPE": "A",
    "OFFICE": "ATTORNEY GENERAL",
    "CANDIDATE": "JOHN RAFFERTY",
    "PARTY": "REPUBLICAN",
    "VOTES": 1
  }
];

var stub1 = [
  {
    "WARD": 1,
    "DIVISION": 1,
    "TYPE": "A",
    "OFFICE": "ATTORNEY GENERAL",
    "CANDIDATE": "Write In",
    "PARTY": "",
    "VOTES": 0
  },
  {
    "WARD": 1,
    "DIVISION": 1,
    "TYPE": "A",
    "OFFICE": "ATTORNEY GENERAL",
    "CANDIDATE": "JOHN RAFFERTY",
    "PARTY": "REPUBLICAN",
    "VOTES": 1
  }
];

var stub2 = [
  {
    "WARD": 1,
    "DIVISION": 1,
    "TYPE": "A",
    "OFFICE": "PRESIDENT AND VICE PRESIDENT OF THE UNITED STATES",
    "CANDIDATE": "Write In",
    "PARTY": "",
    "VOTES": 0
  },
  {
    "WARD": 1,
    "DIVISION": 1,
    "TYPE": "A",
    "OFFICE": "PRESIDENT AND VICE PRESIDENT OF THE UNITED STATES",
    "CANDIDATE": "Write In",
    "PARTY": "",
    "VOTES": 1
  },
  {
    "WARD": 1,
    "DIVISION": 1,
    "TYPE": "A",
    "OFFICE": "PRESIDENT AND VICE PRESIDENT OF THE UNITED STATES",
    "CANDIDATE": "DARRELL L CASTLE",
    "PARTY": "CONSTITUTION PARTY",
    "VOTES": 0
  },
  {
    "WARD": 1,
    "DIVISION": 1,
    "TYPE": "A",
    "OFFICE": "PRESIDENT AND VICE PRESIDENT OF THE UNITED STATES",
    "CANDIDATE": "DONALD J TRUMP",
    "PARTY": "REPUBLICAN",
    "VOTES": 1
  },
  {
    "WARD": 1,
    "DIVISION": 1,
    "TYPE": "A",
    "OFFICE": "PROPOSED CONSTITUTIONAL AMENDMENT",
    "CANDIDATE": "NO NO",
    "PARTY": "",
    "VOTES": 4
  },
];

var expected0 = [
  {
    CANDIDATE: "Write In",
    VOTES: 11
  },
  {
    CANDIDATE: "JOHN RAFFERTY",
    VOTES: 1
  },
];

var expected1= [
  {
    CANDIDATE: "Write In",
    VOTES: 0
  },
  {
    CANDIDATE: "JOHN RAFFERTY",
    VOTES: 1
  },
];

var expected2 = [
  {
    CANDIDATE: "Write In",
    VOTES: 1
  },
  {
    CANDIDATE: "DARRELL L CASTLE",
    VOTES: 0
  },
  {
    CANDIDATE: "DONALD J TRUMP",
    VOTES: 1
  },
];

console.log('=====BEGIN TESTS=====');
console.log('');

if (JSON.stringify(collateTotalVotesForCandidates(stub0)) === JSON.stringify(expected0)) console.log('PASSED: ');
else console.log('FAILED: ');
console.log(
  'collateTotalVotesForCandidates should properly collate candidates and votes when we have duplicate candidates',
  JSON.stringify(collateTotalVotesForCandidates(stub0)),
  JSON.stringify(expected0)
);

if (JSON.stringify(collateTotalVotesForCandidates(stub1)) === JSON.stringify(expected1)) console.log('PASSED: ');
else console.log('FAILED: ');
console.log(
  'collateTotalVotesForCandidates should properly collate candidates and votes when we have unique candidates',
  JSON.stringify(collateTotalVotesForCandidates(stub1)),
  JSON.stringify(expected1)
);

if (JSON.stringify(collateTotalVotesForCandidates(stub2, 'PRESIDENT AND VICE PRESIDENT OF THE UNITED STATES')) === JSON.stringify(expected2)) console.log('PASSED: ');
else console.log('FAILED: ');
console.log(
  'collateTotalVotesForCandidates should properly collate candidates and votes when we have duplicate candidates and specify an office',
  JSON.stringify(collateTotalVotesForCandidates(stub2, 'PRESIDENT AND VICE PRESIDENT OF THE UNITED STATES')),
  JSON.stringify(expected2)
);

console.log('');
console.log('=====END TESTS=====');
