  //Configurações de seu App Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCvSww5ithRxZmI_EttNvSs4dfG5H_0tns",
    authDomain: "fir-64656.firebaseapp.com",
    databaseURL: "https://fir-64656-default-rtdb.firebaseio.com",
    projectId: "fir-64656",
    storageBucket: "fir-64656.appspot.com",
    messagingSenderId: "161459953503",
    appId: "1:161459953503:web:95f1377fc58afcef1960ea",
    measurementId: "G-3DPDHKSG5Z"
};
  
    // Inicializar Firebase
   firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";
  

  // Adiciona uma nova sala ao banco de dados
  function addRoom() {
    var room_name = document.getElementById("room_name").value;

    firebase.database().ref("/" + room_name).update({
        purpose: "adicionando nome da sala"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

  // Carrega os nomes das salas do banco de dados e exibe na tela
  function getData() {  firebase.database().ref("/").on('value', function(snapshot){ 
    document.getElementById("output").innerHTML = ""; snapshot.forEach(
      function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Nome da Sala - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  // Redireciona para a página de chat com o nome da sala selecionada
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  // Limpa os dados do usuário e redireciona para a página inicial
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  
