from flask import Flask
from models import init_db

app = Flask(__name__)

@app.route('/init-db')
def init_db_route():
    init_db()
    return "Database initialized!"

if __name__ == '__main__':
    app.run(debug=True)
