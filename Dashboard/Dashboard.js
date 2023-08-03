document.getElementById("botao_vendas").addEventListener("click", function() {
   var vendasMes = document.getElementById("vendasMes").value;
   var vendasTotal = document.getElementById("vendasTotal").value;

   // Criar o gráfico de coluna
   var ctx = document.createElement('canvas');
   ctx.setAttribute('id', 'grafico');
   document.querySelector('.vendas').appendChild(ctx);

   var myChart = new Chart(ctx, {
     type: 'bar',
     data: {
       labels: ['Vendas do Mês', 'Vendas Totais'],
       datasets: [{
         label: 'Vendas',
         data: [vendasMes, vendasTotal],
         backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
         borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
         borderWidth: 1
       }]
     },
     options: {
       scales: {
         y: {
           beginAtZero: true
         }
       }
     }
   });
 });

 document.getElementById("botao_usuarios").addEventListener("click", function() {
   var totalUsuarios = document.getElementById("totalUsuarios").value;
   var usuariosAtivos = document.getElementById("usuariosAtivos").value;
 
   // Criar o gráfico de coluna
   var ctx2 = document.createElement('canvas');
   ctx2.setAttribute('id', 'grafico2');
   document.querySelector('.usuarios').appendChild(ctx2);
 
   var myChart2 = new Chart(ctx2, {
     type: 'bar',
     data: {
       labels: ['Total de Usuários', 'Numero de Usuários Ativos'],
       datasets: [{
         label: 'Usuarios',
         data: [totalUsuarios, usuariosAtivos],
         backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
         borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
         borderWidth: 1
       }]
     },
     options: {
       scales: {
         y: {
           beginAtZero: true
         }
       }
     }
   });
 });

 document.getElementById("botao_visitas").addEventListener("click", function() {
   var totalVisitas = document.getElementById("totalVisitas").value;
   var visitasHoje = document.getElementById("visitasHoje").value;
 
   // Criar o gráfico de coluna
   var ctx3 = document.createElement('canvas');
   ctx3.setAttribute('id', 'grafico3');
   document.querySelector('.visitas').appendChild(ctx3);
 
   var myChart3 = new Chart(ctx3, {
     type: 'bar',
     data: {
       labels: ['Total de Visitas', 'Visitas de Hoje'],
       datasets: [{
         label: 'Visitas',
         data: [totalVisitas, visitasHoje],
         backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
         borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
         borderWidth: 1
       }]
     },
     options: {
       scales: {
         y: {
           beginAtZero: true
         }
       }
     }
   });
 });

 