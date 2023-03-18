export class Task {
    id: number;
    nombre: string;
    estado: boolean;

    constructor(id:number,nombre:string,estado:boolean){
      if(!this.validarnombre(nombre)){
        throw new Error('Ingrese los datos requeridos');
      }
      this.id=id;
      this.nombre=nombre;
      this.estado=estado;
    }

    validarnombre(nombre:string):boolean{
      if(!nombre || nombre.trim().length===0){
        return false;
      }
      return true;
    }

    toString():string{
      return `this.id ->${this.nombre} esta ${this.estado})`
    }
  }

  