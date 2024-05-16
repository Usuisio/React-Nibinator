import csv
import json

def csv_to_json(csv_file_path, json_file_path):
    data = []
    
    with open(csv_file_path, encoding='utf-8') as csvf:
        csv_reader = csv.DictReader(csvf)
        
        for row in csv_reader:
            name = row.pop('名前')
            answers = {key: bool(int(value)) if value else False for key, value in row.items()}
            data.append({'name': name, 'answers': answers})
    
    with open(json_file_path, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, ensure_ascii=False, indent=4))

csv_file_path = 'ニビネイター - シート1.csv' # CSVファイルのパス
json_file_path = 'src/characterData.json'  # 変換後のJSONファイルの保存パス

csv_to_json(csv_file_path, json_file_path)