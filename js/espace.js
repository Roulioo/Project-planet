////////////////////////////////////////////////////////////////////////////////////////////////////

if ( WEBGL.isWebGLAvailable() === false ) {
    document.body.appendChild( WEBGL.getWebGLErrorMessage() );
}

// -- Initialisation de la scène -- // 

const scene = new THREE.Scene();

// -- Loading background texture -- // 

const loader_texture = new THREE.TextureLoader();

loader_texture.load('../images/espace.jpg',function(texture){
    scene.background = texture;  
});

////////////////////////////////////////////////////////////////////////////////////////////////////

// -- Caractéristique de la caméra -- //

const largeur = window.innerWidth; 
const hauteur = window.innerHeight;

const camera = new THREE.PerspectiveCamera(100,largeur/hauteur,1,5000);

camera.position.set(90,0,40);

scene.add(camera);

////////////////////////////////////////////////////////////////////////////////////////////////////

// -- Définir le rendu de la page -- // 

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize(largeur,hauteur);

// -- Ajoute l'enfant en question au body de notre page -- //

document.body.appendChild(renderer.domElement); // domElement c'est la balise canvas sur laquel on va dessiner -- /

////////////////////////////////////////////////////////////////////////////////////////////////////

// -- Création des sphères / textures et meshs des différentes planètes -- // 

const textureLoaderEarth = new THREE.TextureLoader();

const geometry_earth = new THREE.SphereGeometry(25, 50, 50);

const texture_earth = textureLoaderEarth.load('../images/textures/texture_earth.jpg');

const material_earth = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture_earth } );

const mesh_earth = new THREE.Mesh(geometry_earth,material_earth);

////////////////////////////////////////////////////////////////////////////////////////////////////

const textureLoaderMoon = new THREE.TextureLoader();

const geometry_moon = new THREE.SphereGeometry(4, 50, 50); 

const texture_moon = textureLoaderMoon.load('../images/textures/texture_moon.jpg');

const material_moon = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture_moon } );

const mesh_moon = new THREE.Mesh(geometry_moon,material_moon);

////////////////////////////////////////////////////////////////////////////////////////////////////

const textureLoaderMars = new THREE.TextureLoader();

const geometry_mars = new THREE.SphereGeometry(4, 50, 50); 

const texture_mars = textureLoaderMars.load('../images/textures/texture_mars.jpeg');

const material_mars = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture_mars } );

const mesh_mars = new THREE.Mesh(geometry_mars,material_mars);

////////////////////////////////////////////////////////////////////////////////////////////////////

const textureLoaderGlacial = new THREE.TextureLoader();

const geometry_glacial = new THREE.SphereGeometry(4, 50, 50); 

const texture_glacial = textureLoaderGlacial.load('../images/textures/texture_glacial.jpg');

const material_glacial = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture_glacial } );

const mesh_glacial = new THREE.Mesh(geometry_glacial,material_glacial);


////////////////////////////////////////////////////////////////////////////////////////////////////

const textureLoaderSaturne = new THREE.TextureLoader();

const geometry_saturne = new THREE.SphereGeometry(4, 50, 50); 

const texture_saturne = textureLoaderSaturne.load('../images/textures/texture_saturne.jpeg');

const material_saturne = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture_saturne } );

const mesh_saturne = new THREE.Mesh(geometry_saturne,material_saturne);

////////////////////////////////////////////////////////////////////////////////////////////////////

const textureLoaderUranus = new THREE.TextureLoader();

const geometry_uranus = new THREE.SphereGeometry(4, 50, 50); 

const texture_uranus = textureLoaderUranus.load('../images/textures/texture_uranus.jpg');

const material_uranus = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture_uranus } );

const mesh_uranus = new THREE.Mesh(geometry_uranus,material_uranus);

////////////////////////////////////////////////////////////////////////////////////////////////////

// -- On ajoute les meshs à la scène -- // 

scene.add(mesh_earth);
scene.add(mesh_glacial);
scene.add(mesh_mars);
scene.add(mesh_saturne);
scene.add(mesh_uranus);
scene.add(mesh_moon);

////////////////////////////////////////////////////////////////////////////////////////////////////

// -- Création et ajout lumière à la scène -- // 

var light = new THREE.AmbientLight( 0xffffff ); // soft white light
scene.add(light);

////////////////////////////////////////////////////////////////////////////////////////////////////

// -- Création du control -- // 

let controle = new THREE.OrbitControls( camera );

////////////////////////////////////////////////////////////////////////////////////////////////////

function animate(){
    requestAnimationFrame( animate );
    requestAnimationFrame( render );
    controle.update();	
}

function render () {
    renderer.render(scene, camera);
    requestAnimationFrame(planets);
};

////////////////////////////////////////////////////////////////////////////////////////////////////

// -- Déplacement de la lune autour de la terre -- // 

// -- Rapidité de notre lune -- // 

let theta = 100;

// -- Radius (positionnement) -- //

let radius= 30;

// -- Fonction déplacement des planètes -- // 

function planets(){

    theta += 1;
    
    mesh_uranus.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) +5 ) ;
    mesh_uranus.position.y = 1;
    mesh_uranus.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) + 5);

    mesh_moon.position.x = radius * Math.sin( THREE.Math.degToRad( theta )  );
    mesh_moon.position.y = 1;
    mesh_moon.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );

    mesh_mars.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) +15 );
    mesh_mars.position.y = 1;
    mesh_mars.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) +15 );

    mesh_saturne.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) +10 );
    mesh_saturne.position.y = 1;
    mesh_saturne.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) + 10);

    mesh_glacial.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) +20 );
    mesh_glacial.position.y = 2;
    mesh_glacial.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) +20);

}

////////////////////////////////////////////////////////////////////////////////////////////////////

// -- Appels des fonctions -- // 

animate();
render();
planets();