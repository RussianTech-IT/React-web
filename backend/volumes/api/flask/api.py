from flask import jsonify, request, send_file
import json
from fuzzywuzzy import fuzz


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

def main():
    args = dict(request.args)
    return jsonify(args)

def search():
    args = dict(request.args)

# get file path from db
def get():
    args = dict(request.args)

    topic = args.get("topic")
    label = args.get("label")
    author = args.get("author")
    ident = args.get("id")
    source = args.get("source")

    if source == "external":
        db = json.load(open("/db/db.json"))["external"]
        lst = []
        if topic != "":
            for i in db:
                top = i["topic"]
                if fuzz.ratio(top,topic) > 30:
                    lst.append(i)
        
        if label:
            for i in db:
                top = i["label"]
                if fuzz.ratio(top,label) > 30:
                    lst.append(i)
        if author:
            for i in db:
                top = i["author"]
                if fuzz.ratio(top,author) > 30:
                    lst.append(i)
        if ident:
            for i in db:
                top = i["id"]
                if fuzz.ratio(str(top),ident) > 30:
                    lst.append(i)

        return jsonify(lst)

    elif source == "internal":
        db = json.load(open("/db/db.json"))["internal"]
        lst = []
        if topic != "":
            for i in db:
                top = i["topic"]
                if fuzz.ratio(top,topic) > 30:
                    lst.append(i)
        
        if label:
            for i in db:
                top = i["label"]
                if fuzz.ratio(top,label) > 30:
                    lst.append(i)
        if author:
            for i in db:
                top = i["author"]
                if fuzz.ratio(top,author) > 30:
                    lst.append(i)
        if ident:
            for i in db:
                top = i["id"]
                if fuzz.ratio(str(top),ident) > 30:
                    lst.append(i)

        return jsonify(lst)

    






# get file from disk
def file():
    args = dict(request.args)
    path = args.get("path")
    path1 = "/db/"+path
    return send_file(path1)
    
