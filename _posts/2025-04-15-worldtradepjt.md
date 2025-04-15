---
layout: single
title: "[Data Science Project] Comparison of soybean and beef world trade social network analysis usingnetworkx in python"
author: "Juhyun Lee"
toc: true
categories: project
comments: true
---
## Project Description

This project was launched from individual research in George Mason University course CSI 500, Computational Science Tools. Reading an academic journal, _Social network analysis of virtual water trade among major countries in the world_, constructed this project to observe ways to academically analyze the world data using ``networkx`` package in python. 

## Journal Article Summary
### [Deng et al (2021)] Social network analysis of virtual water trade among major countries in the world

This studies observes the virtual water trade strategy among 19 major countries from 2006 to 2015. The virtual water strategy refers to in which water-scarce countries and regions to replace their own production. Using _Multi-regional input-output model_ and _Social network analysis using Data sources from [Eora Global MRIO](http://www.worldmrio.com)_, thoroughly explain how water trade is operating throuout the world.

### Research question and research gap 

### Method

### Result and interpretation

## Data Introduction

### Data sources

### Major characteristics of the data 

### data pre-processing

## Analysis
### Density of soybean and beef in world trade

<figure>
    <img src="/assets/density.png" alt="Alt text" />
    <figcaption>Density of soybean and beef</figcaption>
</figure>

### In and Out degree of soybean and beef breakdown within Top 7 most frequent countries

<figure>
    <img src="/assets/top7_in_out_deg.png" alt="Alt text" />
    <figcaption>In and Out degree of top 7 countries (2023)</figcaption>
</figure>

<figure>
    <img src="/assets/Out_degree.png" alt="Alt text" />
    <figcaption>Out degree of top 7 countries (1986 - 2023)</figcaption>
</figure>

<figure>
    <img src="/assets/In_degree.png" alt="Alt text" />
    <figcaption>In degree of top 7 countries (1986 - 2023)</figcaption>
</figure>


### Simple network of soybean and beef trade

<figure>
    <img src="/assets/Network_of_soybean.png" alt="Alt text" />
    <figcaption>Simple Network of soybean</figcaption>
</figure>

<figure>
    <img src="/assets/Network_of_beef.png" alt="Alt text" />
    <figcaption>Simple Network of beef</figcaption>
</figure>

### Detailed network analysis of soybean

<figure>
    <img src="/assets/arf_of_soybeans.png" alt="Alt text" />
    <figcaption>Directed network graph of soybean</figcaption>
</figure>

<figure>
    <img src="/assets/Trade_volume_of_soybeans.png" alt="Alt text" />
    <figcaption>Network graph reflected its weight</figcaption>
</figure>



### Detailed network analysis of beef

<figure>
    <img src="/assets/arf_of_Beef.png" alt="Alt text" />
    <figcaption>Directed network graph of beef</figcaption>
</figure>



### Network of world soybean and beef trade
<figure>
    <img src="/assets/TradeVolume of soybeans and beef.png" alt="Alt text" />
    <figcaption>Network graph of trade volume of both soybeans and beef</figcaption>
</figure>

### Interactive soybean and beef world trade flow visualization

<iframe src="/assets/soybean_trade_map.html" width="100%" height="600px"></iframe>

<iframe src="/assets/beef_trade_map.html" width="100%" height="600px"></iframe>
