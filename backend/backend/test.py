import json;

def test(request):
    print('!!!!!!!!!!!!!!!!!!!')    
        
    msg = json.loads(request.get('philosophy')); 
    print(msg);

    return msg;