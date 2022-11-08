# CT2CT: Resolution Augmentation of CT Scans

## 💡 Motivation

The reconstruction of 3D encephala requires Computed Tomography exams in order to obtain "slices" or sections of a patient's head. Conventional systems usually extract between 100 and 300 slices per patient; higher numbers would imply a more prolonged radiation exposure. A 2009 study of medical centres in the San Francisco Bay Area calculated that there is one extra case of cancer for every 400 to 2,000 routine chest CT exams. This has been linked to the abusive execution of the phenomena known as *defensive medicine*, which claims that many CT procedures were unnecessary and, hence, its overuse could potentially harm the patient if performed repeatedly under the said practice.

Using the Pix2Pix technology, I explore the possibilities of achieving a higher number of slices of the encephalon by only scanning a lower number of *key slices* that allow the model to predict (generate) non-scanned parts of the brain in the hopes that the time of radiation exposure might be reduced substantially.

## 🌺 Discovering GANs

In late 2019, when I began university, I came across the Pix2Pix paper. There, the authors described a proposed model for image-to-image translation tasks that involved the creation of a *Generative Adversarial Network*, topic of my current dissertation. After getting inspiration from many sources, I decided to embark on a journey that, to this date, has given me so much insight into the world of machine learning and AI.

A competition by a Spanish YouTuber ([*DotCSV*](https://www.youtube.com/c/DotCSV)), where he proposed an image-to-image implementation jam, was my starting point. During said contest, I created, trained and evaluated a *conditional* Generative Adversarial Network with the purpose of generating inner slices of the brain. Although I was not the winner (understandably due to the brilliance of the other candidates), my project was mentioned and briefly showcased in one of his videos, amassing +60k views.

## 🌐 Related Links

If you are interested in looking at the code, please [visit the repo](https://github.com/sergiorivera50/CT2CT). You should also check out [the video](https://youtu.be/BerOC6n8j9Q?t=1011) where my project was mentioned.
