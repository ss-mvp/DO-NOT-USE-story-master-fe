import mtz from 'moment-timezone';

let submissionTime = '';
let votingBegintime = '';
let winnerTime = '';

const convertTime = () => {
  // get timezone locally
  let timeZone = mtz.tz.guess();

  let currTime = new Date();

  let curTimeOffset = currTime.getTimezoneOffset();

  let timeZoneAbbreviation = mtz.tz.zone(timeZone).abbr(curTimeOffset);

  // if tz === PST then render 12pm
  if (timeZoneAbbreviation === 'PST') {
    console.log('PST TIME ZONE');
    submissionTime = '12:00 p.m.: ';
    votingBegintime = '12:30 p.m.: ';
    winnerTime = '3:00 p.m.: ';
  }
  // if tz === MT then render 1pm
  else if (timeZoneAbbreviation === 'MT') {
    console.log('MT TIME ZONE');
    submissionTime = '1:00 p.m.: ';
    votingBegintime = '1:30 p.m.: ';
    winnerTime = '4:00 p.m.: ';
  }
  // if tz === CST then render 2pm
  else if (timeZoneAbbreviation === 'CST') {
    console.log('CST TIME ZONE');
    submissionTime = '2:00 p.m.: ';
    votingBegintime = '2:30 p.m.: ';
    winnerTime = '5:00 p.m.: ';
  }
  // if tz === EST then render 3pm
  else if (timeZoneAbbreviation === 'EST') {
    console.log('EST TIME ZONE');
    submissionTime = '3:00 p.m.: ';
    votingBegintime = '3:30 p.m.: ';
    winnerTime = '6:00 p.m.: ';
  } else {
    console.log('NOT A U.S. TIME ZONE');
  }
};

// probably run this in a useEffect
convertTime();

const aboutData = [
  {
    id: 'p1',
    section: {
      time: 'Every morning (7 days a week): ',
      description:
        'sign in to get the new story-writing prompt and start scribbling',
    },
  },
  {
    id: 'p2',
    section: {
      time: submissionTime,
      description: 'The deadline to upload your single page story',
    },
  },
  {
    id: 'p3',
    section: {
      time: votingBegintime,
      description: 'Finalists are announced & popular voting begins',
    },
  },
  {
    id: 'p4',
    section: {
      time: winnerTime,
      description: 'Winner of the popular vote gets crowned',
    },
  },
];

export default aboutData;
