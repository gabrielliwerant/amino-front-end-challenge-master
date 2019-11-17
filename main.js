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
}

console.log(collateTotalVotesForCandidates(data, 'PRESIDENT AND VICE PRESIDENT OF THE UNITED STATES'));
