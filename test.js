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
    "OFFICE": "ATTORNEY GENERAL",
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

var expected1 = [
  {
    CANDIDATE: "Write In",
    VOTES: 0
  },
  {
    CANDIDATE: "JOHN RAFFERTY",
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

console.log('');
console.log('=====END TESTS=====');
