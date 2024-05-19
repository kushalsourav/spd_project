import { trainingData } from '../../assets/data/data';
const TrainModel = () => {
    const DecisionTree = require('decision-tree')


    // Sample labels indicating user preferences (replace with your actual labels)
    const labels = 
      'Science'
   
    
    
    // Features to consider in decision tree
    const features = ['age', 'educationLevel', 'learningStyle'];
    
    const dt = new DecisionTree(trainingData, labels, features);
    
    // Sample user data for prediction (replace with your actual data)
    const userData = { age: 28, educationLevel: "Bachelor's degree", learningStyle: 'Visual' };
    
    const prediction = dt.predict(userData);
    
    console.log('User preference prediction:', prediction);
    
      
}

export default TrainModel;