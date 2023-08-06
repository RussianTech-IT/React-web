from flask import jsonify, request, send_file
from mysql.connector import connect



"""
RESOURCES TABLE                                                              ? 
|----|-------|-----------------|-------|-------------|------------------|----------|
| id | label | topic           | type  | file path   | icon_path        | acces    |
|----|-------|-----------------|-------|-------------|------------------|----------|
| 1  | python| python;begin    | book  | python.pdf  | icons/python.png | all      |
| 2  | c/c++ | c/c++;middle    | video | c_c++.mp4   | icons/c_c++.png  | single   |
| 3  | c#    | c#;proffesional | link  | https://... | icons/c#.png     | c#_group |
| ...| ...   | ...             | ...   | ...         | ...              | ...      |
|----|-------|-----------------|-------|-------------|------------------|----------|

Now resources table

id | label | topic | author | file_path | icon_path |

"""


use = "USE data;"
topic_search = "SELECT * FROM resource WHERE topic LIKE '%{}%'"
label_search = "SELECT * FROM resource WHERE label LIKE '%{}%'"
author_search = "SELECT * FROM resource WHERE author LIKE '%{}%'"
id_search = "SELECT * FROM resource WHERE id LIKE {}"
describe = "DESCRIBE resource"

def main():
    args = dict(request.args)
    return jsonify(args)

def search():
    args = dict(request.args)

# get file path from db
def get():
    connection = connect(host="db", user="root",password="12345")
    args = dict(request.args)

    topic = args.get("topic")
    label = args.get("label")
    author = args.get("author")
    ident = args.get("id")

    if topic:
        with connection.cursor() as cursor:
            # return jsonify(lang_search.format(str(lang)))
            cursor.execute(use)
            cursor.execute(topic_search.format(str(topic)))
            result = cursor.fetchall()
            return jsonify(result)
    
    if label:
        with connection.cursor() as cursor:
            # return jsonify(lang_search.format(str(lang)))
            cursor.execute(use)
            cursor.execute(label_search.format(str(label)))
            result = cursor.fetchall()
            return jsonify(result)
    if author:
        with connection.cursor() as cursor:
            # return jsonify(lang_search.format(str(lang)))
            cursor.execute(use)
            cursor.execute(author_search.format(str(author)))
            result = cursor.fetchall()
            return jsonify(result)
    if ident:
        with connection.cursor() as cursor:
            # return jsonify(lang_search.format(str(lang)))
            cursor.execute(use)
            cursor.execute(id_search.format(str(ident)))
            result = cursor.fetchall()
            return jsonify(result)

    else:
        return jsonify({"Error":"wrong request"})




# get file from disk
def file():
    args = dict(request.args)

    path = args.get("path")
    if path:
        final_path = "/db/"+path
        return send_file(final_path)
    else:
        return jsonify({"Error": "wrong request"})
