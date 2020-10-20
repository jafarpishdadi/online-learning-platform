from flask import jsonify

def checkFields(content, fields):
    try:
        for field in fields:
            if (content[field]==""):
                return field
    except KeyError:
        return field
    return False
