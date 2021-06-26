# Infinity SknCure

<p align="center"><img src="https://github.com/ishubham21/infinity-skncure-angular/blob/master/readme-assets/logo.png"></p>

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

* **Can Detect 11 skin diseases:** This skin diseases model has been trained to predict and differentiate between 10 most prominent skin disease. These diseases are: Acne, Contact Dermatitis, Corn, Cutaneous Horn, Eczema, Herpes Zoster, Melanoma, Psoriasis, Rosacea, and Utlicaria.

* **Trained on 300,000 images:** The model has been trained on over 1500 images which were iterated 200 times each. The model is trained keeping in mind the various skin types (normal, dry, oily, combination, etc.), colors (white, black, brown, porcelain, ivory, sand, beige, etc.), body-parts (scalp, forehead, ears, nose, cheeks, lips, chin, neck, chest, back, arms, hands, palms, excretory organs (both male and female), thighs, feet and toes).

## Diseases listed in the model - 
* Acne
* Herpes Zoster
* Corn
* Rosacea
* Psoriasis
* Contact Dermatitis
* Cutaneous Horn
* Eczema
* Melanoma
* Urticaria

# Do we even need this application?

Skin diseases are among the most common health problems in humans. Considering their significant impact on the individual, the family, the social life of patients, and their heavy economical burden, the public health importance of these diseases is underappreciated. [Cite](https://pubmed.ncbi.nlm.nih.gov/19254651/)

[According to a survey](https://www.sciencedaily.com/releases/2019/03/190320102041.htm#:~:text=The%20most%20common%20diagnoses%20were,of%20their%20abnormal%20skin%20findings.) skin disorders increase with age and are more frequent in men (72.3 percent) than in women (58.0 percent). Nearly two-thirds of the affected people are unaware of their abnormal skin conditions.

With **Infinity-SknCure** people get an opportunity to self-diagnose their skin disorders from the comfort of their home. It offers an opportunity to screen people and to identify multiple conditions on a single platform. An integrated approach in communities and schools can potentially reduce costs and cut down delays in diagnosis as well as promote skin health for all.

[Reports](https://www.canwelivebetter.bayer.com/health/tanning-delusion-why-do-we-ignore-risks-skin-cancer) also point that men are very less likely to use sunscreens which is a major reason why many people suffer from skin cancers and it again points towards the associated stigmas and with this application, we want to fight these social stigmas.

## This app is built on the basis of previous studies conducted in this field

* [US National Library of Medicine](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5718374/)
* [Science Daily Journals](https://www.sciencedaily.com/releases/2019/03/190320102041.htm#:~:text=The%20most%20common%20diagnoses%20were,of%20their%20abnormal%20skin%20findings.)
* [WHO neglected diseases](https://www.who.int/neglected_diseases/zoonoses/en/)
* [National Center for Biotechnology Information](https://pubmed.ncbi.nlm.nih.gov) 

# Testimonials



# Sources for dataset -
* Dermnet NZ - [https://dermnetnz.org](https://dermnetnz.org)
* DermIS - [https://dermis.net](https://dermis.net)
* Dermatology Atlas - [http://www.atlasdermatologico.com.br/browse.jsf](http://www.atlasdermatologico.com.br/browse.jsf)