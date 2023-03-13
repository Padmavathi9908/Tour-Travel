import "./TripStyles.css"

import React from 'react'
import TripData from "./TripData"
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"





const Trip = () => {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>Nurtured from the seed of a single great idea - to empower the traveller - MakeMyTrip is a pioneer in India’s online travel industry. Founded in the year 2000 by Deep Kalra, MakeMyTrip came to life to empower the Indian traveller with instant bookings and comprehensive choices.

After consolidating its position in the market as a brand recognised for its reliability and transparency, MakeMyTrip
Spanning much of Israel, the Palestinian territories, and even parts of Jordan, Syria and Lebanon, the Holy Land is an area of the world that holds religious significance for many Jews, Muslims and Christians. If you’d like to tour the region to get a glimpse of this historied destination, 
consider embarking on one of these top Holy Land tour packages.
</p>
<div className="tripcard">
<TripData
image={Trip1}
heading="Trip is indonesia"
text="Indonesia, country located off the coast of mainland Southeast Asia in the Indian and Pacific oceans. It is an archipelago that lies across the Equator and spans a distance equivalent to one-eighth of Earth’s circumference. Its islands can be grouped into the Greater Sunda Islands of Sumatra (Sumatera), Java (Jawa), the southern extent of Borneo (Kalimantan), and Celebes"
/>
<TripData
image={Trip2}
heading="Trip is Malaysia"
text="Indonesia, country located off the coast of mainland Southeast Asia in the Indian and Pacific oceans. It is an archipelago that lies across the Equator and spans a distance equivalent to one-eighth of Earth’s circumference. Its islands can be grouped into the Greater Sunda Islands of Sumatra (Sumatera), Java (Jawa), the southern extent of Borneo (Kalimantan), and Celebes"
/>
<TripData
image={Trip3}
heading="Trip is paris"
text="Indonesia, country located off the coast of mainland Southeast Asia in the Indian and Pacific oceans. It is an archipelago that lies across the Equator and spans a distance equivalent to one-eighth of Earth’s circumference. Its islands can be grouped into the Greater Sunda Islands of Sumatra (Sumatera), Java (Jawa), the southern extent of Borneo (Kalimantan), and Celebes"
/>
</div>

    </div>
  )
}

export default Trip