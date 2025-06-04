---
layout: single
title: "[Data Science Project] What Drives Intra-State Migration? A Network Regression Analysis on Florida Counties"
author: "Juhyun Lee"
toc: true
categories: project
comments: true
thumbnail: https://www.delandcomputerrepair.com/wp-content/uploads/2024/10/florida-migration.jpg
---

# Introduction

Understanding internal migration patterns within a state offers deep insights into social equity, economic opportunity, and regional planning. In this blog post, I analyze county-to-county migration flows in Florida between 2016 and 2020 using network-based regression methods. Specifically, I apply Multiple Regression Quadratic Assignment Procedure (MR-QAP) to identify which socioeconomic and spatial factors influence migration ties.

# Data Overview

- Migration Flows: Origin-destination data among Florida counties (2016–2020), filtered to include only flows with weight > 0.

- County Attributes: Socioeconomic indicators like median income, racial composition, education, employment, commute time, and housing age from U.S. Census.

- Geometry: Florida county shapefiles for spatial network construction.

Each county is treated as a node, and migration flow as a weighted edge in a directed graph.


# Methodology: MR-QAP

MR-QAP is a network regression model that accounts for the autocorrelated structure of network data. Here’s what we did:

1. Dependent Matrix: Migration flow matrix between 67 Florida counties.

2. Independent Matrices: Pairwise absolute differences between counties in:

- Median income

- % White population

- % African-American population

- Degree centrality (connectedness)

- % Employed

- Average commute time

- Median year built of housing

- County area

- Geograph모](https://blog.kakaocdn.net/dn/bOWyfO/btrziDRzGRl/DdQQcMBggP31aQx85TF131/img.gif)

Want to see more posts like this combining Python, mapping, and regression modeling?
Hit like and subscribe to follow my data science journey!
