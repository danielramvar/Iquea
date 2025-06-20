let compraMueble=JSON.parse(localStorage.getItem('compraMueble'));
let img=compraMueble.img;
let nombre=compraMueble.nombre;
let colorBloque=compraMueble.colorBloque;
let precio;

function ponerMueble() {
    const borderSelectorColoresMarron=document.getElementById('color1'); /*marrón*/
    const borderSelectorColoresBlanco=document.getElementById('color2'); /*blanco*/
    const borderSelectorColoresNegro=document.getElementById('color3'); /*negro*/

    if(img) document.getElementById('img').src='imagenes/logo.png';
    if(nombre) document.getElementById('nombre').innerText='Selecciona un color';
    if(colorBloque) document.querySelector('.block').style.backgroundColor=colorBloque;
    if(colorBloque) document.getElementById('button').style.color=colorBloque;

    const selectorColores=document.querySelectorAll('#color1, #color2, #color3');
    selectorColores.forEach((element)=>{
        element.addEventListener('click', function(){
            const color=window.getComputedStyle(element).backgroundColor;

            switch(img) {
                case 'imagenes/salon/muebletv1.png': /*gorrión*/
                document.getElementById('nombre').innerText="Mueble de TV - Gorrión";
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/salon/muebletv1.png';
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
                document.getElementById('nombre').innerText="Mueble de TV - Periquito";
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
                document.getElementById('nombre').innerText="Lampara de pie - Luxo";
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
                document.getElementById('nombre').innerText="Sofá - Daniel";
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
                case 'imagenes/salon/mueblepared1.png': /*fútbol*/
                document.getElementById('nombre').innerText="Mueble de pared - Fútbol";
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
                case 'imagenes/comedor/mesacomedor1.png': /*don quijote*/
                document.getElementById('nombre').innerText="Mesa de comedor - Don Quijote";
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
                case 'imagenes/comedor/silla1.png': /*sancho panza*/
                document.getElementById('nombre').innerText="Silla - Sancho Panza";
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
                case 'imagenes/dormitorio/cama1.png': /*nubes*/
                document.getElementById('nombre').innerText="Cama - Nubes";
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
                case 'imagenes/dormitorio/mesitanoche1.png': /*alex*/
                document.getElementById('nombre').innerText="Mesita de noche - Alex";
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
                case 'imagenes/dormitorio/estanteria1.png': /*gurt*/
                document.getElementById('nombre').innerText="Estantería - Gurt";
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
                case 'imagenes/baño/vater1.png': /*royale*/
                document.getElementById('nombre').innerText="Váter - Royale";
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
                case 'imagenes/baño/lavabo1.png': /*jabón*/
                document.getElementById('nombre').innerText="Lavabo - Jabón";
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
                case 'imagenes/baño/platoducha1.png': /*gato*/
                document.getElementById('nombre').innerText="Plato de ducha - Gato";
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
                case 'imagenes/baño/estanteriabaño1.png': /*pista de hielo*/
                document.getElementById('nombre').innerText="Estantería de baño - Pista de Hielo";
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
                case 'imagenes/cocina/muebleutensilios1.png': /*mármol*/
                document.getElementById('nombre').innerText="Mueble de utensilios - Mármol";
                    if(color==="rgb(114, 57, 0)"){ /*si es marrón*/
                        document.getElementById('img').src='imagenes/cocina/muebleutensilios1.png';
                        borderSelectorColoresMarron.style.border='solid 5px rgb(0, 255, 0)';
                        borderSelectorColoresBlanco.style.border='solid 0px rgb(0, 255, 0)';
                        borderSelectorColoresNegro.style.border='solid 0px rgb(0, 255, 0)';
                    }else if(color==="rgb(0, 0, 0)"){ /*si es negro*/
                        document.getElementById('img').src='imagenes/cocina/muebleutensilios1negro.png';
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
                case 'imagenes/cocina/mueblevajillas1.png': /*francisco*/
                document.getElementById('nombre').innerText="Mueble de vajillas - Francisco";
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
                case 'imagenes/cocina/mueblecondimentos1.png': /*españa*/
                document.getElementById('nombre').innerText="Mueble de condimentos - España";
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
                case 'imagenes/cocina/despensa1.png': /*teléfono*/
                document.getElementById('nombre').innerText="Despensa - Teléfono";
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
    switch(img){
        case 'imagenes/salon/muebletv1.png':
            document.querySelector('.price').innerText='83.100₧';
            precio=83100;
            break;
        case 'imagenes/salon/muebletv2.png':
            document.querySelector('.price').innerText='74.800₧';
            precio=74800;
            break;
        case 'imagenes/salon/lamparapie1.png':
            document.querySelector('.price').innerText='19.900₧';
            precio=19900;
            break;
        case 'imagenes/salon/sofa1.png':
            document.querySelector('.price').innerText='133.100₧';
            precio=133100;
            break;
        case 'imagenes/salon/mueblepared1.png':
            document.querySelector('.price').innerText='29.900₧';
            precio=29900;
            break;
        case 'imagenes/comedor/mesacomedor1.png':
            document.querySelector('.price').innerText='108.100₧';
            precio=108100;
            break;
        case 'imagenes/comedor/silla1.png':
            document.querySelector('.price').innerText='14.900₧';
            precio=14900;
            break;
        case 'imagenes/dormitorio/cama1.png':
            document.querySelector('.price').innerText='116.400₧';
            precio=116400;
            break;
        case 'imagenes/dormitorio/mesitanoche1.png':
            document.querySelector('.price').innerText='24.900₧';
            precio=24900;
            break;
        case 'imagenes/dormitorio/estanteria1.png':
            document.querySelector('.price').innerText='166.300₧';
            precio=166300;
            break;
        /*case 'imagenes/dormitorio/'*/
        case 'imagenes/baño/vater1.png':
            document.querySelector('.price').innerText='46.500₧';
            precio=46500;
            break;
        case 'imagenes/baño/lavabo1.png':
            document.querySelector('.price').innerText='41.500₧';
            precio=41500;
            break;
        case 'imagenes/baño/platoducha1.png':
            document.querySelector('.price').innerText='58.200₧';
            precio=58200;
            break;
        case 'imagenes/baño/estanteriabaño1.png':
            document.querySelector('.price').innerText='102.400';
            precio=102400;
            break;
        case 'imagenes/cocina/muebleutensilios1.png':
            document.querySelector('.price').innerText='124.700₧';
            precio=124700;
            break;
        case 'imagenes/cocina/mueblevajillas1.png':
            document.querySelector('.price').innerText='158.000₧';
            precio=158000;
            break;
        case 'imagenes/cocina/mueblecondimentos1.png':
            document.querySelector('.price').innerText='49.900₧';
            precio=49900;
            break;
        case 'imagenes/cocina/despensa1.png':
            document.querySelector('.price').innerText='59.400₧'
            precio=59400;
        default: document.querySelector('.price').innerText='Selecciona un color';
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