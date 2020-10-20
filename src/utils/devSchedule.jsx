import moment from 'moment'


//choose the time interval (in minutes) in between event changes
let min = 2



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

//only start times
const devschedule = [
    {
        hr: 2,
        min: 30
    },
    {
        hr: 19,
        min: 1
    },
    {
        hr: 19,
        min: 30
    },
    {
        hr: 22,
        min: 30
    },
    {
        hr: 23,
        min: 1
    },

]


const countdown = 
    {
        start: moment.utc(Date.now()).valueOf(),
        end: moment.utc(Date.now()).add({minutes: min}).valueOf()
    }


export const now = Date.now()

export let currentHr = 2
export let currentMin = 30

//a new prompt is chosen and submissions become open at 2:30am UTC (10:30pm EDT)
export const startSubHr = schedule.subStart[0]
export const startSubMin = schedule.subStart[1]
export const subCountStart = countdown.start

//the submission deadline is 7:00pm UTC (3:00pm EDT)
export const endSubHr = schedule.subEnd[0]
export const endSubMin = schedule.subEnd[1]
// export const subCountEnd = moment.utc().hour(endSubHr).minute(endSubMin).valueOf()
export const subCountEnd = countdown.end

//deliberation starts at 7:00pm UTC (3:00pm EDT)
export const delibStartHr = schedule.delibStart[0]
export const delibStartMin = schedule.delibStart[1]
// export const delibCountStart = moment.utc().hour(delibStartHr).minute(delibStartMin).valueOf()
export const delibCountStart = countdown.start

//deliberation ends at 7:30pm UTC (3:30pm EDT)
export const delibEndHr = schedule.delibEnd[0]
export const delibEndMin = schedule.delibEnd[1]
// export const delibCountEnd = moment.utc().hour(delibEndHr).minute(delibEndMin).valueOf()
export const delibCountEnd = countdown.end


//voting starts at 7:30pm UTC (3:30pm EDT)
export const voteStartHr = schedule.voteStart[0]
export const voteStartMin = schedule.voteStart[1]
export const voteCountStart = countdown.start

//voting ends at 10:00pm UTC (6:00pm EDT)
export const voteEndHr = schedule.voteEnd[0]
export const voteEndMin = schedule.voteEnd[1]
export const voteCountEnd = countdown.end

//winner livestream starts at 10:30pm UTC (6:30pm EDT)
export const winnerStreamStartHr = schedule.streamStart[0]
export const winnerStreamStartMin = schedule.streamStart[1]
export const winnerStreamCountStart = countdown.start

//winner livestream ends at 11:00pm UTC (7:00pm EDT)
export const winnerStreamEndHr = schedule.streamEnd[0]
export const winnerStreamEndMin = schedule.streamEnd[1]
export const winnerStreamCountEnd = countdown.end

//interim begins at 11:00pm UTC (7:00pm EDT)
export const interimStartHr = schedule.streamEnd[0]
export const interimStartMin = schedule.streamEnd[1]
export const interimCountStart = countdown.start

//interim ends at 2:30am UTC (10:30pm EDT)
export const interimEndHr = schedule.subStart[0]
export const interimEndMin = schedule.subStart[1]
export const interimCountEnd = countdown.end;


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


const timeTravel = () => {
    let current = 0;
    if(localStorage.getItem('current')){
        current = Number(localStorage.getItem('current'));

        IncrementCountdown(current)
        
        //increment current
        if(current < 4){
            current++;
        } else{
            current = 0;
        }
    } else{
        IncrementCountdown(0)
        
    }

    localStorage.setItem('current', current)
    
  }

const IncrementCountdown = (num) => {
    currentHr = devschedule[num].hr;
    currentMin = devschedule[num].min;
}

timeTravel()


