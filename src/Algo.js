export const algo1 = {
    algo: function(rounds) {
        var last = rounds[rounds.length - 1];
        var offer = last.offer;

        if (last.accepted) {
            offer = this.afterAcceptAlgo(rounds, last);
            offer -= Math.random() * Math.abs(last.offer - offer);
        } else {
            offer = this.afterRejectAlgo(rounds, last);
            offer += Math.random() * Math.abs(last.offer - offer);
        }

        return Math.floor(Math.max(1, Math.min(49, offer)));
    },

    afterAcceptAlgo: function(rounds, last) {
        //Algorithm to calculate the offer after the last offer is accepted
        var lastOffer = last.offer;

        //Lower the algorithm by a certain percent, the percent decreases for every time a lowered offer is rejected

        var multiplier = .9;
        var adder = .01; //value added for each rejected next offer
        var suber = .02; //value subbed for each accepted next offer

        //Calculate number of rejections after acceptances
        var rejectCount = 0;
        var acceptCount = 0;
        for (var i = 0; i < rounds.length - 1; i++) {
            if (rounds[i].accepted) {
                if (!rounds[i+1].accepted) {
                    rejectCount++;
                    i++;
                }
                else {
                    acceptCount++;
                }
            }
        }

        //Do calculations
        var addVal = rejectCount * adder;
        var subVal = acceptCount * suber;
        multiplier += addVal - subVal;

        return lastOffer * multiplier;
    },

    afterRejectAlgo: function(rounds, last) {
        //Algorithm to calculate the offer after the last offer is rejected
        var lastOffer = last.offer;

        //Determine average values
        //Acceptances first
        var acceptanceSum = 0, acceptanceCount = 0;
        for (var i = 0; i < rounds.length; i++) {
            if (rounds[i].accepted) {
                acceptanceSum += rounds[i].offer;
                acceptanceCount++;
            }
        }
        var acceptAvg = acceptanceSum / Math.max(acceptanceCount, 1);

        //Now rejections
        var rejectSum = 0, rejectCount = 0;
        for (i = 0; i < rounds.length; i++) {
            if (!rounds[i].accepted) {
                rejectSum += rounds[i].offer;
                rejectCount++;
            }
        }
        var rejectAvg = rejectSum / Math.max(rejectCount, 1);

        //Use average accepted/rejected offer values to determine next offer
            //if below average rejected offer, then raise offer
            //If above average accepted offer, lower offer
            //If above average rejected offer, maintain
            //If below average accepted offer, raise slightly
        
        var offer = lastOffer;
        if (rejectAvg > 0 && lastOffer <= rejectAvg) {
            offer *= 1.1;
            offer += 2;
        }
        if (rejectAvg > 0 && lastOffer >= rejectAvg) {
            offer *= .9;
            offer--;
        }
        if (acceptAvg > 0 && lastOffer <= acceptAvg) {
            offer *= 1.05;
            offer++;
        }
        if (acceptAvg > 0 && lastOffer >= acceptAvg) {
            offer *= .8;
            offer -= 2;
        }

        return offer;
    }

}

export const algo2 = {
    algo: function(rounds) {
        var last = rounds[rounds.length - 1];
        var offer = last.offer;

        if (last.accepted) {
            offer = this.afterAcceptAlgo(rounds, last);
            offer -= Math.random() * Math.abs(last.offer - offer);
        } else {
            offer = this.afterRejectAlgo(rounds, last);
            offer += Math.random() * Math.abs(last.offer - offer);
        }

        return Math.floor(Math.max(1, Math.min(49, offer)));
    },

    afterAcceptAlgo: function(rounds, last) {
        //Algorithm to calculate the offer after the last offer is accepted
        var lastOffer = last.offer;

        //Lower the algorithm by a certain percent, the percent decreases for every time a lowered offer is rejected

        var multiplier = .85;
        var adder = .05; //value added for each rejected next offer
        var suber = .05; //value subbed for each accepted next offer

        //Calculate number of rejections after acceptances
        var rejectCount = 0;
        var acceptCount = 0;
        for (var i = 0; i < rounds.length - 1; i++) {
            if (rounds[i].accepted) {
                if (!rounds[i+1].accepted) {
                    rejectCount++;
                    i++;
                }
                else {
                    acceptCount++;
                }
            }
        }

        //Do calculations
        var addVal = rejectCount * adder;
        var subVal = acceptCount * suber;
        multiplier += addVal - subVal;

        return lastOffer * multiplier - 1;
    },

    afterRejectAlgo: function(rounds, last) {
        //Algorithm to calculate the offer after the last offer is rejected
        var lastOffer = last.offer;

        //Determine average values
        //Acceptances first
        var acceptanceSum = 0, acceptanceCount = 0;
        for (var i = 0; i < rounds.length; i++) {
            if (rounds[i].accepted) {
                acceptanceSum += rounds[i].offer;
                acceptanceCount++;
            }
        }
        var acceptAvg = acceptanceSum / Math.max(acceptanceCount, 1);

        //Now rejections
        var rejectSum = 0, rejectCount = 0;
        for (i = 0; i < rounds.length; i++) {
            if (!rounds[i].accepted) {
                rejectSum += rounds[i].offer;
                rejectCount++;
            }
        }
        var rejectAvg = rejectSum / Math.max(rejectCount, 1);

        //Use average accepted/rejected offer values to determine next offer
            //if below average rejected offer, then raise offer
            //If above average accepted offer, lower offer
            //If above average rejected offer, maintain
            //If below average accepted offer, raise slightly
        
        var offer = lastOffer;
        if (rejectAvg > 0 && lastOffer <= rejectAvg) {
            offer *= 1.1;
            offer += 3;
        }
        if (rejectAvg > 0 && lastOffer >= rejectAvg) {
            offer *= .9;
            offer -= 2;
        }
        if (acceptAvg > 0 && lastOffer <= acceptAvg) {
            offer *= 1.1;
            offer++;
        }
        if (acceptAvg > 0 && lastOffer >= acceptAvg) {
            offer *= .7;
            offer -= 3;
        }

        return offer + 1;
    }
}