class  generica{
	constructor(nomeDoHeroi, idadeDoHeroi, tipoDoHeroi){
    this.nomeDoHeroi = nomeDoHeroi;
    this.idadeDoHeroi = idadeDoHeroi;
    this.tipoDoHeroi = tipoDoHeroi;
    }
    atacar() {
    	let ataque;
        	switch(this.tipoDoHeroi) {
            	case "mago":
                	ataque = "magia";
                    	break;
              	case "guerreiro":
                	ataque = "espada";
             			break;
               	case "monge":
                	ataque = "artes marciais";
                    	break;
               	case "ninja":
                	ataque = "shuriken";
                    	break;
	}
    
	console.log(`o ${this.tipoDoHeroi} atacou usando ${ataque}`)
        }
}

let mago = new generica ("jorge", "20", "mago")
let guerreiro = new generica ("raul", "33", "guerreiro")
let monge = new generica ("paulo", "24", "monge")
let ninja = new generica ("renato", "22", "ninja")

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();


