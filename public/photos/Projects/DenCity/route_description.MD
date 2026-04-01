Header Caption: 
Do you love crowds? Perhaps you seek to get away. With DenCity, you can know where the people are!

Links: 
https://github.com/BorowskiKacper/parkingsniffer
https://devpost.com/software/dencity


DenCity Statement (Top right)

DenCity is a crowd-density telemetry platform designed to solve urban crowd awareness challenges. By leveraging decentralized Bluetooth data collection, it provides real-time heatmaps for urban planners, commuters, hobbyists, and pedestrians seeking to navigate or avoid high-density areas.
User-opted telemetry is processed at the edge, cleaned of signal noise, and synced to a Supabase instance with a 30-minute TTL (Time-To-Live) for privacy-first, ephemeral storage.
During the deployment phase, we performed ground-truth validation by collecting live Bluetooth telemetry and physical manual headcounts in various city locations.






///Commentary not to include

DenCity is a hackathon project aimed to solve the Urban Life challenge of "Where are the People?". With a map that is open to all users (whether they collect data for it or not), DenCity provides the world a fully data-gathered and processed project for the needs of map-hobbiests, professionals, and anybody who wants crowds or wishes to avoid them.  

This project gathers data by storing user bluetooth telemetry. Opted-in users simply live their day-to-day lives as their phone collects two pieces of information: their approximate location, the amount of nearby devices. This data is cleaned to remove noise, and then stored in the supabase database for 30 minutes.

During the hackathon, the team was able to gather and validate bluetooth data by surveying the hackathon-surrounding-area.