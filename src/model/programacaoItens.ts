export class ProgramacaoItens{
    curso: string;
    dataInicial: string;
    dataFinal: string;
    horaInicial: string;
    horaFinal: string;
    local: string;
    imagem: string;
    descricao: string;
    ativo: boolean;
    

    constructor(curso?:string, dataInicial?:string, dataFinal?:string, horaInicial?:string, horaFinal?:string, local?:string, imagem?:string, descricao?:string){
        this.curso = curso;
        this.dataInicial = dataInicial;
        this.dataFinal = dataFinal;
        this.horaInicial = horaInicial;
        this.horaFinal = horaFinal;
        this.local = local;
        this.imagem = imagem;
        this.descricao = descricao;
        this.ativo = true;
    }
}