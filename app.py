from flask import Flask, render_template, jsonify, request
from pymongo import MongoClient
import os

app = Flask(__name__)

# MongoDB Atlas connection
client = MongoClient('mongodb+srv://finnbarffmann:ae49zMHWxFTckk6P@cluster0.8bcvv59.mongodb.net/')
db = client['tornado_db']
collection = db['tornado_data']

# -----------------------------------
# Routes for rendering HTML templates
# -----------------------------------

@app.route('/')
def homepage():
    return render_template('homepage.html')

@app.route('/heatmap')
def heat():
    return render_template('heatmap_index.html')

@app.route('/bubble')
def bubble():
    return render_template('bubble_index.html')

@app.route('/tornado_counts')
def tornado_counts():
    return render_template('linemap_index.html')

# -----------------------------------
# API route to provide data for maps
# -----------------------------------

@app.route('/data', methods=['GET'])
def get_data():
    selected_month = request.args.get('month', 'all')
    query = {}

    if selected_month == 'all':
        query['Month'] = {'$exists': True}
    else:
        query['Month'] = int(selected_month)
        
    print(f"Running query: {query}")

    data = list(collection.find(query))
    print(f"Query: {query}")
    print(f"Data count: {len(data)}")

    features = []
    for item in data:
        print(item)  # TEMP debug
        if item.get('Starting Long') is not None and item.get('Starting Lat') is not None:
            feature = {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [item['Starting Long'], item['Starting Lat']]
                },
                "properties": {
                    "year": item.get('Year'),
                    "month": item.get('Month'),
                    "day": item.get('Day'),
                    "date": item.get('Date'),
                    "state": item.get('State'),
                    "magnitude": item.get('Magnitude'),
                    "damages": item.get('Damages')
                }
            }
            features.append(feature)

    print(f"Returned {len(features)} features.")
    return jsonify({"type": "FeatureCollection", "features": features})

# -----------------------------------
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
