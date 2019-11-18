/******* Initial challenge *******/

var collateTotalVotesForCandidates = function(data, office) {
  var collatedData = data.reduce((acc, cur) => {
    if (office && cur.OFFICE !== office) return acc;

    var matchingCandidate = acc.find(a => a.CANDIDATE === cur.CANDIDATE);

    // If candidate exists, add any new votes, otherwise add to list
    if (matchingCandidate) matchingCandidate.VOTES += cur.VOTES
    else {
      acc.push({ CANDIDATE: cur.CANDIDATE, VOTES: cur.VOTES });
    }

    return acc;
  }, []);

  return collatedData;
};

var findWinners = function(data) {
  var winners = [];

  data.sort((a, b) => {
    if (a.VOTES < b.VOTES) return 1;
    if (a.VOTES > b.VOTES) return -1;
    if (a.VOTES === b.VOTES) return 0;
  });

  data.forEach(d => {
    if (d.VOTES > data[0].VOTES) winners.push(d);
    else if (d.VOTES === data[0].VOTES) winners.push(d);
  });

  return winners;
};

var displayWinners = function(winners) {
  if (winners.length === 1) {
    console.log(winners[0].CANDIDATE + ' is the winner!');

  }
  else {
    console.log('The result is a tie between the following candidates:');
    winners.forEach(w => console.log(w.CANDIDATE));
  }
};

var presidentialElectionTally = collateTotalVotesForCandidates(data, 'PRESIDENT AND VICE PRESIDENT OF THE UNITED STATES');
var winners = findWinners(presidentialElectionTally);
displayWinners(winners);

/******* Progression #1 *******/

var displayElectionResultsTable = function(data) {
  var el = window.document.querySelector('#table-container');
  var table = '<table><thead><tr><th>Candidate</th><th>Votes</th></thead><tbody>';

  // Build body
  data.forEach(d => {
    table += '<tr><td>' + d.CANDIDATE + '</td><td>' + d.VOTES + '</td></tr>'
  });

  table += '</tbody></table>';

  el.innerHTML = table;
};

displayElectionResultsTable(presidentialElectionTally);

/******* Progression #2 *******/

var inputOfficeType = function() {
  var submitEl = window.document.querySelector('#submit');
  var inputEl = window.document.querySelector('#office');
  submitEl.addEventListener('click', function() {
    var newTally = collateTotalVotesForCandidates(data, inputEl.value);
    findWinners(newTally);
    displayElectionResultsTable(newTally);
  });
};

inputOfficeType();
