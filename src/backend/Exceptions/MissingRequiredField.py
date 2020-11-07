from flask import jsonify

def checkFields(content, fields):
    try:
        for field in fields:
            if (content[field]==""):
                return field
    except KeyError:
        return field
    return False

def checkFieldsReturnAll(content, fields):
    i = 0
    all_fields = []
    for f in fields:
        all_fields.append(checkFields(content, fields[i:]))
        i += 1
    return all_fields
