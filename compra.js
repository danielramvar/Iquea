let compraMueble=JSON.parse(localStorage.getItem('compraMueble'));
let img=compraMueble.img;
let nombre=compraMueble.nombre;
let colorBloque=compraMueble.colorBloque;
let precio;

function ponerMueble() {
    const borderSelectorColoresMarron=document.getElementById('color1'); /*marrón*/
    const borderSelectorColoresBlanco=document.getElementById('color2'); /*blanco*/
    const borderSelectorColoresNegro=document.getElementById('color3'); /*negro*/

    if(img) document.getElementById('img').src=img;
    if(nombre) document.getElementById('nombre').innerText=nombre;
    if(colorBloque) document.querySelector('.block').style.backgroundColor=colorBloque;
    if(colorBloque) document.getElementById('button').style.color=colorBloque;

    const selectorColores=document.querySelectorAll('#color1, #color2, #color3');
    selectorColores.forEach((element)=>{
        element.addEventListener('click', function(){
            const color=window.getComputedStyle(element).backgroundColor;

            switch(img) {
                case 'imagenes/salon/muebletv1.png': /*gorrión*/
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/salon/muebletv1marron.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                        document.getElementById('desc').innerText="Textura tan perfecta como las criaturas que su nombre porta";

                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/salon/muebletv1negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/salon/muebletv1blanco.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
                case 'imagenes/salon/muebletv2.png': /*periquito*/
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/salon/muebletv2.png';

                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/salon/muebletv2negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/salon/muebletv2blanco.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
                case 'imagenes/salon/lamparapie1.png': /*luxo*/
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/salon/lamparapie1.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/salon/lamparapie1negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/salon/lamparapie1blanco.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
                case 'imagenes/salon/sofa1.png': /*daniel*/
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/salon/sofa1.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/salon/sofa1negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/salon/sofa1blanco.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
                case 'imagenes/salon/mueblepared1.png':
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/salon/mueblepared1.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/salon/mueblepared1negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/salon/mueblepared1blanco.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
                case 'imagenes/comedor/mesacomedor1.png':
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/comedor/mesacomedor1.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/comedor/mesacomedor1negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/comedor/mesacomedor1blanco.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
                case 'imagenes/comedor/silla1.png':
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/comedor/silla1.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/comedor/silla1negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/comedor/silla1blanco.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
                case 'imagenes/dormitorio/cama1.png':
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/dormitorio/cama1.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/dormitorio/cama1negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/dormitorio/cama1blanco.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
                case 'imagenes/dormitorio/mesitanoche1.png':
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/dormitorio/mesitanoche1.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/dormitorio/mesitanoche1negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/dormitorio/mesitanoche1blanco.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
                case 'imagenes/dormitorio/estanteria1.png': /*daniel*/
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/dormitorio/estanteria1.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/dormitorio/estanteria1negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/dormitorio/estanteria1blanco.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
                case 'imagenes/baño/vater1.png':
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/baño/vater1.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/baño/vater1negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/baño/vater1blanco.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
                case 'imagenes/baño/lavabo1.png':
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/baño/lavabo1.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/baño/lavabo1negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/baño/lavabo1blanco.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
                case 'imagenes/baño/platoducha1.png':
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/baño/platoducha1.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/baño/platoducha1negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/baño/platoducha1blanco.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
                case 'imagenes/baño/estanteriabaño1.png':
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/baño/estanteriabaño1.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/baño/estanteriabaño1negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/baño/estanteriabaño1blanco.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
                case 'imagenes/cocina/muebleutensilios1.png':
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/cocina/muebleutensilios1.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/ccocina/muebleutensilios1negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/cocina/muebleutensilios1blanco.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
                case 'imagenes/cocina/mueblevajillas1.png':
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/cocina/mueblevajillas1.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/cocina/mueblevajillas1negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/cocina/mueblevajillas1blanco.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
                case 'imagenes/cocina/mueblecondimentos1.png':
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/cocina/mueblecondimentos1.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/cocina/mueblecondimentos1negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/cocina/mueblecondimentos1blanco.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
                case 'imagenes/cocina/despensa1.png':
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/cocina/despensa1.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/cocina/despensa1negro.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 5px rgb(0, 255, 0)';
                    }else if(color==="rgb(255, 255, 255)"){ /*si es blanco*/
                        document.getElementById('img').src='imagenes/cocina/despensa1blanco.png';
                        borderSelectorColoresMarron.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }
                    break;
            }
        })
    });
}

function ponerInfo(){
    const img=compraMueble.img;
    switch(img){
        case 'imagenes/salon/muebletv1.png':
            document.querySelector('.price').innerText='1₧';
            precio=1;
            break;
        case 'imagenes/salon/muebletv2.png':
            document.querySelector('.price').innerText='2₧';
            precio=2;
            break;
        case 'imagenes/salon/lamparapie1.png':
            document.querySelector('.price').innerText='8300₧';
            precio=3;
            break;
        case 'imagenes/salon/sofa1.png':
            document.querySelector('.price').innerText='8300₧';
            precio=4;
            break;
        case 'imagenes/salon/mueblepared1.png':
            document.querySelector('.price').innerText='8300₧';
            break;
        case 'imagenes/comedor/mesacomedor1.png':
            document.querySelector('.price').innerText='8300₧';
            break;
        case 'imagenes/comedor/silla1.png':
            document.querySelector('.price').innerText='8300₧';
            break;
        case 'imagenes/dormitorio/cama1.png':
            document.querySelector('.price').innerText='8300₧';
            break;
        case 'imagenes/dormitorio/mesitanoche1.png':
            document.querySelector('.price').innerText='8300₧';
            break;
        case 'imagenes/dormitorio/estanteria1.png':
            document.querySelector('.price').innerText='8300₧';
            break;
        case 'imagenes/baño/vater1.png':
            document.querySelector('.price').innerText='8300₧';
            break;
        case 'imagenes/baño/lavabo1.png':
            document.querySelector('.price').innerText='8300₧';
            break;
        case 'imagenes/baño/platoducha1.png':
            document.querySelector('.price').innerText='8300₧';
            break;
        case 'imagenes/baño/estanteriabaño1.png':
            document.querySelector('.price').innerText='8300₧';
            break;
        case 'imagenes/patio/sillapatio1.png':
            document.querySelector('.price').innerText='8300₧';
            break;
        case 'imagenes/patio/tumbona1.png':
            document.querySelector('.price').innerText='8300₧';
            break;
        case 'imagenes/patio/pergola1.png':
            document.querySelector('.price').innerText='8300₧';
            break;
    }
}
localStorage.setItem('compraMueble', JSON.stringify(compraMueble));

window.addEventListener('DOMContentLoaded', ponerMueble);
window.addEventListener('DOMContentLoaded', ponerInfo);

const button=document.getElementById('button');
let carrito=JSON.parse(localStorage.getItem('carrito')) || [];

button.addEventListener('click', function(){
    alert('Producto añadido al carrito');
    compraMueble.precio=precio;
    if(compraMueble) carrito.push(compraMueble);

    localStorage.setItem('carrito', JSON.stringify(carrito)); 
});

document.addEventListener('mouseover', function(event) {
    if(event.target.matches('#button')){
        event.target.style.cursor='pointer';
    }
});