//console.log(data);

var displayData = function(data) {
  var newData = data.reduce((acc, cur, i, []) => {
    var doesEqual = false;

    var thisAcc = acc.find(a => a.CANDIATE === cur.CANDIDATE);

    if (thisAcc) {
      doesEqual = true;
      thisAcc.VOTES = thisAcc.VOTES + cur.VOTES;
    }

    if (!doesEqual) {
      acc.push({
        CANDIDATE: cur.CANDIDATE,
        VOTES: cur.VOTES
      });
    }

    return acc;
  }, []);
  console.log(newData);
  //data.map(d => console.log(d.WARD) );
}

displayData(data.slice(0, 10));
