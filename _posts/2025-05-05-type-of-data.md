--- 
layout: single
title: "Types of data"
toc: true
categories: post
tags: post
comments: true 
description: "Data Mining study"
---
# What is data?

Data is basically a collection of data objects and their attributes. 

![data table](https://jcsites.juniata.edu/faculty/rhodes/ml/images/dataterms.jpg)

## Attributes (aka. Variable, field, characteristic, dimension, or feature)

-	Property, characteristics of an object
-	Eye color, temperature, id, etc.
-	<span style="background-color:#E6E6FA"> Attribute values </span> are the numbers or symbols assigned to an attribute for a particular object
-	Distinction between attributes and attribute values

①	Same attributes can be mapped to different attribute values
-	Height can be measured in feet or meters <span style="background-color:#E6E6FA">(Different unit)</span>

②	Different attributes can be mapped to the same set of values
-	Attribute values for ID and age are integers

③	But properties of attribute can be different than the properties of the values used or represent the attribute
![types of data](https://cdn.prod.website-files.com/6584d3c7e9c648618ca2ec43/66b5e3b5e6d6a9bfacaa3c30_AD_4nXetDuXkiUtVC0iA_3NQryNFQei8UJBP1nh0G3qeA3hGUgHeb9g4PbQxFhemRGsfjXFY1qIg7-5RkuQFmk73UPEA52zY8ax3pyrzUMKUvfdcidK0tUu85MawkXkhqJuBEup9k5jmNsn-5DZd0VkmilCuxoeh.jpeg)

### Type of attributes

① Nominal
-	‘Label’ 
-	ID numbers, eye color, sex, zip codes
-	=, ≠
② Ordinal
-	‘Order’
-	Rankings, grades, height
-	> , <
③ Interval 
-	‘Unit of measurement’, but arbitrary
-	Calander dates, temperatures in Celsius or Fahrenheit
-	+, -
④ Ratio
-	‘Unit of measurement’, but the origin is not arbitrary
-	Temperature in Kelvin, length, counts and elapsed time
-	*, /
  
### Discrete and Continuous Attributes
① Discrete Attributes
-	Only has a finite or countably infinite set of values
-	Zip codes, counts, or set of words
-	Often represented as <span style="background-color:#E6E6FA">integer variables</span>
-	<span style="background-color:#E6E6FA">Binary attributes</span> are a special case of discrete attributes
② Continuous Attributes
-	Has real numbers as attribute values
-	Temperature, height, or weight
-	Practically could be measured and represented using a finite number of digits
-	Continuous attributes are typically represented as floating-point variables

### Asymmetric Attributes

- Only <span style="background-color:#E6E6FA">presence</span> is regarded as important
- Dummy variables

### Key messages for Attribute Types

- The types of operations chosen should be “MEANINGFUL” for the type of data
- Four properties of data
① Distinctness
② Order
③ Meaningful intervals
④ Meaningful ratios
- The data type you see (often numbers or strings) may NOT capture all the properties 
- The data type you see may suggest properties that are not present
- Analysis may depend on these other properties of the data : Many statistical analyses depend only on the distribution
- Key: ‘What is meaningful?’ can be determined by the domain you want to analyze about

2)	Object
-	A collection of attributes
2.	Record, point, case, sample, entity, or instance. 

# Warmest regards,
This is the first post to explain massive amount of information of data mining. Hope you enjoyed, and please stay tuned for next uploads!
