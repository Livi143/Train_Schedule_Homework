/*Make sure that your app suits this basic spec:
When adding trains, administrators should be able to submit the following:
// this will be done with buttons, appended to an array much like the gif hw... 
Train Name
Destination 
// moment.js
First Train Time -- in military time
// want a variable to show the frequency
Frequency -- in minutes

var minutesTilNextTrain = the congruence classes of Frequency 
(0,1,2,..., (Frequency-1))

// this is modular: 
1) using moment.js, convert FirstTrainTime and CurrentTime to unix time
2) ** if FirstTrainTime (of day) is < CurrentTime, then add one year to CurrentTime (this deals with the incommutative property of modular arithmatic)


*** does the currenttime, if changed, need to be renamed, or is this ok? (immutatble? i know python works well for this sort of thing, i'm not so sure about JS... and also IDK in general)***


// CurrentTime (or whatever var we'll be using to compute now):
find the congruence class for minutesTilNextTrain
(CurrentTime-FirstTrainTime)%Frequency = minutesTilNextTrain
print out: minutesTilNextTrain

**i'm not good at counting so the 0/1 placement i need to revisit**

Code this app to calculate when the next train will arrive; this should be relative to the current time.

// this is some weird firebase stuff... 
Users from many different machines must be able to view same train times.

// no
Styling and theme are completely up to you. Get Creative!*/