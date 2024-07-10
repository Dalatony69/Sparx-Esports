from flask import Flask, request, jsonify
import mysql.connector
from mysql.connector import Error
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

db_config = {
    'host': '127.0.0.1',
    'database': 'sparx_schema',
    'user': 'root',
    'password': 'Elsharkawy'
}

def get_db_connection():
    try:
        connection = mysql.connector.connect(
            host=db_config['host'],
            database=db_config['database'],
            user=db_config['user'],
            password=db_config['password']
        )
        if connection.is_connected():
            print("Successfully connected to the database")
            return connection
        else:
            print("Failed to connect to the database")
            return None
    except Error as e:
        print(f"Error: {e}")
        return None
    

def count_users():
    try:
        connection = get_db_connection()
        if connection is None:
            return jsonify({'error': 'Database connection failed'}), 500

        cursor = connection.cursor()
        cursor.execute("SELECT COUNT(*) FROM users")
        row = cursor.fetchone()
        cursor.close()
        connection.close()
        
        return row[0] if row else 0
    
    except Error as e:
        print(f"Error: {e}")
        return 0

@app.route('/CreateNewUser', methods=['POST'])
def create_user():

    data = request.json

    if not data:
        return jsonify({'error': 'No input data provided'}), 400

    try:
        connection = get_db_connection()
        if connection is None:
            return jsonify({'error': 'Database connection failed'}), 500

        cursor = connection.cursor()
        id = count_users() + 1

        sql = "INSERT INTO user (user_id, username, passcode,gender) VALUES (%s, %s, %s, %s)"
        values = (id,data['Name'], data['Passcode'], data['Gender'])
        
        cursor.execute(sql, values)
        connection.commit()
        cursor.close()
        connection.close()
        
        return jsonify({'message': 'User created successfully'}), 201
    except Error as e:
        print(f"Error: {e}")
        return jsonify({'error': 'Failed to create user'}), 500




if __name__ == '__main__':
    app.run(debug=True , port=5000)