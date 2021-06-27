# Infinity SknCure

<p align="center"><img src="https://github.com/ishubham21/infinity-skncure-angular/blob/master/readme-assets/logo.png"></p>

**“The finest clothing made is a person’s own skin” – Mark Twain.**

Your skin is your largest organ—that should be enough to tell you that skin care is vital. But still, we know many people assume it isn’t. Others are unsure. Hence the reason “why skincare is important” is one of the top skin-related Google searches.

Its purpose that is to keep our insides in may seem simple, but when looked closely, it plays a surprising number of roles in our lives.

Between us and the external world lies an interface that makes up almost 16% of our body weight, that is, our SKIN - the largest organ in our bodies.

A very recent [report](https://www.who.int/neglected_diseases/news/WHO-publishes-pictorial-training-guide-on-neglected-skin-disease/en/) by World Health Organization(WHO) shows that skin diseases are among the most common of all human health afflictions and affect almost **900 million people** in the world at any time.

There are a lot of doctors, dermatologists, and researchers doing their best in this field of medical science. There even are high-accuracy Machine Learning models to help the researchers in this field in making their study more effective, but all these technological advancements are still far-flung from the capacity of general folks. We as a society are yet to leverage these technological advancements.

Accounting to the small number of technological resources, there is still a vast scope of covering the lives of people with less or no knowledge about such skin diseases. There is still some revolution waiting to turn all these lives.  

In a world where skin diseases have a stigma around them and are treated as taboo, we wanted to create an application that could make a difference. We wanted to make something that could be easily, and immediately available to the users, a thing that could help people in multiple ways. Thus, we decided to develop **Infinity SknCure**, which is a web-based skin disease predictor. WHO [says](https://apps.who.int/iris/bitstream/handle/10665/69229/WHO_FCH_CAH_05.12_eng.pdf?sequence=1&isAllowed=y), "Basic health education is needed to identify these disorders which can help us in reducing the morbidity substantially", and Infinity SknCure is a small step in this direction.

Talking about India, [reports](https://www.jmgims.co.in/article.asp?issn=0971-9903;year=2016;volume=21;issue=2;spage=111;epage=115;aulast=Jain) show that the prevalence of skin diseases is around 60%. In other words, about 60% of the population in the age band of 21 and 55 suffer from a skin disorder. This data makes skin disorders even more alarming, yet people choose to self-diagnose themselves which can make these disorders even worse. With Infinity SknCure, we are aimed to deliver the right diagnosis to people all around the world.      

Using Infinity SknCure doesn't requires any knowledge of prior knowledge. It is as easy as using your Gmail application.   

Infinity SknCure can be used as a native application by the users to predict their skin disorders just by uploading a picture of their skin. This application makes use of a machine learning model trained to identify 10 different skin diseases. The real-time detection support in Infinity SknCure allows users to even use their cameras and get instant results right in front of them. 

Further, Infinity SknCure also recommends nearby doctors automatically by using their current location on a Google Map. 

We've also included a feature with which users can schedule appointments with the dermatologits to help the users in getting themselves diagnosed with real practitioner, and get their doubts resolved. This way, users can even take help from real doctors through this feature without even stepping out.

# How to run the application 

## Make sure you have node and npm installed. In the terminal, run the following commands:

```shell
node --version
npm --version
```

## Install Angular CLI globally

```shell
npm install - g @angular/cli
```


## Get the Code
```shell
git clone https://github.com/ishubham21/infinity-skncure-angular/
cd infinity-skncure-angular
```

## Install the required modules/dependencies

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

* [World Health Organization](https://apps.who.int/iris/bitstream/handle/10665/69229/WHO_FCH_CAH_05.12_eng.pdf?sequence=1&isAllowed=y)
* [US National Library of Medicine](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5718374/)
* [Science Daily Journals](https://www.sciencedaily.com/releases/2019/03/190320102041.htm#:~:text=The%20most%20common%20diagnoses%20were,of%20their%20abnormal%20skin%20findings.)
* [WHO neglected diseases](https://www.who.int/neglected_diseases/zoonoses/en/)
* [National Center for Biotechnology Information](https://pubmed.ncbi.nlm.nih.gov)
* [Journal of Mahatma Gandhi Institute of Medical Sciences](https://www.jmgims.co.in/article.asp?issn=0971-9903;year=2016;volume=21;issue=2;spage=111;epage=115;aulast=Jain) 

# Testimonials



# Sources for dataset -
* Dermnet NZ - [https://dermnetnz.org](https://dermnetnz.org)
* DermIS - [https://dermis.net](https://dermis.net)
* Dermatology Atlas - [http://www.atlasdermatologico.com.br/browse.jsf](http://www.atlasdermatologico.com.br/browse.jsf)