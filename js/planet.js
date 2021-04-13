// // Message de début 

// console.log("Ready for use !");

// //////// ******************************************************************** ///////

// // -- CONSTANTE À GÉRER PAR LA SUITE -- //
                
// //////// ******************************************************************** ///////

// // Création de l'objet scène 

// const scene = new THREE.Scene();

// // Load background texture de l'espace 

// const loader_texture = new THREE.TextureLoader();

// loader_texture.load('../images/espace.jpg',function(texture){
//     scene.background = texture;  
// });

// //////// ******************************************************************** ///////

// // Création de l'objet caméra 

// const largeur = window.innerWidth; 
// const hauteur = window.innerHeight;

// // Déclaration de type caméra 

// const camera = new THREE.PerspectiveCamera(100,largeur/hauteur,1,5000);

// // Reculer caméra (position)

// camera.position.set(-1,-1,30); // set est une méthode du vector3

// // Ajout de la caméra dans la scène

// scene.add(camera);

// // Création du renderer 

// const renderer = new THREE.WebGLRenderer();

// // Définir le rendu de la page 

// renderer.setSize(largeur,hauteur);

// // Ajoute l'enfant en question au body de notre page 

// document.body.appendChild(renderer.domElement); // domElement c'est la balise canvas sur laquel on va dessiner

// // -- Création sphère et texture

// const textureLoader = new THREE.TextureLoader();

// const geometry = new THREE.SphereGeometry(5, 50, 50, 100, Math.PI * 2, 0, Math.PI * 2); // geometry du matériel 

// const texture = textureLoader.load('../images/texture_earth.jpg');

// const material = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture } );

// // Création du premier mesh 

// const mesh = new THREE.Mesh(geometry,material);

// //////// ******************************************************************** ///////

// // -- création sphère et texture

// const textureLoader2 = new THREE.TextureLoader();

// const geometry2 = new THREE.SphereGeometry(2, 50, 50, 100, Math.PI * 2, 0, Math.PI * 2); // geometry du matériel 

// // Texture de la lune   

// const texture2 = textureLoader.load('../images/texture_moon.jpg');

// const material2 = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture2 } );

// // Création du deuxième mesh 

// const mesh2 = new THREE.Mesh(geometry2,material2);

// // Position de notre sphère 2

// mesh2.position.set(-25,-2, -9);

// // On ajoute les meshs à la scène 

// scene.add(mesh);
// scene.add(mesh2);

// //////// ******************************************************************** ///////

// // Créationd d'un spot type light 

// const light = new THREE.PointLight(0xffffff,2,0,2);

// // On déplace la light 

// light.position.set(-20, 30, 40);

// //////// ******************************************************************** ///////

// // On ajoute la lumière à la scène 

// scene.add(light);

// //////// ******************************************************************** ///////

// // Controls

// // const controls = new THREE.TrackballControls( camera );

// // controls.rotateSpeed = 1.0;
// // controls.zoomSpeed = 1.2;
// // controls.panSpeed = 0.8;
// // controls.noZoom = false;
// // controls.noPan = false;
// // controls.staticMoving = true;
// // controls.dynamicDampingFactor = 0.3;
// // controls.keys = [ 65, 83, 68 ];
// // controls.addEventListener( 'change', render );

// // // -- Stats
// // const stats = new Stats();
// // document.body.appendChild( stats.dom );

// //////// ******************************************************************** ///////

// // Déplacement du cercle 

// camera.position.z = 10;

// // function render () {
// //     requestAnimationFrame(render);
// //     mesh2.rotation.y += 0.01;
// //     controls.update();
// //     renderer.render(scene, camera);
// // };

// //////// ******************************************************************** ///////

// // render();

// //////// ******************************************************************** ///////