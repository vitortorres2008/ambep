export class Filtro{
    public nivel: number = 0;
    public guidParceiroTipo: string = null!;
    public descricao: string = '';
    public especialidades: Array<any> = [];
    public uf: string = '';
    public cidade: string = '';
    public bairro: string = '';
    public groupBy: string = '';
    public orderBy: string = '';
    public asc: boolean = true;
    public limit: number = 10;
    public offSet: number = 0;
};