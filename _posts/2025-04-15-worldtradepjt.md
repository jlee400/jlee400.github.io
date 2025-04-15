---
layout: single
title: "[Data Science Project] Who Controls the World Trade of Soybeans and Beef? A NetworkX Analysis in Python"
author: "Juhyun Lee"
toc: true
toc_sticky: true
categories: project
comments: true
---

## Project Description

This project was launched from individual research in the George Mason University course CSI 500, Computational Science Tools. Inspired by the academic journal _Social network analysis of virtual water trade among major countries in the world_, I constructed this project to explore how to academically analyze world data using the `networkx` package in Python. 

## Journal Article Summary

### [Deng et al. (2021)] Social Network Analysis of Virtual Water Trade Among Major Countries in the World

This study observes the virtual water trade strategy among 19 major countries from 2006 to 2015. The virtual water strategy refers to countries and regions with water scarcity replacing their own production. Using a _Multi-regional input-output model_ and _Social network analysis using data sources from [Eora Global MRIO](http://www.worldmrio.com)_, the study thoroughly explains how water trade operates throughout the world.

### Research Question and Research Gap

This study aims to understand how global virtual water trade is structured using network theory. Even though several studies had been conducted previously, research gaps remained—specifically, the inconvenient calculation of the volume of industrial and service industry products due to their complex processes.

### Method

#### 1. Input-Output Model

This method can be divided into a single-region input-output model and a multi-regional input-output model based on the number of research areas. 

Both models follow the same steps. The input-output model uses water use data for each industry, divided by total output, to obtain the <span style="background-color:#FFE6E6"> coefficient of direct water use</span>.

This coefficient is multiplied with the <span style="background-color:#E6E6FA">_Leontief inverse matrix_</span>. Finally, import and export data from the input-output table is used to obtain virtual water trade volume in various industries.

#### 2. Multi-Regional Input-Output Model

Let \( w \) be the direct water coefficient:

$$
w^r_i = \frac{W^r_i}{X^r_i}
$$

- \( w^r_i \): Virtual water usage of country \( r \)'s industry \( i \)  
- \( W^r_i \): Total water usage of country \( r \)'s industry \( i \)  
- \( X^r_i \): Gross output of country \( r \)'s industry \( i \)  
- \( r \): The first country (region)  
- \( i \): Primary industry

The world input-output table balance equation from EORA:

$$
AX + Y = X
$$

This can be rewritten as:

$$
X = (I - A)^{-1}Y = LY
$$

Multiplying the diagonal matrix \( \hat{W} \), the Leontief inverse matrix \( L \), and final use matrix \( Z \), we obtain:

$$ 
H = \hat{W} L Z
$$

After further aggregating each country by industry, we derive the \( m \times m \) virtual trade matrix \( T \).  
The diagonal elements of \( T \) represent virtual water consumption within a country, and off-diagonal elements represent import/export trade.

#### 3. Network Characteristics

- **Density**:

$$
D = \frac{\sum_{r \ne s,\, r=1}^{m} \sum_{s=1}^{m} t^{rs}}{m(m - 1)}
$$

- **Asymmetry**:

$$
S = \frac{ \sum_{r \ne s,\, r=1}^{m} \sum_{s=1}^{m} \left| t^{rs} - t^{sr} \right| }{ m(m-1) }
$$

- **Out-Degree**:

$$
OD = \sum_{s \ne r,\, s=1}^{m} t^{rs}
$$

- **In-Degree**:

$$
ID = \sum_{r \ne s,\, r=1}^{m} t^{rs}
$$

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

---

## Data Introduction

According the the article previously explained, this project follows similar structure, but compare only two different trading product, soybeans and beef. 

> According to research from the soybean checkoff, U.S. beef operations use over 1.3 million tons of soybean meal every year. That’s the meal from about 55 million bushels of U.S. soybeans. One of those operators is Matt Widboom, from the southwestern corner of Minnesota.

“We have used soy meal as the protein supplement for our cattle since we started raising cattle in the 1930s,” says Widboom. “The quality of the feed is very important to our product, and using soy meal allows them to produce lean meat.”

Grinding the soybeans into meal makes it easier on the cattle’s digestive system. _[The soy hopper](https://unitedsoybean.org/hopper/beef-bulking-up-with-soy/)_



### Data sources

![FAO](https://github.com/user-attachments/assets/3b205637-6b56-40f7-9791-c4892f25646d)

> The Food and Agriculture Organization (FAO) is a specialized agency of the United Nations that leads international efforts to defeat hunger. _FAO official website_

> FAOSTAT provides free access to food and agriculture data for over 245 countries and territories and covers all FAO regional groupings
from 1961 to the most recent year available. _FAO STAT Official Website_

The data used for this project was downloaded from _[FAOSTAT]((https://www.fao.org/faostat/en/#data))_.
This project used _Trade_DetailedTradeMatrix_E_All_Data_(Normalized).csv_ data for edge, and _Macro-Statistics_Key_Indicators_E_All_Data_(Normalized).csv_ and _Population_E_All_Data_(Normalized).csv_ for node.


### Major characteristics of the data 

1. **The edge data**  
   Contains information about import and export activities.  
   - Reporter Country Code  
   - Reporter Countries  
   - ...

2. **The node data**

   2-1. **Population data**  
   Same columns as edge data.

   2-2. **Macro data**  
   Same columns as edge data.


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
---

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

Now, this is more sophisticated network graph with its arf_layout. The color is based on modularity and betweenness centrality. 

What is modularity and betweenness centrality in network theory?
- **Modularity**

Way to measure how well a network is divided into communities.

- **Betweenness**

Way to measure how well nodes connect social circles. 

This two theory helps to uncover both community structure and key players in gloabal trade networks. Explicitly, US is the most biggest country to trade soybeans. Also, it is possible to see that US is the main player of the world soybean trade domain for all time (1986-2023). Other countries player crucial role in world soybean trade are France, Canada, Taiwanese China, Austria, Germany and Kingdom of the Netherlands.


![World Soybean Trade](https://cdn.statcdn.com/Infographic/images/normal/19148.jpeg)

Observing this infographic, it is possible to see that US is the most biggest country in soybeans trade. However, there is a rapid increase in Brazil that over took US. It is not reflected on the network graph as it is so rapidly increased in short period while the graph shows cumulative interactions.

<figure>
    <img src="/assets/Trade_volume_of_soybeans.png" alt="Alt text" />
    <figcaption>Network graph reflected its weight</figcaption>
</figure>

Next visualization reflects the volume of soybean trade with width of the edge. US is obviously the most powerful country in soybean trade. Countries in blue color are having meaningful and explicit interaction in this graph.


### Detailed network analysis of beef

<figure>
    <img src="/assets/arf_of_Beef.png" alt="Alt text" />
    <figcaption>Directed network graph of beef</figcaption>
</figure>

This is network analysis of beef and reflecting the edge width of its trade volume. In this graph, it is possible to see that european countries, France, German, Italy, Netherland, United Kingdom are having densed relationship each other with the beef trade. Globally, US, United Arab Emirates, Canada, Philippines, Australia, Jordan, and New Zealand have bigger size of node. It is very interesting to see that geographically close countries like {US, Canada}, {Austrailia, New Zealand, Philippines}, and {United Arab Emirates, Jordan} are interacting each other in trade of beef.

![World Beef Trade](https://cdn.statcdn.com/Infographic/images/normal/19122.jpeg)

Along with this infographic, EU is the country exporting and importing beef each other. Also, countries like Brazil, India US, Australia, Canada are big hands in world beef trade. This is the statistic infographic only regarding 2023, so it may be different from what the network graph shows.

### Network of world soybean and beef trade
<figure>
    <img src="/assets/TradeVolume of soybeans and beef.png" alt="Alt text" />
    <figcaption>Network graph of trade volume of both soybeans and beef</figcaption>
</figure>

The network of integrated world soybean and beef trade shows how the world trade on those items are forming their own communities. 

- Green colored node countries

France, United Kindom of Great Britain and Northern Ireland, Serbia, Netherlands, Romania, Belgium, Portugal, Greece, Austria, Sweden, Spain, Italy, Szechia, etc.

Those are European countires, and this shows how they are connected through world trade, not only in continent.

- Blue colored node countries

US, mainland China, Brazil, Canada, Taiwanese China, Thailand, Philippines, Argentina, Japan, India, Argentina, Hong Kong, Guatemala, etc.

Those are Asian, American countries, and this shows how Asia and American countries are mainstream and broad community in world trade.

- Brown colored countries

United Arab Emirates, Kazakhstan, Turkiye, Jordan

Those are middle east countries, and this shows how those locally close countries interact by world trade on soybeans and beef.

- Grey colored countries

South Africa, Botswana, Zambia, etc.

Those are mostly african countries, and this shows how they are connected within one continent, Africa. However, that community is not so mainstream, more close to outsiders.

### Interactive soybean and beef world trade flow visualization

<iframe src="/assets/soybean_trade_map.html" width="100%" height="600px"></iframe>

This is Global soybean trade interactive network graph. You can hover for country names, zoom in and out to observe. 

<iframe src="/assets/beef_trade_map.html" width="100%" height="600px"></iframe>


This is Global beef trade interactive network graph. You can hover for country names, zoom in and out to observe. 

Look through how world soybeans and beef trade are different in volume by region, or continent. 

---

## Explanation of Analysis

This project used weighted directed graphs to represent soybean and beef trade networks between countries. Key network metrics such as **in-degree**, **out-degree**, **betweenness centrality**, and **modularity** were used to analyze the structural importance of countries in global trade.

- **In-degree**: Total imports from other countries  
- **Out-degree**: Total exports to other countries  
- **Betweenness centrality**: A country's role as a bridge in trade  
- **Modularity**: Communities or clusters within the trade network

Trade networks were constructed from FAO bilateral trade data and visualized using both `networkx` (static) and `plotly` (interactive) tools.

---

## Showing Codes + Result

If you want to check the full code PDF for this project, visit: [Soybean_beef_networkx_project](https://github.com/jlee400/CSI500_projects/blob/main/Post1.pdf)

## Interpretation

From the out-degree and in-degree trends, we observe that:

- **United States** and **main land China** have consistently traded very actively among several years.
- In recent years, **Brazil** is rising country in world trade in both import and export.
- **Euroean Countries**, **Asian, American Countries**, **Middle East Countries**, **African Countries** are clustered in their trade along with geographic and political distance.
- For **soybeans**, **US**, **main land China**, **France**, **Taiwanese China** and **Canada** are notable 5 countries in their soybean trade.
- For **beef**, **US**, **UAE**, **Philippines** **Australia**, and **New Zealand** are notable 5 countries in their beef trade.

These results align with global economic trends and indicate how geopolitical or environmental factors may shift trade flows.

---

## Best Regards

Thanks for making it all the way to the end!  
If you're fascinated by how **Python and NetworkX** can uncover the **hidden structure of global trade**, you're one of us.  

**Got questions?** Curious about another product’s trade network?  
Drop a ``comment`` below and I might cover it next time (yes, even soybeans and beef 🫛🐂).

And hey — if you enjoyed the analysis, **click the heart🩷**!  
It really motivates me to dive deeper into the data ocean.

Until next time, data nerds! 📊🐍

![드디어 끝났다..](https://velog.velcdn.com/images/bje0416/post/74bc4bac-9cfe-4cd5-bf46-603aae6fd3cc/image.gif)
