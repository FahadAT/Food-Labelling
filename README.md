[![Build Status](https://app.travis-ci.com/FahadAT/Placeholder.svg?branch=master)](https://app.travis-ci.com/FahadAT/Placeholder)
# Food Labelling
 Food Labelling uses fasttext library and a predefined model to take any text as input and if it is a food item in the model it will label it and show the labed to the user.
 # fasttext
 [fastText](https://github.com/facebookresearch/fastText) is a library for learning of word embeddings and text classification created by Facebook's AI Research lab. The model allows one to create an unsupervised learning or supervised learning algorithm for obtaining vector representations for words.
# Features

* User interface
* Easy to install
* Travis Cl integration
* Locally hosted
* Display the result on the client page
* The page dynamic change when client submit text


 # Usage
 Note: that this installation guide is only tested on a linux VM if problems occur please report it.
 
 To use this program please follow installation steps shown here:
1. Download npm: sudo apt install npm
2. Create and open project folder: mkdir [your choice name]
3. Initialize requirements: npm init -y
4. Download the [release](https://github.com/FahadAT/Placeholder/releases/tag/v0.1.0) and extract its content into the new directory
5. Install the Node.js sandbox for the Machine learning algorithm (fasttext): npm install node-fasttext --save
6. Install Express: npm install express --save
7. Install some cors issues: npm install cors --save
8. Run index.js: node index.js
