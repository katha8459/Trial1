/********************* 
 * Lexicalfinal Test *
 *********************/

import { PsychoJS } from './lib/core-3.0.6.js';
import * as core from './lib/core-3.0.6.js';
import { TrialHandler } from './lib/data-3.0.6.js';
import { Scheduler } from './lib/util-3.0.6.js';
import * as util from './lib/util-3.0.6.js';
import * as visual from './lib/visual-3.0.6.js';
import { Sound } from './lib/sound-3.0.6.js';

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height'
});

// store info about the experiment session:
let expName = 'lexicalfinal';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(intruc1RoutineBegin);
flowScheduler.add(intruc1RoutineEachFrame);
flowScheduler.add(intruc1RoutineEnd);
flowScheduler.add(Intruc2RoutineBegin);
flowScheduler.add(Intruc2RoutineEachFrame);
flowScheduler.add(Intruc2RoutineEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(finalRoutineBegin);
flowScheduler.add(finalRoutineEachFrame);
flowScheduler.add(finalRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({configURL: 'config.json', expInfo: expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.0.6';

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var intruc1Clock;
var text;
var Intruc2Clock;
var text_2;
var trialClock;
var text_3;
var finalClock;
var text_4;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "intruc1"
  intruc1Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Thanks for your participation in this activity',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Intruc2"
  Intruc2Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'You will see a word on the screen,\nif you think it is a REAL SPANISH word and you can explain it to a friend press -Y-\nIf it is a non-sense word or you do not know it press N\nPress the space bar to continue',
    font: 'Arial',
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'default text',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "final"
  finalClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Thank you , the activity has ended',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var intruc1Components;
function intruc1RoutineBegin() {
  //------Prepare to start Routine 'intruc1'-------
  t = 0;
  intruc1Clock.reset(); // clock
  frameN = -1;
  routineTimer.add(3.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  intruc1Components = [];
  intruc1Components.push(text);
  
  for (const thisComponent of intruc1Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
var continueRoutine;
function intruc1RoutineEachFrame() {
  //------Loop for each frame of Routine 'intruc1'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = intruc1Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text* updates
  if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text.tStart = t;  // (not accounting for frame time here)
    text.frameNStart = frameN;  // exact frame index
    text.setAutoDraw(true);
  }

  frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of intruc1Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function intruc1RoutineEnd() {
  //------Ending Routine 'intruc1'-------
  for (const thisComponent of intruc1Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var key_resp_3;
var Intruc2Components;
function Intruc2RoutineBegin() {
  //------Prepare to start Routine 'Intruc2'-------
  t = 0;
  Intruc2Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_3 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  Intruc2Components = [];
  Intruc2Components.push(text_2);
  Intruc2Components.push(key_resp_3);
  
  for (const thisComponent of Intruc2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Intruc2RoutineEachFrame() {
  //------Loop for each frame of Routine 'Intruc2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Intruc2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_2* updates
  if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_2.tStart = t;  // (not accounting for frame time here)
    text_2.frameNStart = frameN;  // exact frame index
    text_2.setAutoDraw(true);
  }

  
  // *key_resp_3* updates
  if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_3.tStart = t;  // (not accounting for frame time here)
    key_resp_3.frameNStart = frameN;  // exact frame index
    key_resp_3.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (key_resp_3.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_3.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      key_resp_3.rt = key_resp_3.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of Intruc2Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Intruc2RoutineEnd() {
  //------Ending Routine 'Intruc2'-------
  for (const thisComponent of Intruc2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (key_resp_3.keys === undefined || key_resp_3.keys.length === 0) {    // No response was made
      key_resp_3.keys = undefined;
  }
  
  psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
  if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
      routineTimer.reset();
      }
  
  // the Routine "Intruc2" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions.xlsx',
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(trialRoutineBegin);
    thisScheduler.add(trialRoutineEachFrame);
    thisScheduler.add(trialRoutineEnd);
    thisScheduler.add(endLoopIteration(thisTrial));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

var key_resp_2;
var trialComponents;
function trialRoutineBegin() {
  //------Prepare to start Routine 'trial'-------
  t = 0;
  trialClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  text_3.setText(word);
  key_resp_2 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  trialComponents = [];
  trialComponents.push(text_3);
  trialComponents.push(key_resp_2);
  
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_3* updates
  if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_3.tStart = t;  // (not accounting for frame time here)
    text_3.frameNStart = frameN;  // exact frame index
    text_3.setAutoDraw(true);
  }

  
  // *key_resp_2* updates
  if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_2.tStart = t;  // (not accounting for frame time here)
    key_resp_2.frameNStart = frameN;  // exact frame index
    key_resp_2.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (key_resp_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['y', 'n']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_2.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      key_resp_2.rt = key_resp_2.clock.getTime();
      // was this 'correct'?
      if (key_resp_2.keys == 'y, n') {
          key_resp_2.corr = 1;
      } else {
          key_resp_2.corr = 0;
      }
      // a response ends the routine
      continueRoutine = false;
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEnd() {
  //------Ending Routine 'trial'-------
  for (const thisComponent of trialComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (key_resp_2.keys === undefined || key_resp_2.keys.length === 0) {    // No response was made
      key_resp_2.keys = undefined;
  }
  
  // was no response the correct answer?!
  if (key_resp_2.keys === undefined) {
    if (['None','none',undefined].includes('y, n')) {
       key_resp_2.corr = 1  // correct non-response
    } else {
       key_resp_2.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
  psychoJS.experiment.addData('key_resp_2.corr', key_resp_2.corr);
  if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
      routineTimer.reset();
      }
  
  // the Routine "trial" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var finalComponents;
function finalRoutineBegin() {
  //------Prepare to start Routine 'final'-------
  t = 0;
  finalClock.reset(); // clock
  frameN = -1;
  routineTimer.add(3.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  finalComponents = [];
  finalComponents.push(text_4);
  
  for (const thisComponent of finalComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function finalRoutineEachFrame() {
  //------Loop for each frame of Routine 'final'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = finalClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_4* updates
  if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_4.tStart = t;  // (not accounting for frame time here)
    text_4.frameNStart = frameN;  // exact frame index
    text_4.setAutoDraw(true);
  }

  frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text_4.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of finalComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function finalRoutineEnd() {
  //------Ending Routine 'final'-------
  for (const thisComponent of finalComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}


function endLoopIteration(thisTrial) {
  // ------Prepare for next entry------
  return function () {
    if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({message, isCompleted});

  return Scheduler.Event.QUIT;
}
