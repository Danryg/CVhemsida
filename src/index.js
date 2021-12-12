import { initializeApp} from 'firebase/app';
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB1iRiLGNi0O3QQFSaHhRe20MBAQ6BcW6c",
    authDomain: "cvwebsite-76bb4.firebaseapp.com",
    projectId: "cvwebsite-76bb4",
    storageBucket: "cvwebsite-76bb4.appspot.com",
    messagingSenderId: "951305167636",
    appId: "1:951305167636:web:c819b8fb1210b16d895801",
    measurementId: "G-WP580QMN8B"
  };

  initializeApp(firebaseConfig)


  const db = getFirestore();

  const colRef = collection(db, 'projects')
  let projects = []
 
  getDocs(colRef).then((snapshot) =>{
      
      snapshot.docs.forEach((doc) =>{
          projects.push({...doc.data(), id:doc.id})
          
      }) 

      projects.forEach(project =>{
         
        $('#projectsList').append("<li id='project'> <div id='projectinformation'><h3 id='projecttitle'>"+ project.title +"</h3> <p id='projectdescription'>"+ project.desc +"</p></div><div id='prijectpicture' style='background-image: url(../pictures/"+project.imagename+".png)'></div></li>");
        
      })
      console.log(projects);
  })
  .catch(err =>{
      console.log(err.message);
  })

  var projectsWindow = $('#projects');
        
        
  $(document).ready(function(){
    projectsWindow.hide();

    
  
      
  });

  $('#projectsbutton').on('click', function(){
    projectsWindow.fadeIn(200);
  });

  $('#close').on('click', function(){
    projectsWindow.fadeOut(200);
  });






