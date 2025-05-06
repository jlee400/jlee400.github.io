--- 
layout: single
title: "Data Quality"
toc: true
categories: post
tags: post
comments: true 
description: "Data Mining study"
---

- Poor data quality negatively affects many data preprocessing efforts
- Example: When trying to classify by a model to detect people who are loan risks using poor data
  
º Some credit-worthy candidates are denied loans

º More loans are given to individuals that default

① Noise

-	Objects: noise is and extraneous object
-	Attributes: noise refers to distortion of original values
  
② Outliers

-	Objects with characteristics that are considerably different than most of the other data objects
![outlier](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6lZJt72Kej7c9ZIl3mwVhQ6kBp-eJtSbPTQ&s)

Causes

-	Data entry errors: human errors during manufacturing the data
-	Measurement errors: The weights measured on faulty machines
-	Intentional errors: outliers may be intentionally introduced to test the robustness of statistical methods or machine learning models. 
-	Data processing errors: errors occurred during scaling, or normalization, and so on.
-	Sampling errors: sample was wrong, mistakenly included other samples
-	Natural outliers: Genuine rare events or extreme observations
  
③ Wrong data

④ Fake data

⑤ Missing values

Reasons for missing values

-	Information is not collected
-	Attributes may not be applicable to all cases (Annual income is not applicable to children)

Handling missing values

-	Eliminate data objects or variables
-	Estimate missing values

º Time series of temperature

º Census results

-	Ignore the missing value during analysis
``` python
	.dropna()
``` 

⑥ Duplicate data

Duplicates or almost duplicates of one another

- Major issue when merging the data from heterogeneous sources
  
Examples

- Same person with multiple email addresses
  
Data cleaning 

- Process of dealing with duplicate data issues
  
When should duplicate data not be improved?

- When duplicate data is meaningful 
(when a person purchased several times on one item)

- When duplicates represent real-world frequency
(repetitive review on a movie by same users could be a behavior to emphasize their review)

- When modeling event occurrence
(Log data, access records look duplicated, but normal event occurred repetitively)

- When detecting fraud or abnormal behavior
(Repetitive behavior also could be interpreted as fraud trial)
