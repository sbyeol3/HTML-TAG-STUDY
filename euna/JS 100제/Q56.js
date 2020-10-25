const nationWidth = {
         'korea': 220877,
         'Rusia': 17098242,
         'China': 9596961,
         'France': 543965,
         'Japan': 377915,
         'England' : 242900,
    }
    
    const nation = Object.keys(nationWidth);
    const values = Object.values(nationWidth);
    let gap = new Object();
    for ( var i in values ){
      gap[Math.abs(values[i]-nationWidth['korea'])]=nation[i];
    }
    console.log(gap);
    let gaps = [];
    for (var i in values){
      gaps.push(Math.abs(values[i]-nationWidth['korea']));
    }
    gaps.sort(function (a,b){ 
      return a-b; 
    });
    
    console.log(gaps[1],gap[gaps[1]]);