//followed guide on canvas

let scene, camera, renderer, cube;


function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, window.innerWidth/ window.innerHeight, 1, 1000);

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  //gets size of screen to set mountain size
  const worldWidth = window.innerWidth;
  const worldHeight = window.innerHeight;
  // add results of renderer as an HTML DOM object
  document.body.appendChild(renderer.domElement);

  // create or load in geometries - geometry is a meshInstance or mesh in other languages
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var geometry2 = new THREE.TorusGeometry(5,1,5, 100);
  // var geometry3 = new THREE.PlaneGeometry(worldHeight, worldWidth);
  var geometry4 = new THREE.PlaneGeometry(150, 150);
  var geometry3 = new THREE.CircleGeometry(5,32);
  

  // geometry3.rotateX(- Math.PI/2);
  // var position = geometry3.attributes.position;
  // position.usage = THREE.DynamicDrawUsage;
  // for ( let i = 0; i < position.count; i ++ ) {

  //   const y = 35 * Math.sin( i / 2 );
  //   position.setY( i, y );

  // }




  var torMat = new THREE.MeshBasicMaterial( {color:0xffff00});
  // load an image texture
  var texture = new THREE.TextureLoader().load('crate.gif');
  var background = new THREE.TextureLoader().load('spaceBack.jpeg');
  
 

  
  var material = new THREE.MeshBasicMaterial
  var matBasic = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
  var matPhong = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
  var matTexture = new THREE.MeshBasicMaterial( {map: texture} );
  var matTextureColor = new THREE.MeshBasicMaterial( {map: texture, color: 0x00CC00});
  var matBack = new THREE.MeshBasicMaterial({map:background});
  
  cube = new THREE.Mesh (geometry, matTextureColor);
  torus = new THREE.Mesh (geometry2, torMat);
  // ground = new THREE.Mesh (geometry3, matBasic);
  background = new THREE.Mesh(geometry4, matBack);
  // add object to screen
  scene.add(cube);
  // scene.add(ground);
  scene.add(torus);
  scene.add(background);
  background.position.z = -50;
  torus.position.y = 20;
  // torus.position.x = 25
  // for any but basic material, lights are necessary
  scene.add(new THREE.DirectionalLight( 0xffffff, 0.125));
  scene.add(new THREE.AmbientLight( 0x666666));

  // move camera away from object or you'll see a black screen
  camera.position.z = 20;
  
  //allows user to move camera and object
  document.onkeydown = checkKey;

  function checkKey(e){
    e = e || window.event;

    if(e.keyCode=='73'){
      console.log("up");
      camera.position.z = camera.position.z -1;
    }
    else if (e.keyCode == '79'){
      console.log('down');
      camera.position.z = camera.position.z +1;
    }
    else if (e.keyCode == '89'){
      console.log("left");
      camera.position.y = camera.position.y -1;
    }
    else if (e.keyCode == '85'){
      console.log('right');
      camera.position.y = camera.position.y+1;
    }
    else if (e.keyCode == '87'){
      console.log('w');
      cube.position.y = cube.position.y+1;
    }
    else if (e.keyCode == '65'){
      console.log('a');
      cube.position.x = cube.position.x-1;
    }
    else if (e.keyCode == '83'){
      console.log('s');
      cube.position.y = cube.position.y-1;
    }
    else if (e.keyCode == '68'){
      console.log('d');
      cube.position.x = cube.position.x+1;
    }
    else if (e.keyCode == '38'){
      console.log('up');
      cube.position.y = cube.position.y+1;
      camera.position.y = camera.position.y+1;
    }
    else if (e.keyCode == '40'){
      console.log('down');
      cube.position.y = cube.position.y-1;
      camera.position.y = camera.position.y-1;
      
    }
    else if (e.keyCode == '37'){
      console.log('left');
      cube.position.x = cube.position.x-1;
      camera.position.x = camera.position.x-1;
    }
    else if (e.keyCode == '39'){
      console.log('right');
      cube.position.x = cube.position.x+1;
      camera.position.x = camera.position.x+1;
    }
  }

} // end init

function update(){
  // call at up to 60 fps
  requestAnimationFrame(update);

  cube.rotation.x += .01;
  cube.rotation.y += .01;
  
  // render the current scene
  renderer.render(scene, camera);
} // end update


init();
update();

