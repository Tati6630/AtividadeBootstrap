let nomes = [];
let datas = [];
let idades = [];
let cidades = [];
let estados = [
	'AC',
	'AL',
	'AP',
	'AM',
	'BA',
	'CE',
	'DF',
	'ES',
	'GO',
	'MA',
	'MS',
	'MT',
	'MG',
	'PA',
	'PB',
	'PR',
	'PE',
	'PI',
	'RJ',
	'RN',
	'RS',
	'RO',
	'RR',
	'SP',
	'SC',
	'SE',
	'TO',
];
let cpf = [];
let senhas = [];
let confirmaSenhas = [];

function cadastro() {
	let nome = document.getElementById('nome').value;
	let nascimento = document.getElementById('nascimento').value;
	let idade = document.getElementById('idade').value;
	let cidade = document.getElementById('cidade').value;
	let estado = document.getElementById('estado').value;

	if (typeof nome != 'string' || !nome) {
		textoModal('Digite um NOME válido');
		return;
	}

	if (typeof nascimento != 'string' || !nascimento) {
		textoModal('Digite a data no formato **/**/**** e não deixe o campo em branco!');
		return;
	}

	if (isNaN(idade) || idade < 0) {
		textoModal('Digite uma IDADE válida');
		return;
	}

	if (typeof cidade !== 'string' || !cidade) {
		textoModal('Digite um município válido');
		return;
	}

	if (estados.indexOf(estado) != -1) {
		textoModal('Cadastro realizado com sucesso');
	}
	nomes.push(nome);
	datas.push(nascimento);
	idades.push(idade);
	cidades.push(cidade);
}

function textoModal(texto){
    document.getElementById('textoModal').innerHTML = texto
}