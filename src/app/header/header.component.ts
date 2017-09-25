import * as angular from "angular";
import { BaseHeaderController } from '../base/base-header';


export class HeaderComponentController extends BaseHeaderController {
    public $onInit() {
        this.title = 'Header';
    }
}


const HeaderComponent: angular.IComponentOptions = {
    template: `<div>Hi {{ctrl.name}}</div>`,
    controller: HeaderComponentController,
    controllerAs: "headerCtrl"
}