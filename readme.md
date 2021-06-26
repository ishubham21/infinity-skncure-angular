# Infinity SknCure

<p align="center"><img src="https://github.com/ishubham21/infinity-skncure/blob/master/imgs/logo.png"></p>

A very recent [report](https://www.who.int/neglected_diseases/news/WHO-publishes-pictorial-training-guide-on-neglected-skin-disease/en/) by World Health Organization(WHO) shows that skin diseases are among the most common of all human health afflictions and affect almost 900 million people in the world at any time. Five common conditions account for over 80% of all skin diseases.

There are a lot of doctors and researchers doing their best in this field of medical science, there are Machine Learning models present with very high accuracy and precision to help the researchers in this field to make their study more effective, but all these technological advancements are still quite far away from the reach of the general public. 

There are still very less or no technological resources which can add some value to the lives of people who know very little about such disorders.

To tackle this issue, we have created a web-based skin disease predictor which can be used as a native application by the users to predict their skin disorders just by uploading a picture of their skin using a machine learning model trained on the top of TensorflowJS. This app also supports real-time detection of skin diseases by which users can directly use their cameras to focus on their textured areas and get instant results. 

Further, this application also recommends nearby doctors automatically by using their current location. This app has the ability to predict over 10 skin diseases quite accurately.

We've also included a feature of global chat within this application to help the users in posting their queries of each kind and get their doubts resolved. This way, users can even take help from real doctors through this feature without even going out.

# How to run the application 

## Get the Code
```shell
git clone https://github.com/ishubham21/infinity-skncure-angular/
cd infinity-skncure-angular
```

##Install the required modules

```shell
npm i
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Features

* **Can Detect 11 skin diseases:** This model has been trained to predict and differentiate between 11 skin disease. These includes: 
    **Acne 
    **Contact Dermatitis
    **Corn
    **Cutaneous Horn
    **Eczema 
    **Herpes Zoster
