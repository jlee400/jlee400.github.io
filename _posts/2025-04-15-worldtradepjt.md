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

This study aims to understand how global virtual water trade is structured using network theory. Even though there were several studies done previously, there were research gaps, inconvenient calculation for the volume of industrial products and service industry products due to its complicated calculation process. 

### Method

1. Input-output model

This method can be divided into a single-region input-output model and multi-regional input-output model according to the number of research areas. 

Both model is basically same in its steps. Input-output model uses the water use data of each industry divided by the total outpu to obtain the <span style="background-color:#FFE6E6"> coefficient of direct water use </span>.

The coefficient of direct water use is multiplied with the <span style="background-color:#E6E6FA"> _Leontief inverse matrix_ </span>. Finally, import and export in the input-output table is used to obtain virtual water trade volum in various industries.


2. Multi-regional input-output model

w is the direct water coefficient

$$
w^r_i = \frac{W^r_i}{X^r_i}
$$

- $w^r_i$: Virtual water usage of r country's i industry
  
- $W^r_i$: Total water usage of r country's i industry
  
- $X^r_i$: Gross output of r country's i industry
  
- r: The first country (region)

- i: Primary industry

The formula for the balance of the world input-output tables in the EORA data base is written as:

$$
AX + Y = X
$$

A: mn x mn order coefficient matrix of direct consumption

X: mn x 1 order of the total output column vector

Y: final used column vector

This formula can be rewritten as:

$$
X = (I - A)^{-1}Y = LY,
$$

where $L = (1 - A)^{-1}$ is the mn x mn order of the Leontief inverse matix. Multiplying the direct water coefficient diagonal matrix W, the Leontief' inverse matrix L, and the final used matrix Z, it is able to obtain the virtual water trade matrix H. 

$$ 
H = \hat{W} L Z
$$

Calcualting this formula, finally it is available to obtain the m x m order virtual trade matrix T by further merging each country (region) by industry. 
> The diagonal element of the matrix T represents the virtual water consumption of the products produced by the countries (regions), whereas the non-diagonal elements are the virtual water import and export trade. _Deng et al (2021)_

This study considers non-diagonal elements, $t^{rs}(r \ne s) indicates the bilateral trade volume between country r and s, inferring the virtual export from country r to s, or import from country r to s.

3. Network characteristics of virtual water trade among countries (regions) around the world

- Density

$$
D = \frac{\sum_{r \ne s,\, r=1}^{m} \sum_{s=1}^{m} t^{rs}}{m(m - 1)}
$$

A Greater density of network entails a greater average value of the virtual water trade among countries and a closer relationship. 
  
- Asymmetry

$$
S = \frac{ \sum_{r \ne s,\, r=1}^{m} \sum_{s=1}^{m} \left| t^{rs} - t^{sr} \right| }{ m(m-1) }
$$

The greater the value S, the greater the virtual water trade deficit (or surplus) among major countries.

- Out-Degree

$$
OD = \sum_{s \ne r,\, s=1}^{m} t^{rs}
$$

The greater the Out-Degree (OD), the more virtual water exports in the country.
  
- In-Degree

$$
ID = \sum_{r \ne s,\, r=1}^{m} t^{rs}
$$

The greater the In-Degree (ID), indicates that a country has more virtual water imports. Also, A greater Out-Degree than In-Degree indicates a virtual water trade surplus in the country, vice versa.

### Result and interpretation

 The virtual water imports and exports of major countries (regions) have increased in varying degrees, especially in 2015 due to the further improvement of transportation facilities in recent years. Moreover, the logistics costs are continually decreasing. Thus, the trade volume of each country is further expanding. 

After the thorough network analysis using the methods described above, the data matrix corresponding to the virtual water trade network reflected the multilateral virtual water trade between multiple contries. For yearly virtual water trade analysis, the gap between virtual water imports and exports is growing. China's virtual water exports were the largest in the virtual water trade among the 19 major countries. By contrast, Saudi Arabia's virtual water exports were the smallest. 

On the other hand, the US had largest virtual water imports in the virtual trade among 19 major countries. In 2006, Argentina's virtual water imports were the smallest. In 2015, Saudi Arabia's virtual water imports were the smallest. This shows how the tendency of virtual water trade differs by each year. 

In 2006 and 2015, the country with the most out flow in the virtual water trading network was China, and the country with the most outflow was the US. 

![스크린샷 2025-04-15 173653](https://github.com/user-attachments/assets/4b19d546-7b5f-4fc1-a697-d889cd00c86e)

In this virtual trade networks between 19 major countries, the size of node in the network reflects the size of the degree and the degree of ingress respectively. The thickness of the trade links between countries reflects the amount of virtual water import and export trade between countries.

The greater the bilateral trade volume between countries, the thicker the connection. 

### Conclusions and implications

The virtual water import and export of major countries in the world increased in 2015 varying degrees. Among them, China's virtual water import and Russia's virtual water export growth rates were the highest. Major countries have the largest export and import in the primary industry, except for Japan and South Korea. 

For the implications, there were two possibilities:

First, water-deficient countries can alleviate the pressure on water suply by importing sources.

Second, the trade volume of agricultural products in various countries may be lower than the volume of trade in industrial products and services, the amount of water consumed per unit of production of agricultural products is much greater than that of industrial products and services. 

In thse reasons, while emphasizing the virtual water trade of agricultural products, it is necessary to pay attention to the production and production of related industries and trading.


## Data Introduction

According the the article previously explained, this project follows similar structure, but compare only two different trading product, soybeans and beef. 

> According to research from the soybean checkoff, U.S. beef operations use over 1.3 million tons of soybean meal every year. That’s the meal from about 55 million bushels of U.S. soybeans. One of those operators is Matt Widboom, from the southwestern corner of Minnesota.

“We have used soy meal as the protein supplement for our cattle since we started raising cattle in the 1930s,” says Widboom. “The quality of the feed is very important to our product, and using soy meal allows them to produce lean meat.”

Grinding the soybeans into meal makes it easier on the cattle’s digestive system. _[The soy hopper]((https://unitedsoybean.org/hopper/beef-bulking-up-with-soy/))_



### Data sources

![FAO]((https://github.com/user-attachments/assets/3b205637-6b56-40f7-9791-c4892f25646d))

> The Food and Agriculture Organization (FAO) is a specialized agency of the United Nations that leads international efforts to defeat hunger. _FAO official website_

> FAOSTAT provides free access to food and agriculture data for over 245 countries and territories and covers all FAO regional groupings
from 1961 to the most recent year available. _FAO STAT Official Website_

The data used for this project was downloaded from _[FAOSTAT]((https://www.fao.org/faostat/en/#data))_.
This project used _Trade_DetailedTradeMatrix_E_All_Data_(Normalized).csv_ data for edge, and _Macro-Statistics_Key_Indicators_E_All_Data_(Normalized).csv_ and _Population_E_All_Data_(Normalized).csv_ for node.


### Major characteristics of the data 

1. The edge data

Columns 

- Reporter Country Code
- Reporter Countries
- Partner Contry Code
- Partner Counties
- Item
- Element
- Year
- Unit
- Value

Contains informaiton about import and export activities based on different items and years. 

2. The node data

2-1. Population data

Contained same columns.

2-2. Macro data

Contained same columns.

### data pre-processing

(1) Extraction of columns in need

``` python
link = link[['Reporter Country Code', 'Reporter Countries', 'Partner Country Code', 'Partner Countries', 'Item', 'Element', 'Year', 'Unit', 'Value']]
```

``` python
macro = macro[["Area Code", "Area", "Item", "Element", "Year", "Unit", "Value"]]
pop = pop[["Area Code", "Area", "Item", "Element", "Year", "Unit", "Value"]]
```

(2) Choose the items and elements

|Division|Items / Elements chosen|
|--------|-----------------------|
|node(pop)|``Total Population - Both sexes	``|
|node(macro)|``Share of GDP US$, 2015 prices``|
|edge|``Soya beans``, ``beef and veal preparations nes``| 


(3) Merge the node data (pop and macro)

``` python
node = pd.merge(macro, pop, on=["country", "country_code", "year"], how= "inner")
```

## Analysis
### Density of soybean and beef in world trade

<figure>
    <img src="/assets/density.png" alt="Alt text" />
    <figcaption>Density of soybean and beef</figcaption>
</figure>

Higher density of network refers to a greater average value of the virtual water trade among countries and a closer relationship. In the graph, it shows critically lower tendency in its early 2000s. Infering this from the journal article, financial crisis in 2008 led to the decline of world trade. Then, it increases as recovering severe previous drop for both soybeans and beef. 

### In and Out degree of soybean and beef within Top 7 most frequent countries (2023) 

<figure>
    <img src="/assets/top7_in_out_deg.png" alt="Alt text" />
    <figcaption>In and Out degree of top 7 countries (2023)</figcaption>
</figure>

In 2023, the most latest year in the dataset, the bar graph of in degree and out detree shows the most powerful and active countries in world trade lately. Needless to say, United states of americal was the most active country among top 7 countries displayed on the bar graph. Second place is mainland China, and both US and China is overwhelming absolute power in the world trade. Rest of them are Argentina, Paraguay, Brazil, Canada, and Spain. 

### In and Out degree of soybean and beef within Top 7 most frequent countries

<figure>
    <img src="/assets/Out_degree.png" alt="Alt text" />
    <figcaption>Out degree of top 7 countries (1986 - 2023)</figcaption>
</figure>

For out degree trend, it shows countries with their power at **export**. This graph was introduced from sorting all countries yearly then picked top 7 countries that frequently high ranked in its outdegree. Top 7 countries with the most powerful out degree are US, Japan, mainland China, Canada, Paraguay, Argentina, and Brazil.

Again, US is the most stable in its out degree tendency. Interestingly China is a country which experienced the most rapid growth in recent export degree. Also Brazil, twinkle and disappeared in 2019. 

One noteable thing was most of the countries had their exprot crisis in 2019-2020, which was COVID-19 period. However, Brazil is the one who had their remarkable export degree. According to external news articles, this was because Brazil replaced China's position during China's strict quarantine period in COVID-19 period.

<figure>
    <img src="/assets/In_degree.png" alt="Alt text" />
    <figcaption>In degree of top 7 countries (1986 - 2023)</figcaption>
</figure>

In degree trends shows countries with their degree of **import**. This graph was introduced with the same way as out degree trend analysis. Top 7 countries the most powerful in import were: US, Taiwanese China, Japan, mainland China, Paraguay, Brazil, and Republic of Korea. 

Regarding import degree, most of the countries shows increasing tendency with some noticeable trends. Most of the country, of course, experienced significant drop in their import activity during COVID-19. However, mainland China recovered its import degree increased substantially in 2019. According to external new articles, mainland China increased their import rate to recover demand on their supplies due to the shut-down of factories during pandemic.

Otherwise, Brazil has their increasing tendency on import degree in recent years, but not so stable.

### Simple network of soybean and beef trade

<figure>
    <img src="/assets/Network_of_soybean.png" alt="Alt text" />
    <figcaption>Simple Network of soybean</figcaption>
</figure>

This is a breakdown of each items in world trade. First, this is a directed network graph for soybeans. Most of the countries are well related accross each country. It is possible to observe countries that only imports soybeans. However, this graph is not so clear to look at.

<figure>
    <img src="/assets/Network_of_beef.png" alt="Alt text" />
    <figcaption>Simple Network of beef</figcaption>
</figure>

Now, this is a directed network graph of beef. It shows different posture of its network comparing to soybean network. For Republic of Korea, it shows how many countries that republic of Korea imports from many other countries. However, this graph is not so clear to look at as well. 

### Detailed network analysis of soybean

<figure>
    <img src="/assets/arf_of_soybeans.png" alt="Alt text" />
    <figcaption>Directed network graph of soybean</figcaption>
</figure>

Now, this is more sophisticated network graph with its arf_layout. The color is based on modularity and betweenness. 

What is modularity and betweenness in network theory?
- Modularity

Way to measure how well a network is divided into communities

- Betweenness

Way to measure how well nodes connect social circles. 

This two theory helps to uncover both community structure and key players in gloabal trade networks. Explicitly, US is the most biggest country to trade soybeans. Also, it is possible to see that US is the main player of the world soybean trade domain for all time (1986-2023). Other countries player crucial role in world soybean trade are France, Canada, Taiwanese China, Austria, Germany and Kingdom of the Netherlands.

![World Soybean Trade](https://cdn.statcdn.com/Infographic/images/normal/19148.jpeg)

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

## Explanation of analysis

## Showing codes + result

## Interpretation
