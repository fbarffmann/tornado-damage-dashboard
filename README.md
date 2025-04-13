# Tornado Damage Dashboard

Built an interactive Flask dashboard to visualize the location, magnitude, and damage of tornadoes across the United States in 2023. Used Leaflet.js for dynamic maps and MongoDB to store processed tornado data.

## Tools & Technologies Used

- Python
- Flask
- MongoDB
- Pandas
- Leaflet.js
- JavaScript
- HTML/CSS
- Heroku / Render (Deployment)

## File Structure

```text
.
├── app.py                             # Flask app
├── Mongo Setup.ipynb                 # MongoDB database setup
├── Data Cleaning.ipynb               # Tornado data cleaning & transformation
├── Resources/
│   ├── tornado_cleaned.csv           # Cleaned tornado data
│   └── 2023_tornado_activity.csv     # Raw dataset
├── static/js/                        # JavaScript logic for maps
├── templates/                        # HTML templates
├── visuals/                          # Visual assets
```

## Skills Demonstrated

- Flask application development
- API routes for serving JSON data
- Interactive geospatial visualizations with Leaflet.js
- Data cleaning and structuring for NoSQL (MongoDB)
- Deployment-ready project structure

## Key Findings

- Analyzed 1,092 tornado events in 2023.
- Mapped tornado locations with interactive heatmaps and bubble maps.
- Magnitudes ranged from EF0 to EF5, with damages exceeding $100 million for several events.
- Identified damage hotspots in tornado-prone states like Oklahoma, Texas, and Alabama.
- Enabled users to explore tornado frequency by date and severity through a line chart.
