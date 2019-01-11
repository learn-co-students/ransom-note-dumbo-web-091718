function buildHistogram(wordswordswords){
  let histogram = {};
  for(let i = 0; i < wordswordswords.length; i++){
    if (histogram[wordswordswords[i]]){
      histogram[wordswordswords[i]] += 1;
    } else {
      histogram[wordswordswords[i]] = 1;
    }
  }
  return histogram;
}

function canBuildNote(magazine, note){
  let magHist = buildHistogram(magazine);
  let canBuild = true;
  for(let i = 0; i < note.length; i++){
    if(magHist[note[i]] > 0){
      magHist[note[i]] -= 1;
    } else {
      canBuild = false;
    }
  }
  return canBuild;
}
