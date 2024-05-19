 import { trainingData } from '../../assets/data/data';
 import React, { useEffect, useState } from 'react';
 import * as tf from '@tensorflow/tfjs';
 
var DecisionTree = require('decision-tree');


const Tree = () => {

  var training_data = [
    {"color":"blue", "shape":"square", "liked":false},
    {"color":"red", "shape":"square", "liked":false},
    {"color":"blue", "shape":"circle", "liked":true},
    {"color":"red", "shape":"circle", "liked":true},
    {"color":"blue", "shape":"hexagon", "liked":false},
    {"color":"red", "shape":"hexagon", "liked":false},
    {"color":"yellow", "shape":"hexagon", "liked":true},
    {"color":"yellow", "shape":"circle", "liked":true}
  ];
  var test_data = [
	{"color":"blue", "shape":"hexagon", "liked":false},
	{"color":"red", "shape":"hexagon", "liked":false},
	{"color":"yellow", "shape":"hexagon", "liked":true},
	{"color":"yellow", "shape":"circle", "liked":true}
];
var class_name = "liked";
var features = ["color", "shape"];

var dt = new DecisionTree(class_name, features);
dt.train(training_data);
var dt = new DecisionTree(training_data, class_name, features);

var predicted_class = dt.predict({
	color: "yellow",
	shape: "he"
});

var accuracy = dt.evaluate(test_data);

console.log(dt)
console.log(predicted_class)
console.log(accuracy)



// const features = ['education_level', 'learning_style', 'long_term_goals', 'previous_courses_or_programs'];

// console.log(trainingData.preferred_subjects)
// var labels = 'education_level';
// var dt = new DecisionTree(labels, features);
// dt.train(trainingData);




// const dtf = new DecisionTree(trainingData, labels, features);



// const userData =      {
//   "age": 28,
//   "gender": "Male",
//   "education_level": "Bachelor's degree",
//   "learning_style": "Auditory",
//   "preferred_subjects": ["Philosophy", "Psychology"],
//   "preferred_learning_format": "Listening to lectures",
//   "short_term_goals": "Deepen understanding of existentialism",
//   "long_term_goals": "Become a philosophy professor",
//   "previous_courses_or_programs": ["Introduction to Philosophy", "Psychology of Consciousness"],
//   "learning_difficulties": "Difficulty with abstract concepts",
//   "feedback_on_current_platform": "Appreciates the philosophical discussions, but wants more practical applications",
//   "feature_preferences": ["Philosophical discussions", "Practical applications"]
// }

// const prediction = dt.predict(userData);
// const accuracy = dtf.evaluate(userData)
// console.log('User preference prediction:', prediction, accuracy);




}

export default Tree;

// const Tree = () => {


// // Define the dummy user data
// const userData = {
//   "age": 25,
//   "gender": "Male",
//   "education_level": "Bachelor's degree",
//   "learning_style": "Visual",
//   "preferred_subjects": ["Technology", "Science"],
//   "preferred_learning_format": "Interactive exercises",
//   "short_term_goals": "Improve programming skills",
//   "long_term_goals": "Become a software developer",
//   "previous_courses_or_programs": ["Introduction to Python", "Basic Data Science course"],
//   "learning_difficulties": "Difficulty concentrating for long periods",
//   "feedback_on_current_platform": "Likes the variety of exercises, but wishes for more advanced topics",
//   "feature_preferences": ["Personalized recommendations", "Progress tracking"]
// };


// // Define labels (learning style, preferences, strengths, weaknesses)
// const labels = {
//   learning_style: userData.learning_style,
//   preferences: userData.preferred_subjects.join(','), // Convert array to string
//   strengths: userData.previous_courses_or_programs.join(','), // Convert array to string
//   weaknesses: userData.learning_difficulties
// };


// const features = {
//   age: userData.age,
//   gender: userData.gender === 'Male' ? 0 : 1, // Convert gender to numerical value
//   // Convert education level to numerical value (for simplicity, not all levels are covered here)
//   education_level: userData.education_level === "Bachelor's degree" ? 0 : 1,
//   // Convert learning style to numerical value
//   learning_style: userData.learning_style === 'Visual' ? 0 : 1,
//   // Convert preferred learning format to numerical value
//   preferred_learning_format: userData.preferred_learning_format === 'Interactive exercises' ? 0 : 1,
//   // Convert learning difficulties to numerical value (for simplicity, not all difficulties are covered here)
//   learning_difficulties: userData.learning_difficulties.includes('Difficulty concentrating') ? 1 : 0,
//   // Convert feedback on current platform to numerical value (for simplicity, not all feedbacks are covered here)
//   feedback_on_current_platform: userData.feedback_on_current_platform.includes('Likes the variety') ? 1 : 0
// };

// // Convert data to TensorFlow tensors
// const xs = tf.tensor2d(Object.values(features).map(value => Number(value)), [1, Object.keys(features).length]);
// const ys = tf.tensor2d(Object.values(labels).map(value => Number(value)), [1, 4]);
// // Define model architecture
// const model = tf.sequential();
// model.add(tf.layers.dense({ units: 64, inputShape: [Object.keys(features).length], activation: 'relu' }));
// model.add(tf.layers.dense({ units: 4, activation: 'softmax' }));

// // Compile the model
// model.compile({ loss: 'categoricalCrossentropy', optimizer: 'adam', metrics: ['accuracy'] });


// console.log("erroe", model)

// // Train the model
// async function trainModel() {
//   console.log("Before result");
// const res = await model.fit(xs, ys, { epochs: 10 });
// console.log("after result:", res)
// }

// // Evaluate the model
// async function evaluateModel() {
//   const evalResult = await model.evaluate(xs, ys);

//   console.log('Evaluation result:', evalResult);
// }

// // Train and evaluate the model
// async function run() {
//   await trainModel();
//   await evaluateModel();
// }

// // Run the code
// run();
// const predictions = model.predict(xs).arraySync()[0]; // Convert tensor to array
// console.log(predictions)
// // Find the index of the class with the highest probability
// const predictedClassIndex = predictions.indexOf(Math.max(...predictions));

// // Determine the predicted class based on the index
// let predictedClass;
// switch(predictedClassIndex) {
//   case 0:
//     predictedClass = 'learning_style';
//     break;
//   case 1:
//     predictedClass = 'preferences';
//     break;
//   case 2:
//     predictedClass = 'strengths';
//     break;
//   case 3:
//     predictedClass = 'weaknesses';
//     break;
//   default:
//     predictedClass = 'Unknown';
// }

// console.log('Predicted class:', predictedClass);
  
// };

//  export default Tree;
