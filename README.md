# 🌪️ Tornado Damage Dashboard

An interactive web dashboard visualizing tornado events across the United States in 2023.

🔗 **Live App**: [https://tornado-damage-dashboard.onrender.com/](https://tornado-damage-dashboard.onrender.com/)

---

## 📊 Project Overview and Purpose

As global warming becomes an increasingly looming threat, severe weather events are on the rise. To identify areas in the country where tornadoes are more frequent and more damaging, we created a website that shows various charts and maps of tornado data in the United States from 2023. This project uses real-world geospatial data, Flask, and Leaflet.js to provide interactive visualizations.

---

## 🧭 How to Use the Site

Users can access our main homepage and select from the following three interactive visualizations:

- **Heatmap** of tornado damage intensity by location
- **Bubble Map** representing tornado magnitude
- **Line Chart** of tornado counts by day/month

Each page includes a month filter to help narrow down results.

> The site is designed to be intuitive and user-friendly with no instructions needed.

---

## 🧑‍💻 Developer Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/fbarffmann/tornado-damage-dashboard.git
   cd tornado-damage-dashboard
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **MongoDB Setup**

   - Import `tornado_data.json` into your MongoDB instance.
   - Example command:
     ```bash
     mongoimport --uri "your_mongodb_uri_here" --db tornado_db --collection tornado_data --file tornado_data.json --jsonArray
     ```

4. **Run the Flask app**
   ```bash
   python app.py
   ```
   - Navigate to `http://localhost:5000`

---

## 🗺️ Screenshots

### Tornado Counts by Day
![Tornado Counts by Day](visuals/Tornado_Counts_by_Day.png)

### Tornado Counts by Month
![Tornado Counts by Month](visuals/Tornado_Counts_by_Month.png)

### Tornado Damages Heatmap
![Tornado Damages](visuals/Tornado_Damages.png)

### Tornado Magnitudes Bubble Map
![Tornado Magnitudes](visuals/Tornado_Magnitudes.png)

---

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Leaflet.js, Turf.js
- **Backend**: Python, Flask
- **Database**: MongoDB Atlas
- **Deployment**: Render.com
- **Data Format**: GeoJSON

---

## 🌐 Deployment

- Hosted on [Render](https://render.com/)
- Automatically redeploys on push to GitHub
- Flask is configured to run using:
  ```python
  app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
  ```
- MongoDB Atlas URI is hardcoded or can be passed as an environment variable

---

## 🧠 Ethical Considerations

We used ethically sourced, public data from the U.S. government. While the content involves natural disasters, the visualizations are intended to educate and inform, not sensationalize.

---

## 📚 Data Source

- **Storm Prediction Center**:  
  [https://www.spc.noaa.gov/wcm/#data](https://www.spc.noaa.gov/wcm/#data)

---

## 📖 Code References

- [Flask](https://flask.palletsprojects.com/en/3.0.x/)
- [PyMongo](https://pymongo.readthedocs.io/en/stable/)
- [Flask with MongoDB](https://www.mongodb.com/resources/products/compatibilities/setting-up-flask-with-mongodb)
- [Leaflet.js](https://leafletjs.com/)
- [Turf.js](https://turfjs.org/)
- [Turf.js with Leaflet.js](https://stackoverflow.com/questions/65320098/using-turf-with-leaflet)
- [JavaScript with Flask API](https://realpython.com/flask-javascript-frontend-for-rest-api/)
- [HTML](https://www.w3schools.com/html/default.asp)

---

## 👤 Author

**Finn Brennan Arffmann**  
[GitHub](https://github.com/fbarffmann) | [LinkedIn](https://www.linkedin.com/in/fbarffmann/)
