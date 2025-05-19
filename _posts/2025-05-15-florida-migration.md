---
layout: single
title: "[Data Science Project] Community Detection in Florida: Race, Education, Migration Gap by County"
author: "Juhyun Lee"
toc: true
categories: project
comments: true
---
# Introduction

Understanding spatial inequality requires more than examining socioeconomic indicators in isolation. This project explores how migration-based community structures in Florida relate to racial composition and educational attainment. 
Using county-to-county migration data and US Census statistics, this blog explains how I applied Louvain community detection and visualized educational and racial disparities across communities. 

# Data and Preprocessing
## Data used
- **Migration Data**: US Census Bureau's 2016-2020 county-to-county migration flows for Florida.
- **Demographic Data**: ACS-derived variables on race, income, education, commute time, etc.

After filtering for intra-Florida migration, I built a directed weighted network and mapping visualizations, joined node-level attributes, retaining key variables such as:
- ``median_income``
- ``share_white``, ``share_african``, ``share_asian``, ``share_alaska``, ``share_hawai`` (racial proportions)
- ``share_bachelor``, ``share_master``, etc. (educational attainment)

# Migration weight and Network between counties in Florida

![IntraFlorida](/assets/IntraFlorida.png)

![NetworkFlorida](/assets/NetworkFlorida.png)

# Community Detection

## Girvan-Newman
### Description
### Community Visualization

![GirvanNewman](/assets/girvan_newman.png)

### Mapping 

![GirvanNewmanMap](/assets/girvan_newman_map.png)

## Louvain
### Description
### Mapping 

![LouvainMap](/assets/louvain_map.png)

## Leiden
### Description
### Mapping 

![LeidenMap](/assets/leiden_map.png)


# Demographic variation by Community
## Race

![RaceBox](/assets/racial_composition.png)

![RaceMap](/assets/race_map.png)

## Education

![EducationBox](/assets/education_attainment.png)


![EducationMap](/assets/education_map.png)

# Interactive Visualization with Migration

![MigrationMap](/assets/migration_map.png)

![IntraFlorida](/assets/IntraFlorida.png)
