--- 
layout: single
title: "Types of dataset"
toc: true
categories: post
tags: post
comments: true 
description: "Data Mining study"
---
# Types of Dataset
## 1) Important Characteristics of Data 

① Dimensionality (# of attributes)

-	High dimensional data brings many challenges to analyze
  
② Sparsity

-	Only presence counts 
-	Proportion of missing, NaN, set to 0 data
  
③ Resolution

-	Patterns depend on the scale
-	Quality, detail of the data
  
④ Size

-	Type of analysis may depend on the size of the data
-	Overfitting, Underfitting problems (discussed later)
-	
## 2) Types

① Record Data

①-① Data Matrix

Data with collection of records, which consists of a fixed set of attributes

![document](http://www.analytictech.com/networks/kmatrices2.gif)

-	Could be named as m x n matrix: m rows x n columns, one for each attribute

-	When there are data objects with a fixed set of numeric attributes, able to be thought of as points in a multi-dimensional space, each dimension represents a distinct attribute

①-② Document Data
![스크린샷 2025-04-12 160644](https://github.com/user-attachments/assets/8c3e7fa9-c7c7-456c-a08e-c2e5a28506c4)

-	Each document becomes a ‘<span style="background-color:#FFE6E6">term</span>’ vector
-	Each term is a component (attribute) of the vector
-	The value of each component is the number of times the corresponding term occurs in the document

①-③ Transaction Data

![스크린샷 2025-04-12 160851](https://github.com/user-attachments/assets/33db9fce-3e86-462a-88a6-c04df3bd091e)

![transaction data](https://www.researchgate.net/publication/24344278/figure/fig7/AS:668354046074889@1536359430564/a-A-sample-transactional-dataset-b-Bit-vector-representation-of-sample-dataset.png)

-	Each transaction involves a set of items
-	Several items included in one attribute
-	Can represent transaction data as record data

② Graph Data

-	Worldwide Web

![Worldwideweb](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.npr.org%2F2013%2F05%2F22%2F185788651%2Fthe-first-web-page-amazingly-is-lost&psig=AOvVaw2PTgLg6jDyKq1MXcpe5AQZ&ust=1744528276973000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjOxMP40YwDFQAAAAAdAAAAABAE)

-	Molecular Structures

![molecular](https://cdn.britannica.com/28/105428-050-8EA3E600/Caffeine-molecule.jpg)

③ Ordered Data

- Spatial Data

![map](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPHiP6suY_BRMyKJQYrR1iOku_LEtK5MpYw&s)

- Temporal Data

![temporal](https://www.timescale.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fnpizagvkn99r%2F4pWgxYnlqanLpbOle9uaiy%2Fd550c745414b73f898255971c53c061f%2FScreenshot_2024-01-09_at_13.06.15.png%3Ffm%3Djpg%26fl%3Dprogressive&w=1920&q=75)

- Sequential Data
![스크린샷 2025-04-12 161442](https://github.com/user-attachments/assets/2b8a631b-ba79-487e-b8d7-32e763315152)

Sequences of transactions 
- Genetic Sequence Data

![genetic](https://virological.org/uploads/default/original/1X/2e910030c415c76d39528a44b5e6a25ac383e22f.png)

# Warmest regards,

Hope you enjoyed this post! Thank you! please hit the like button.
