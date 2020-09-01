  import moment from 'moment'
  
  //start and end times in [hrs, min] in 24hr UTC time
  const schedule = {
    subStart: [2, 30],
    subEnd: [19, 0],
    delibStart: [19,0],
    delibEnd: [19,30],
    voteStart: [19, 30],
    voteEnd: [22, 0],
    streamStart: [22, 30],
    streamEnd: [23, 0],
    interimStart:[23, 1],
    interimEnd: [2, 29]
}

  
  export const now = Date.now()
  

  export const currentHr = Number(moment.utc(Date.now()).format('HH'))
  export const currentMin = Number(moment.utc(Date.now()).format('mm'))

  //a new prompt is chosen and submissions become open at 2:30am UTC (10:30pm EDT)
  export const startSubHr = schedule.subStart[0]
  export const startSubMin = schedule.subStart[1]
  export const subCountStart = moment.utc().hour(startSubHr).minute(startSubMin).valueOf()

  //the submission deadline is 7:00pm UTC (3:00pm EDT)
  export const endSubHr = schedule.subEnd[0]
  export const endSubMin = schedule.subEnd[1]
  export const subCountEnd = moment.utc().hour(endSubHr).minute(endSubMin).valueOf()

  //deliberation starts at 7:00pm UTC (3:00pm EDT)
  export const delibStartHr = schedule.delibStart[0]
  export const delibStartMin = schedule.delibStart[1]
  export const delibCountStart = moment.utc().hour(delibStartHr).minute(delibStartMin).valueOf()

  //deliberation ends at 7:30pm UTC (3:30pm EDT)
  export const delibEndHr = schedule.delibEnd[0]
  export const delibEndMin = schedule.delibEnd[1]
  export const delibCountEnd = moment.utc().hour(delibEndHr).minute(delibEndMin).valueOf()

  //voting starts at 7:30pm UTC (3:30pm EDT)
  export const voteStartHr = schedule.voteStart[0]
  export const voteStartMin = schedule.voteStart[1]
  export const voteCountStart = moment.utc().hour(voteStartHr).minute(voteStartMin).valueOf()

  //voting ends at 10:00pm UTC (6:00pm EDT)
  export const voteEndHr = schedule.voteEnd[0]
  export const voteEndMin = schedule.voteEnd[1]
  export const voteCountEnd = moment.utc().hour(voteEndHr).minute(voteEndMin).valueOf()

  //winner livestream starts at 10:30pm UTC (6:30pm EDT)
  export const winnerStreamStartHr = schedule.streamStart[0]
  export const winnerStreamStartMin = schedule.streamStart[1]
  export const winnerStreamCountStart = moment.utc().hour(winnerStreamStartHr).minute(winnerStreamStartMin).valueOf()

  //winner livestream ends at 11:00pm UTC (7:00pm EDT)
  export const winnerStreamEndHr = schedule.streamEnd[0]
  export const winnerStreamEndMin = schedule.streamEnd[1]
  export const winnerStreamCountEnd = moment.utc().hour(winnerStreamEndHr).minute(winnerStreamEndMin).valueOf()

  //interim begins at 11:00pm UTC (7:00pm EDT)
  export const interimStartHr = schedule.streamEnd[0]
  export const interimStartMin = schedule.streamEnd[1]
  export const interimCountStart = moment.utc().hour(winnerStreamEndHr).minute(winnerStreamEndMin).valueOf()

  //interim ends at 2:30am UTC (10:30pm EDT)
  export const interimEndHr = schedule.subStart[0]
  export const interimEndMin = schedule.subStart[1]
  export const interimCountEnd = moment.utc().hour(startSubHr).minute(startSubMin).valueOf()


  export const isSubmissionTime = () => {
    if(currentHr === startSubHr && currentMin >= startSubMin){
      return true
    }
    else if(currentHr > startSubHr && currentHr < endSubHr){
      return true
    } else{
      return false
    }
  }

  export const isDeliberationTime = () => {
    if(currentHr === delibStartHr && currentMin < delibEndMin){
        return true
    } 
     else {
      return false
    }
  }

export const isVotingTime = () => {
    if(currentHr === voteStartHr && currentMin >= voteStartMin){
        return true;
    }
    else if(currentHr > voteStartHr && currentHr < voteEndHr){
        return true
    }
    return false
}

export const isStreamingTime = () => {
  if(currentHr === winnerStreamStartHr){
    return true;
  } else {
    return false
  }
}

export const isInterim = () => {
  if(currentHr === winnerStreamEndHr || currentHr < startSubHr){
    return true
  } else if (currentHr === startSubHr && currentMin < startSubMin){
    return true;
  } else {
    return false;
  }


}