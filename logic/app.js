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

console.log("app js is running");

//========================================


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA-ptKxkGkn1D6swndU_6klqTRfzgI_lPc",
    authDomain: "timers-8245e.firebaseapp.com",
    databaseURL: "https://timers-8245e.firebaseio.com",
    projectId: "timers-8245e",
    storageBucket: "timers-8245e.appspot.com",
    messagingSenderId: "1010113102235"
  };
  firebase.initializeApp(config);

  

var database=firebase.database();

$("#addTrainBtn").on("click",function(event){
    event.preventDefault();
    var trainNameInput= $("#trainNameInput").val().trim();
    var destinationInput= $("#destinationInput").val().trim();
    var firstTrainInput= $("#firstTrainInput").val().trim();
    var frequencyInput= $("#frequencyInput").val().trim();
    var trainObject={
      name: trainNameInput,
      destination: destinationInput,
      firstTime:firstTrainInput,
      frequency:frequencyInput
    };
    // push the object to database
    database.ref().push(trainObject);
});

database.ref().on("child_added",function(childSnapshot){
  console.log(childSnapshot.val());
  var trainDestination = childSnapshot.val().destination;
  var trainTime= childSnapshot.val().firstTime;
  var trainFrequency = childSnapshot.val().frequency;
  var trainName = childSnapshot.val().name;
    // Calculate the total billed rate
   
  // helps to apply the rest of the code with dif names  
  var tFrequency= trainFrequency;
  var firstTime= moment(trainTime,"HH:mm").subtract(1,"years");
  var currentTime=moment();
  console.log("current time: "+moment(currentTime).format("hh:mm"));
  var difTime=moment().diff(moment(firstTime),"minutes");
  console.log("the time difference is: "+ difTime);
  var timeRemainder=difTime%tFrequency;
  console.log("the time remaining until next train is: "+timeRemainder);
  var minutesTilNextTrain=tFrequency-timeRemainder;
  console.log("minutes til next train is: "+minutesTilNextTrain);
  var nextTrainTime = moment().add(minutesTilNextTrain,"minutes").format("HH:mm");
  console.log(nextTrainTime);






  // append cal values into table
  
    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainDestination),
      $("<td>").text(trainFrequency),
      $("<td>").text(nextTrainTime),
      $("<td>").text(minutesTilNextTrain),
  
      );
  
    // Append the new row to the table
    $("#trainTable > tbody").append(newRow);
});






