import React from 'react'
import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain5 from "../assets/5.jpg"
import Mountain8 from "../assets/8.jpg"
import DestinationData from './DestinationData'
import "./DestinationStyles.css"
const Destination = () => {
  return (
    <div className="Destination"> 
    <h1>Popular Destination</h1>
    <p>Tours give you the opportunity  to see a lot,within a time frame</p>
   <DestinationData
   className="first-des"
   heading="Taal Volcano,Batangas"
   text="Luzon, largest and most important island of the Philippines. It is the site of Manila,
   the nation’s capital and major metropolis, and of Quezon City.
    Located on the northern part of the Philippine archipelago, it is bounded by the Philippine Sea (east), Sibuyan Sea (south), and the South China Sea (west). To the north, the Luzon Strait separates Luzon from Taiwan.Most of the island, a roughly rectangular area, lies north of Manila in a north-south orientation, while south of Manila are two peninsulas, Batangas and Bicol, which extend south and southeast, giving Luzon its irregular shape. Luzon’s coastline, more than 3,000 miles (5,000 km) long,
     is indented by many fine bays and gulfs, including Lingayen Gulf and Manila Bay on the west and Lamon Bay and Lagonoy Gulf on the east. Luzon represents about one-third of the land area of the Philippines, and its greatest dimensions are 460 by 140 miles (740 by 225 km). There is a predominant north-south trend in its rivers and relief features. The important ranges are the Cordillera Central in the north; the Sierra Madre, following much of the east coast; and the Zambales Mountains on the central-western coast.
      Mount Pulog (9,612 feet [2,930 metres]) is the island’s highest peak. Isolated volcanic cones such as the near-perfect and still-active Mayon Volcano (8,077 feet [2,462 metres]) are on Bicol Peninsula. Taal Lake is a crater lake, and Laguna de Bay is the largest (344 square miles [891 square km]) lake in the Philippines. The major rivers are Cagayan, Abra, Agno, Pampanga, and Bicol!."
   img1={Mountain1}
   img2={Mountain2}
   />
    <DestinationData
      className="first-des-reverse"
   heading="Mt.Daguldul,Batangas"
   text="According to Census 2011 information the location code or village code of Duldula village is 434117. Duldula village is located in Duldula tehsil of Jashpur district in Chhattisgarh, India. It is situated 28km away from district headquarter Duldula. Duldula is the sub-district headquarter of Duldula village. As per 2009 stats, Duldula village is also a gram panchayat.

   The total geographical area of village is 1628.4 hectares. Duldula has a total population of 4,354 peoples, out of which male population is 2,072 while female population is 2,282. Literacy rate of duldula village is 70.23% out of which 72.68% males and 68.01% females are literate. There are about 992 houses in duldula village. Pincode of duldula village locality is 496334.
   
   When it comes to administration, Duldula village is administrated by a sarpanch who is elected representative of the village by the local elections. As per 2019 stats, Duldula village comes under Kunkuri assembly constituency & Raigarh parliamentary constituency. Kunkuri is nearest town to duldula for all major economic activities, which is approximately 25km away.
      Mount Pulog (9,612 feet [2,930 metres]) is the island’s highest peak. Isolated volcanic cones such as the near-perfect and still-active Mayon Volcano (8,077 feet [2,462 metres]) are on Bicol Peninsula. Taal Lake is a crater lake, and Laguna de Bay is the largest (344 square miles [891 square km]) lake in the Philippines. The major rivers are Cagayan, Abra, Agno, Pampanga, and Bicol!."
   img1={Mountain5}
   img2={Mountain8}
   />
    </div>
    
  )
}

export default Destination