angular.module('coursin')
	.controller('CursosController', function ($scope, cursos) {
		$scope.cursos = [
			{
				"title": "Consultoria Presencial de Marketing",
				"category": "Mercado e vendas",
				"description": "Se você possui um pequeno negócio e deseja melhorar o desempenho da sua gestão, planejar estratégias para vencer a atual crise econômica e está em busca de um trabalho personalizado, conheça a Consultoria Empresarial do Sebrae.",
				"price": 150,
				"start": "2017-10-12T18:00:00-03:00",
				"finish": "2017-10-12T19:30:00-03:00",
				"consultant": {
					"avatar": "https://randomuser.me/api/portraits/women/86.jpg",
					"name": "Melinda Perez"
				},
				"address": {
					"street": "Av. Barão Homem de Melo",
					"number": 329,
					"neighborhood": "Nova Granada",
					"city": "Belo Horizonte"
				}
			},
			{
				"title": "Oficina MEI - Aprenda a administrar o seu negócio",
				"category": "Finanças",
				"description": "As Oficinas SEI do Sebrae ensinam os principais pontos para a gestão de um negócio eficiente e lucrativo para o Microempreendedor Individual.",
				"price": 30,
				"start": "2017-06-02T15:00:00-03:00",
				"finish": "2017-06-02T16:30:00-03:00",
				"consultant": {
					"avatar": "https://randomuser.me/api/portraits/women/85.jpg",
					"name": "Daniela Barbosa Martins"
				},
				"address": {
					"street": "Av. Barão Homem de Melo",
					"number": 329,
					"neighborhood": "Nova Granada",
					"city": "Belo Horizonte"
				}
			},
			{
				"title": "Curso Empretec",
				"category": "Mercado e vendas",
				"description": "O Empretec é uma metodologia da Organização das Nações Unidas - ONU voltada para o desenvolvimento de características de comportamento empreendedor e para a identificação de novas oportunidades de negócios, promovido em cerca de 34 países.",
				"price": 1680,
				"start": "2017-11-04T08:00:00-03:00",
				"finish": "2017-11-04T18:00:00-03:00",
				"consultant": {
					"avatar": "https://randomuser.me/api/portraits/women/84.jpg",
					"name": "Virgínia Figueiredo"
				},
				"address": {
					"street": "Av. Barão Homem de Melo",
					"number": 329,
					"neighborhood": "Nova Granada",
					"city": "Belo Horizonte"
				}
			},
			{
				"title": "Oficina Como ser MEI na Prática",
				"category": "Empreendedorismo",
				"description": "Sensibilizar o potencial empresário para os benefícios e deveres fa formalização e orientar sobre a prática do preenchimento dos formulários ideal para pessoas que são formalizadas na condição de Microempreendedor Individual ou que pretendem realizar a formalização.",
				"price": 0,
				"start": "2017-05-26T08:30:00-03:00",
				"finish": "2017-05-26T12:30:00-03:00",
				"consultant": {
					"avatar": "https://randomuser.me/api/portraits/women/80.jpg",
					"name": "Elaine Rodrigues Gomes"
				},
				"address": {
					"street": "Praça Central do Brasil",
					"number": 198,
					"neighborhood": "",
					"city": "Curvelo"
				}
			},
			{
				"title": "Consultoria Presencial Financeira para Empresários",
				"category": "Finanças",
				"description": "Elaboração do Plano de Negócio, custos, planejamento e organização financeira, preço de venda, linhas de crédito, entre outros.",
				"price": 60,
				"start": "2017-06-03T14:31:00-03:00",
				"finish": "2017-06-03T18:00:00-03:00",
				"consultant": {
					"avatar": "https://randomuser.me/api/portraits/men/79.jpg",
					"name": "Sebastião Moreira"
				},
				"address": {
					"street": "Rua João César de Oliveira",
					"number": 1434,
					"neighborhood": "Eldorado",
					"city": "Contagem"
				}
			},
			{
				"title": "Orientação de Legislação Tributária",
				"category": "Leis e normas",
				"description": "Orienta o MEI e os pequenos negócios sobre legislação tributária. Conheça os princípios e termos mais comuns das legislação em vigor e esteja em dia com o planejamento da sua empresa.",
				"price": 50,
				"start": "2017-06-09T13:00:00-03:00",
				"finish": "2017-06-09T14:30:00-03:00",
				"consultant": {
					"avatar": "https://randomuser.me/api/portraits/men/79.jpg",
					"name": "Sebastião Moreira"
				},
				"address": {
					"street": "Av. Barão Homem de Melo",
					"number": 329,
					"neighborhood": "Nova Granada",
					"city": "Belo Horizonte"
				}
			}
		]
		// cursos.listarCursos().then(function (data) {
		// 	$scope.cursos = data;
		// }, function (erro) {
		// 	alert('erro ao tentar obter a lista de cursos.');
		// });
	});