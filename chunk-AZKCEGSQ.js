import{a as J}from"./chunk-R6LIAIBZ.js";import{B as N,G as W,H as j,I as z,O as U,P as F,S as H,g as E,i as k,j as w,k as T,l as L,n as B,s as R,t as A,u as D}from"./chunk-C6CPOFGY.js";import{$ as M,Da as p,Dc as q,Ea as h,Fa as b,M as s,S as _,aa as P,ac as v,bc as x,da as c,db as O,ea as o,fa as a,fc as I,ga as m,mb as S,na as f,v as g,wa as y,ya as d}from"./chunk-L6URJDBO.js";import"./chunk-GQUOFKUY.js";import"./chunk-3A2TMJPV.js";import"./chunk-S7T5AW7U.js";import"./chunk-J2X4NKYS.js";import"./chunk-U6WT7EB6.js";import"./chunk-4B3VT6DH.js";import"./chunk-YUNOCBLG.js";import"./chunk-YJ5TA4PT.js";import"./chunk-2NIBOUWM.js";import"./chunk-I547WOKC.js";import"./chunk-J6MOGHP4.js";import"./chunk-DRW42MFO.js";import"./chunk-NMFL75IO.js";import{h as C}from"./chunk-B4AJQJMI.js";function V(u,l){u&1&&(o(0,"div",2),m(1,"ion-spinner",17),o(2,"span",18),d(3,"Autenticando..."),a()())}var an=(()=>{let l=class l{constructor(){this.authService=g(J),this.router=g(S),this.toastController=g(U),this.globalService=g(q),this.usuarioInput="",this.senhaInput="",this.manterLogadoCheckbox=!1,this.exibirErro=!1,this.mensagemErro="Usu\xE1rio ou senha incorretos.",this.carregando=!1,this.usuarioRealBackup="",this.senhaRealBackup="",this.fundoHeader=this.globalService.headerBackground}ionViewWillEnter(){setTimeout(()=>{this.verificarDadosSalvos()},300)}verificarDadosSalvos(){let r=this.authService.getCredenciaisSalvas();r&&(this.manterLogadoCheckbox=!0,this.carregando=!0,this.authService.loginPorToken(r).subscribe({next:t=>{this.carregando=!1,this.exibirErro=!1,this.exibirToastBoasVindas(t.nome),this.router.navigate(["/tabs/home"])},error:t=>{this.carregando=!1,console.error("\u274C [Autologin Token] Rejeitado:",t);try{let n=localStorage.getItem("usuario_sessao_anterior");if(!n){let i=localStorage.getItem("usuario_logado")||localStorage.getItem("auth_user");if(i){let e=JSON.parse(i);n=JSON.stringify({usuario:e.usuario||"admin",senha:"",nome:e.nome||"Administrador"})}}if(n){let{usuario:i,senha:e,nome:G}=JSON.parse(n);this.usuarioInput=G||i,this.senhaInput="*******",this.usuarioRealBackup=i,this.senhaRealBackup=e||""}else this.usuarioInput="Administrador",this.senhaInput="*******",this.usuarioRealBackup="admin",this.senhaRealBackup=""}catch{this.limparTelaLoginCompleta()}this.authService.limparCredenciaisSalvas(),this.mensagemErro="\u26A0\uFE0F O login autom\xE1tico falhou. Por favor, confirme suas credenciais para acessar.",this.exibirErro=!0}}))}limparTelaLoginCompleta(){this.usuarioInput="",this.senhaInput="",this.usuarioRealBackup="",this.senhaRealBackup=""}exibirToastBoasVindas(r){return C(this,null,function*(){yield(yield this.toastController.create({message:`Ol\xE1, ${r}! Bom ver voc\xEA de volta. \u{1F44B}`,duration:3e3,position:"top",color:"success",buttons:[{text:"Fechar",role:"cancel"}]})).present()})}entrar(){let r=this.senhaInput==="*******"?this.usuarioRealBackup:this.usuarioInput.trim(),t=this.senhaInput==="*******"?this.senhaRealBackup:this.senhaInput.trim();if(!r||!t){this.mensagemErro="Por favor, preencha o usu\xE1rio e a senha.",this.exibirErro=!0;return}this.carregando=!0,this.authService.login(r,t,this.manterLogadoCheckbox).subscribe({next:n=>{this.carregando=!1,this.exibirErro=!1;let i={usuario:r,senha:t,nome:n.nome};localStorage.setItem("usuario_sessao_anterior",JSON.stringify(i)),this.router.navigate(["/tabs/home"])},error:n=>{this.carregando=!1,console.error("Erro na autentica\xE7\xE3o:",n),this.mensagemErro="Usu\xE1rio ou senha incorretos.",this.exibirErro=!0,this.limparTelaLoginCompleta(),this.authService.limparCredenciaisSalvas(),localStorage.removeItem("usuario_sessao_anterior")}})}};l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=_({type:l,selectors:[["app-login"]],decls:34,vars:13,consts:[[1,"custom-header",3,"translucent"],[1,"ion-padding",2,"--background","#f4f5f8"],[2,"position","absolute","top","0","left","0","width","100%","height","100%","background","rgba(244, 245, 248, 0.8)","z-index","999","display","flex","flex-direction","column","justify-content","center","align-items","center","gap","12px"],[2,"display","flex","flex-direction","column","justify-content","center","height","100%"],[2,"border-radius","12px","box-shadow","0 4px 16px rgba(0, 0, 0, 0.1)"],[1,"ion-text-center"],["color","primary",2,"font-weight","bold","font-size","1.6rem"],[2,"margin","5px 0 0 0","color","#666"],["lines","full",1,"ion-margin-bottom"],["label","Usu\xE1rio","labelPlacement","floating","placeholder","Ex: admin, carlos, ana",3,"ngModelChange","ngModel","disabled"],["label","Senha","type","password","labelPlacement","floating",3,"ngModelChange","ngModel","disabled"],["color","medium","slot","end"],["lines","none",1,"ion-no-padding"],["labelPlacement","end","justify","start",3,"ngModelChange","ngModel","disabled"],[2,"font-size","0.9rem","color","#555"],["expand","block",1,"ion-margin-top",3,"click","disabled"],["message","Usu\xE1rio ou senha incorretos.","color","danger",3,"didDismiss","isOpen","duration"],["name","crescent","color","primary",2,"transform","scale(1.5)"],[2,"color","var(--ion-color-primary)","font-weight","500","font-size","0.95rem"]],template:function(t,n){t&1&&(o(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),d(3,"\xA0"),a()()(),o(4,"ion-content",1),M(5,V,4,0,"div",2),o(6,"div",3)(7,"ion-card",4)(8,"ion-card-header",5)(9,"ion-card-title",6),d(10," Gest\xE3o de Servi\xE7os "),a(),o(11,"p",7),d(12,"Fa\xE7a login para continuar"),a()(),o(13,"ion-card-content")(14,"ion-item",8)(15,"ion-input",9),b("ngModelChange",function(e){return h(n.usuarioInput,e)||(n.usuarioInput=e),e}),a()(),o(16,"ion-item",8)(17,"ion-input",10),b("ngModelChange",function(e){return h(n.senhaInput,e)||(n.senhaInput=e),e}),m(18,"ion-input-password-toggle",11),a()(),o(19,"ion-item",12)(20,"ion-checkbox",13),b("ngModelChange",function(e){return h(n.manterLogadoCheckbox,e)||(n.manterLogadoCheckbox=e),e}),o(21,"span",14),d(22,"Manter-me conectado"),a()()(),o(23,"ion-button",15),f("click",function(){return n.entrar()}),d(24," Acessar Sistema "),a()()()(),m(25,"br")(26,"br")(27,"br")(28,"br")(29,"br")(30,"br")(31,"br")(32,"br"),a(),o(33,"ion-toast",16),f("didDismiss",function(){return n.exibirErro=!1}),a()),t&2&&(c("translucent",!0),s(),y("--background","url("+n.fundoHeader()+") no-repeat center center / cover"),s(4),P(n.carregando?5:-1),s(10),p("ngModel",n.usuarioInput),c("disabled",n.carregando),s(2),p("ngModel",n.senhaInput),c("disabled",n.carregando),s(3),p("ngModel",n.manterLogadoCheckbox),c("disabled",n.carregando),s(3),c("disabled",n.carregando),s(10),c("isOpen",n.exibirErro)("duration",2e3))},dependencies:[W,z,R,F,N,O,I,v,x,B,D,H,E,j,k,T,L,w,A],styles:[`<ion-header[_ngcontent-%COMP%]   [translucent]="true"[_ngcontent-%COMP%]   class="custom-header"[_ngcontent-%COMP%] > <ion-toolbar[_ngcontent-%COMP%]   [style.--background]="'url(' + fundoHeader() + ')[_ngcontent-%COMP%]   no-repeat[_ngcontent-%COMP%]   center[_ngcontent-%COMP%]   center[_ngcontent-%COMP%]   /[_ngcontent-%COMP%]   cover'"[_ngcontent-%COMP%] > <ion-title[_ngcontent-%COMP%] > &nbsp[_ngcontent-%COMP%];</ion-title[_ngcontent-%COMP%] > </ion-toolbar[_ngcontent-%COMP%] > </ion-header[_ngcontent-%COMP%] > <ion-content[_ngcontent-%COMP%]   class="ion-padding"[_ngcontent-%COMP%]   style="--background:[_ngcontent-%COMP%]   #f4f5f8"[_ngcontent-%COMP%] > <!--[_ngcontent-%COMP%]   \u{1F680}[_ngcontent-%COMP%]   CONTAINER[_ngcontent-%COMP%]   DO[_ngcontent-%COMP%]   SPINNER[_ngcontent-%COMP%]:   Aparece[_ngcontent-%COMP%]   sobreposto[_ngcontent-%COMP%]   no[_ngcontent-%COMP%]   centro[_ngcontent-%COMP%]   da[_ngcontent-%COMP%]   tela[_ngcontent-%COMP%]   apenas[_ngcontent-%COMP%]   quando[_ngcontent-%COMP%]   carregando[_ngcontent-%COMP%]   for[_ngcontent-%COMP%]   verdadeiro[_ngcontent-%COMP%]   --[_ngcontent-%COMP%] > @if[_ngcontent-%COMP%]   (carregando)[_ngcontent-%COMP%] {
  <div
    style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(244, 245, 248, 0.8);
      z-index: 999;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
    "
  >
    <ion-spinner
      name="crescent"
      color="primary"
      style="transform: scale(1.5)"
    ></ion-spinner>
    <span
      style="
        color: var(--ion-color-primary);
        font-weight: 500;
        font-size: 0.95rem;
      "
      >Autenticando...</span
    >
  </div>
  }

  <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    "
  >
    <ion-card
      style="border-radius: 12px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1)"
    >
      <ion-card-header class="ion-text-center">
        <ion-card-title
          color="primary"
          style="font-weight: bold; font-size: 1.6rem"
        >
          Gest\xE3o de Servi\xE7os
        </ion-card-title>
        <p style="margin: 5px 0 0 0; color: #666">Fa\xE7a login para continuar</p>
      </ion-card-header>

      <ion-card-content>
        <!-- inputs desativados temporariamente enquanto processa o login para evitar cliques duplos -->
        <ion-item lines="full" class="ion-margin-bottom">
          <ion-input
            label="Usu\xE1rio"
            labelPlacement="floating"
            [(ngModel)]="usuarioInput"
            placeholder="Ex: admin, carlos, ana"
            [disabled]="carregando"
          >
          </ion-input>
        </ion-item>

        <ion-item lines="full" class="ion-margin-bottom">
          <ion-input
            label="Senha"
            type="password"
            labelPlacement="floating"
            [(ngModel)]="senhaInput"
            [disabled]="carregando"
          >
            <ion-input-password-toggle
              color="medium"
              slot="end"
            ></ion-input-password-toggle>
          </ion-input>
        </ion-item>

        <ion-item lines="none" class="ion-no-padding">
          <ion-checkbox
            [(ngModel)]="manterLogadoCheckbox"
            labelPlacement="end"
            justify="start"
            [disabled]="carregando"
          >
            <span style="font-size: 0.9rem; color: #555"
              >Manter-me conectado</span
            >
          </ion-checkbox>
        </ion-item>

        <ion-button
          expand="block"
          class="ion-margin-top"
          (click)="entrar()"
          [disabled]="carregando"
        >
          Acessar Sistema
        </ion-button>
      </ion-card-content>
    </ion-card>
  </div>
  <br /><br /><br /><br /><br />
  <br /><br /><br />
</ion-content>

<ion-toast
  [isOpen]="exibirErro"
  message="Usu\xE1rio ou senha incorretos."
  color="danger"
  [duration]="2000"
  (didDismiss)="exibirErro = false"
>
</ion-toast>`]});let u=l;return u})();export{an as LoginPage};
