import requests
cep =  input("Digite seu cep: ") 
while len(cep) != 8:
    cep = input("Cep invalido, digite novamente: ") 
    
r = requests.get(f'https://viacep.com.br/ws/{cep}/json')

info = r.json()
print(f''' 
Rua: {info['logradouro']},
Cep: {info['cep']},
Bairro: {info['bairro']},
ddd: {info['ddd']},
estado: {info['localidade']},
UF: {info['uf']}''')
 
 