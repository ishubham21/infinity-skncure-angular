# Infinity SknCure

<p align="center"><img src="https://github.com/ishubham21/infinity-skncure-angular/blob/master/readme-assets/logo.png"></p>

# Table of Contents

* [Our purpose and motivation behind Infinity SknCure](#our-purpose-and-motivation-behind-infinity-skncure)
* [How to run the application](#how-to-run-the-application)
* [Features](#features)
    * [Features in previous version](#version-1-had-the-following-features)
    * [Features in present version](#version-2-has-the-following-features--the-features-listed-above)
* [Diseases Listed in the model](#diseases-listed-in-the-model--)
* [Do we even need this application?](#do-we-even-need-this-application)
* [Research guides for Infinity SknCure](infinity-skncure-is-built-on-the-basis-of-previous-studies-conducted-in-this-field)
* [Feedback and Testimonials](#feedbacks-and-testimonials)
* [Future Plans](#future-plans)
* [Sources of dataset](#sources-of-dataset--)

# Our purpose and motivation behind Infinity SknCure

**“The finest clothing made is a person’s own skin” – Mark Twain.**

Your skin is your largest organ—that should be enough to tell you that skin care is vital. But still, we know many people assume it isn’t. Others are unsure. Hence the reason “why skincare is important” is one of the top skin-related Google searches.

Its purpose that is to keep our insides in may seem simple, but when looked closely, it plays a surprising number of roles in our lives.

Between us and the external world lies an interface that makes up almost 16% of our body weight, that is, our SKIN - the largest organ in our bodies.

A very recent [report](https://www.who.int/neglected_diseases/news/WHO-publishes-pictorial-training-guide-on-neglected-skin-disease/en/) by World Health Organization(WHO) shows that skin diseases are among the most common of all human health afflictions and affect almost **900 million people** in the world at any time.

There are a lot of doctors, dermatologists, and researchers doing their best in this field of medical science. There even are high-accuracy Machine Learning models to help the researchers in this field in making their study more effective, but all these technological advancements are still far-flung from the capacity of general folks. We as a society are yet to leverage these technological advancements.

Accounting to the small number of technological resources, there is still a vast scope of covering the lives of people with less or no knowledge about such skin diseases. There is still some revolution waiting to turn all these lives.  

In a world where skin diseases have a stigma around them and are treated as taboo, we wanted to create an application that could make a difference. We wanted to make something that could be easily, and immediately available to the users, a thing that could help people in multiple ways. Thus, we decided to develop **Infinity SknCure**, which is a web-based skin disease predictor. WHO [says](https://apps.who.int/iris/bitstream/handle/10665/69229/WHO_FCH_CAH_05.12_eng.pdf?sequence=1&isAllowed=y), "Basic health education is needed to identify these disorders which can help us in reducing the morbidity substantially", and Infinity SknCure is a small step in this direction.

Talking about India, [reports](https://www.jmgims.co.in/article.asp?issn=0971-9903;year=2016;volume=21;issue=2;spage=111;epage=115;aulast=Jain) show that the prevalence of skin diseases is around 60%. In other words, about 60% of the population in the age band of 21 and 55 suffer from a skin disorder. This data makes skin disorders even more alarming, yet people choose to self-diagnose themselves which can make these disorders even worse. With Infinity SknCure, we are aimed to deliver the right diagnosis to people all around the world.      

Using Infinity SknCure doesn't require any prior knowledge. It is as easy as using your Gmail application.   

Infinity SknCure can be used as a native application by users to predict their skin disorders just by uploading a picture of their skin. This application makes use of a machine learning model trained to identify 10 different skin diseases. The real-time detection support in Infinity SknCure allows users to even use their cameras and get instant results right in front of them. 

Further, Infinity SknCure also recommends nearby doctors automatically by using their current location on a Google Map. 

We've also included a feature with which users can schedule appointments with the dermatologist to help the users in getting themselves diagnosed with a real practitioner, and get their doubts resolved. This way, users can even take help from real doctors through this feature without even stepping out.

# How to run the application 
### Using the Progressive Web Application

You can use this link to navigate through the website- [Infinity SknCure Website](https://infinity-skncure-angular-team.web.app/) 

 * Head on to the same website mentioned above on your device.
 * In the browser options, search for the 'Add to home screen'/'Install App' option and tap it. (You'll find an install button in the address bar if you're using Chrome on windows/mac).
 * Wait for the device to install the app. 
 * An app with the name *Infinity-Skncure* will be visible on your home screen.

## Running Infinity SknCure on local server
### Make sure you have node and npm installed. In the terminal, run the following commands:

```shell
node --version
npm --version
```

### Install Angular CLI globally

```shell
npm install - g @angular/cli
```


### Get the Code
```shell
git clone https://github.com/ishubham21/infinity-skncure-angular/
cd infinity-skncure-angular
```

### Install the required modules/dependencies

```shell
npm i
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Features

### Version 1 had the following features: 

Link to version 1 repository: [https://github.com/ishubham21/infinity-skncure](https://github.com/ishubham21/infinity-skncure)

* **Can Detect 11 skin diseases:** The skin diseases model has been trained to predict and differentiate between the 10 most prominent skin diseases. These diseases are Acne, Contact Dermatitis, Corn, Cutaneous Horn, Eczema, Herpes Zoster, Melanoma, Psoriasis, Rosacea, and Urticaria.

* **Trained on 300,000 images:** The model has been trained on over 1500 images which were iterated 200 times each. The model is trained keeping in mind the various skin types (normal, dry, oily, combination, etc.), colors (white, black, brown, porcelain, ivory, sand, beige, etc.), body parts (scalp, forehead, ears, nose, cheeks, lips, chin, neck, chest, back, arms, hands, palms, excretory organs (both male and female), thighs, feet, and toes).

* **Progressive Web App (PWA):** Infinity SknCure is a Progressive Web App. In other words, though Infinity SknCure is a website, it can be installed and used as a native application on almost every operating system (including macOS, iOS, Windows, and Android).  

* **Upload Image Feature:** This feature allows the users to use images saved in their devices to predict skin diseases from them. 

* **Prediction works offline:** Since this application is a PWA, all the required files are already cached during installation. It allows the users to make use of features like detection even when they are offline. 

* **Global Chat Feature:** Skin diseases also have shown effects on the mental health of people suffering from them. It brings down their confidence. Thus, the earlier version of Infinity SknCure had a feature of global chat which allowed users to chat with other people and dermatologists globally. It allowed the users to talk their hearts out and meet with like-minded people from throughout the world. This feature has now been upgraded to be known as 'Infinity Community'. 

* **Ability to search nearby dermatologists:** This version of Infinity SknCure had a feature that allowed users to search doctors near them using a simple Google Search. But this feature has now been completely turned over to provide a better experience using in-app Google Maps.

### Version 2 has the following features + the features listed above:

* **Technologies used:** The previous version of this application was built using HTML, CSS, JavaScript, ML5, and p5.js. But the version 2 i.e. the current version is a completely rewritten version. It makes use of technologies like **Angular 12, Typescript, HTML, CSS, Angular-Material, Firebase, ML5, p5.js**. This application also makes use of some of the Google APIs including **Google Maps API, Google Maps Embedded API, Google Places API.**. 

* **Better User Interface:** In the earlier version of Infinity-SknCure, it only had three buttons in the middle of the screen which was though easy to use but was not aesthetically pleasing. Therefore, in this version of Infinity SknCure, we have changed the UI completely to make it closer to the user. We have used #6749ef as our primary color since blue is typically associated with credibility, trust, knowledge, power, professionalism, cleanliness, calm, and focus. Because all of these qualities are valued in the medical community, blue is the ideal choice for medical logos. Refer - [Serendipit Consulting](https://serendipitconsulting.com/what-is-color-theory-and-why-are-so-many-healthcare-logos-blue) 

* **Google Sign-in:** We wanted to give this application a more personalized touch, we wanted it to be unique for each and every person who logs into it. Thus, this version of Infinity SknCure allows the users to sign in with their Google accounts and get served with their respective data.

* **Disease Tracker:** You have trackers for your sleep, workouts, and meditation, but what if we say Infinity SknCure will allow you to track your skin health? Yes, this is true. With Infinity SknCure, users can easily save their prediction results and see them on a date-wise graph. This graph allows users to see and track their journey towards healthy skin.

* **Infinity Connect:** Skin disorders brings with them a feeling of low self-esteem. They are known to show adverse effects on the mental health of the ones suffering from it. With this in mind, we have created a forum where users from different backgrounds can come together and share their journey. This feature allows the users to post images and text with no limit on it. Further, we believe in the Law of Attraction and that you can achieve anything by manifesting it. Thus, this feature can help users in achieving healthy skin. Infinity Community also let users to post their content in private mode allowing them to use Infinity SknCure as a personal diary

* **See a Doctor:** We understand that not everyone in this world trust Artificial Intelligence. Thus, Infinity SknCure has a feature that allows users to flexibly schedule meetings with our doctors. Whenever users register for a meeting using this feature, a google meet link is sent to them for that particular time slot. 

* **Doctors Near Me:** This feature is an upgraded version of 'Nearby Doctor Search'. It allows users to search for dermatologists in their proximity. Users can easily see the location of all such dermatologists on a Google Map. Users can also see if the ratings and vicinity of all the nearby dermatologists.  

* **General Tips Section:** It is a playful feature that allows users to turn a flip card and reveal a new skincare tip each time the card flips. 

* **Free for all:** We are aimed to serve the community and we want everyone to be able to make use of this application equally. Thus, we would only be pairing up with the dermatologists who are willing to serve our users under charity. 

<!-- * **Smooth experience:** Since we have used Angular as our primary front-end framework, this application reduces reloading and allows users to move from one feature to another seamlessly.   -->



# Diseases listed in the model - 
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

[Reports](https://www.canwelivebetter.bayer.com/health/tanning-delusion-why-do-we-ignore-risks-skin-cancer) also point that men are less likely to use sunscreens which is a major reason why many people suffer from skin cancers and it again points towards the associated stigmas, and with this application, we want to fight these social stigmas.

# Infinity SknCure is built on the basis of previous studies conducted in this field

* [World Health Organization](https://apps.who.int/iris/bitstream/handle/10665/69229/WHO_FCH_CAH_05.12_eng.pdf?sequence=1&isAllowed=y)
* [US National Library of Medicine](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5718374/)
* [Science Daily Journals](https://www.sciencedaily.com/releases/2019/03/190320102041.htm#:~:text=The%20most%20common%20diagnoses%20were,of%20their%20abnormal%20skin%20findings.)
* [WHO neglected diseases](https://www.who.int/neglected_diseases/zoonoses/en/)
* [National Center for Biotechnology Information](https://pubmed.ncbi.nlm.nih.gov)
* [Journal of Mahatma Gandhi Institute of Medical Sciences](https://www.jmgims.co.in/article.asp?issn=0971-9903;year=2016;volume=21;issue=2;spage=111;epage=115;aulast=Jain) 

# Feedbacks and Testimonials

After conducting several survey and feedback sessions, we have compiled a list of feedbacks from various users. Users were selected randomly, and the maximum of these users belong to the medical background. 


* Users were asked to rate Infinity SknCure based on their personal experiences on a scale of 1 - 5. Here are the results - 

<p align="center"><img src="https://github.com/ishubham21/infinity-skncure-angular/blob/master/readme-assets/feedback1.png"></p>

* The following graph shows the likeability (in percent) of the features among the users -

<p align="center"><img src="https://github.com/ishubham21/infinity-skncure-angular/blob/master/readme-assets/feedback2.png"></p>

* Following are the organizations to which our users belong

<p align="center"><img src="https://github.com/ishubham21/infinity-skncure-angular/blob/master/readme-assets/orgs.png"></p>

    * Al Falah Medical College, Faridabad
    * B. J. Medical College, Pune
    * Government Medical College, Barmer
    * JJM Medical College, Davanagere
    * JLN Medical College, Ajmer
    * Maulana Azad Medical College, New Delhi
    * Rajiv Gandhi Uniersity of Health Sciences, Bangalore
    * Rajasthan Technical University, Kota
    * Manipal Academy of Higher Education, Manipal
    * Banaras Hindu University, Varanasi

* Following are the video feedbacks received from people working in different spheres including both medical and technological.

    * Dr. Rashmi (Consultant Dermatologist) - [Link](https://youtu.be/IQIezRiqiHE)

    * Dr. Narendra Singh Patel (Assistant Professor, RTU Kota) - [Link](https://youtu.be/_4-CLA2CgVs)

    * Dr. Vikas Jain (Assistant Professor, RTU Kota) - [Link](https://youtu.be/TB29a0dlKcI)
 
    * Ms. Iman Mohi (DSC Lead, RTU Kota) - [Link](https://youtu.be/au49dyDeDyk)

* This list contains both positive and negative feedbacks that have helped us in evolving this application.

| Name of the user  | Organization | Feedback received |
| ------------- | ------------- | ------------- |
| Taneesha Mathur  | Mody University | The fact that the app allows me to consult doctors is very helpful. Most people don't rely 100% on AI, and so this feature is amazing.  |
| Tushar Bhardwaj  | Government Medical College, Barmer | I really find it useful  |
| Shristi Goyal | Rajiv Gandhi University of Health Sciences | As a doctor I personally don't like that much AI but yeah !! It's super cool |
| Gagan Irani | Rajiv Gandhi University of Health Sciences | Instant information that we get is soo reliving and info about near by docs is a great feature and very helpful |
| Mohan | Rajiv Gandhi University of Health Sciences | Its good initiative and helpful in this pandemic world. |
| Adnan Ahmed | JJM Medical College | Pretty accurate, if take photo only of the face. 1. Real time photo of only face in lit room 100% normal. 2. Same photo imported - slightly reduced value but still near 100 3. In a dark room with flash - near 100 as well. 4. No.1 and 2 photo edited to look darker(for dark circles)- was not fooled still normal skin. 5. Photo which was taken from a distance(approx 1 m)- acne 61%. I will recommend to first run a facial recognition (finding eyes, nose, mouth,etc) to find a face, then zoom on that so it looks like a photo taken of only face.|
| Devesh Priyadarshini | Rajiv Gandhi University of Health Sciences | Interface was good. Had little bit issue with camera adjustment. I got only 2 options acne and normal skin. |
| Arpita | JJM Medical College | It is a innovative approach towards helping people in need for urgent and critical diagnosis. |
| Shail Soni | JJM Medical College | Stepping ahead into the future of AI based Diagnosis (though we need humans as doctors no matter how highly the technology is developed). Great going! |
| Kashish Mittal | Government Medical College, Barmer |  It is a user friendly product with high end technology. |
| Niraj | Rajiv Gandhi University of Health Sciences | Reliable and easy ways to assess skin problems |
| Diya Vijay | Rajasthan Technical University, Kota | My favourite part of this project is it's dark Circles detection feature as I have a lot of dark circle. |
| Abhimanyu Singh | Rajasthan Technical University, Kota | It's covered all the ideas that one good project have, like Security (storage of data in google database, login through google etc.), all the basics but important stuffs like ( Maps, OS independent, lightweight, Tips for users, insta like feature, etc.), proper use of AI, i like the project ideas and efforts. |
| Kanishk Singh | Rajasthan Technical University, Kota | I had never thought that technology would so advanced that we will also be able to check our skin health. This is only be possible because we have developers like you. |
| Ashi Dubey | Rajasthan Technical University | The whole host of features that you ahve put in are amazing and also easy to handle and understand making it user friendly. As for any suggestion, int the training dataset yo've put in, do include low megapixel images as well so that people who upload pictures with low quality camera can also experience near accuracies. |
| Pradhumn Singh | Rajasthan Technical University, Kota | LOVE IT, it would be more better if you make it secure. |

# Future Plans

In line with the mission and the goals of Infinity SknCure, following are our future plans in order to expand this application - 

* **Multi-language support:** We want to make skincare available for all. To achieve this, we are planning to serve Infinity SknCure in 10+ most spoken languages throughout the world using Google Cloud Translate API. This would allow users from all over the world to use Infinity SknCure in their own native languages.

* **Separate login for Dermatologists:** We want to make this application flexible for both the doctors and users. Thus, expanding Infinity SknCure in this direction would allow doctors to make their personalized calendars and list themselves on the application. This feature would also help our team in onboarding the doctors easily. 

* **Emotional Chatbot:** We are on a mission to help people not only physically but also mentally. Therefore, in the next edition of Infinity SknCure, we would be enabling an emotionally intelligent chatbot with whom users would be able to chat, speak about their problems and get human-like advice.

# Sources of dataset -

* Dermnet NZ - [https://dermnetnz.org](https://dermnetnz.org)
* DermIS - [https://dermis.net](https://dermis.net)
* Dermatology Atlas - [http://www.atlasdermatologico.com.br/browse.jsf](http://www.atlasdermatologico.com.br/browse.jsf)
