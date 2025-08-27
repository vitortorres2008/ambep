import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { Filtro } from 'src/assets/model/FiltroModel';
import { AppSettings } from 'src/core/appSettings';
import { Util } from 'src/core/util';
import { ConsultaProvider } from 'src/providers/consulta/consulta';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {

  public page: any;

  public filtroTemp: any = {};
  public parceiroTipo: any = {};
  public filtro: Filtro = new Filtro();
  public constanteTipo: string = this.activatedRoute.snapshot.params.constante;
  public especialidades: Array<any> = [];
  public loadingEspecialidades: boolean = false;
  public textExemploConsulta = '(ex: casa+saude) ou (ex: curso+espanhol) ou (ex: civel+trabalhista)';

  constructor(
    public navParams: NavParams,
    private modalController: ModalController,
    private router: Router,
    private consultaProv: ConsultaProvider,
  //private appComponent: AppComponent,
    private activatedRoute: ActivatedRoute
  ) {
    switch(this.constanteTipo)
    {
      case 'IPAM':
        this.textExemploConsulta = '(ex: casa+saude)';
      break;
      case 'CONVENIO':
        this.textExemploConsulta = '(ex: curso+espanhol)';

      break;
      case 'PROJUR':
        this.textExemploConsulta = '(ex: civel+trabalhista)';
      break;
    }

    this.consultaProv.parceiroTipo(this.constanteTipo).then((result: any) => {

      console.log(result);

      if (result === null) {
        this.router.navigate(['/consulta-erro']);
      }

      //this.appComponent.parceiroTipo = result;

      this.parceiroTipo = result;

      this.filtro.guidParceiroTipo = this.parceiroTipo.guid;

      localStorage.setItem(this.constanteTipo + '_ParceiroTipo', JSON.stringify(result));

    }, (error: any) => {

      console.log(error);

      this.router.navigate(['/consulta-erro']);

    });

    if (localStorage.getItem(this.constanteTipo + '_Filtro') !== null) {

      this.filtroTemp = JSON.parse(localStorage.getItem(this.constanteTipo + '_Filtro')!);
      this.filtro.descricao = '';

      if (this.filtroTemp.especialidades === undefined) {
        this.filtro.especialidades = [];
      }
      else {
        this.filtro.especialidades = this.filtroTemp.especialidades;
      }

      this.filtro.uf = this.filtroTemp.uf;
      this.filtro.cidade = this.filtroTemp.cidade;
      this.filtro.bairro = this.filtroTemp.bairro;
    }

  };

  ngOnInit(): void { };

  ngAfterViewInit() {

    setTimeout(() => {
      this.verificarShowLocalizacao();
    }, 1000);

  };

  addRemEspecialidade(especialidade: any): void {

    let temp = this.filtro.especialidades.find((x: any) => x === especialidade);

    if (temp === null || temp === undefined) {
      this.filtro.especialidades.push(especialidade);
    }
    else {
      this.filtro.especialidades.splice(this.filtro.especialidades.indexOf(especialidade), 1);
    }

    localStorage.setItem(this.constanteTipo + '_Filtro', JSON.stringify(this.filtro));
  }

  carregarEspecialidades(): void {

    this.especialidades = [];

    if (this.filtro.uf !== null && this.filtro.guidParceiroTipo !== Util.guidEmpty()) {

      this.loadingEspecialidades = true;

      this.consultaProv.especialidades(this.filtro).then((result: any) => {

        console.log(result);
        this.especialidades = result;
        this.loadingEspecialidades = false;

      }, (error: any) => {
        console.log(error);
      });
    }
  };

  verificarShowLocalizacao(): void {

    // if (this.filtro.uf === null || this.filtro.uf === '' || this.filtro.uf === undefined) {
    //   this.btnShowLocalizacao.nativeElement.click();
    // }

  };

  atualizarLocalizacao(): void {

    setTimeout(() => {
      this.verificarShowLocalizacao();
    }, 1000);

    localStorage.setItem(this.constanteTipo + '_Filtro', JSON.stringify(this.filtro));

  };

  consultar(): void {

    localStorage.setItem(this.constanteTipo + '_Filtro', JSON.stringify(this.filtro));
    this.router.navigate(['/consulta-resultado/' + this.constanteTipo]);

  };

  onKey(event: any) {

    console.log(event);
    if (event.ctrlKey === false && event.keyCode === 13) {
      this.consultar();
    }

  };
}
