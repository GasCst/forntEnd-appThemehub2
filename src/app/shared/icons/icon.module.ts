import { NgModule } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@NgModule({})
export class IconModule {
    constructor(
        private _domSanitizer: DomSanitizer,
        private _matIconRegister: MatIconRegistry
    ) {
        this._matIconRegister.addSvgIcon(
            'twitter',
            this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter-brands-solid.svg')
        );
        this._matIconRegister.addSvgIcon('my-doc', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/my-docs.svg'));
        this._matIconRegister.addSvgIcon('offer', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/offer.svg'));
        this._matIconRegister.addSvgIcon('file', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/file.svg'));
        this._matIconRegister.addSvgIcon('my-profile', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/my-profile.svg'));
        this._matIconRegister.addSvgIcon('user', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/user.svg'));
        this._matIconRegister.addSvgIcon('order', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/order.svg'));
        this._matIconRegister.addSvgIcon('search', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/search.svg'));
        this._matIconRegister.addSvgIcon('plus', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/plus.svg'));
        this._matIconRegister.addSvgIcon('cancel', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/cancel.svg'));
        this._matIconRegister.addSvgIcon('logout', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/logout.svg'));
        this._matIconRegister.addSvgIcon('edit', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/edit.svg'));
        this._matIconRegister.addSvgIcon('delete', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/delete.svg'));
        this._matIconRegister.addSvgIcon('menu', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/menu.svg'));
        this._matIconRegister.addSvgIcon('eraser', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/eraser.svg'));
        this._matIconRegister.addSvgIcon('elder_sign', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/elder_sign.svg'));
        this._matIconRegister.addSvgIcon('edit_solid', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/edit_solid.svg'));
        this._matIconRegister.addSvgIcon('save_regular', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/save_regular.svg'));
        this._matIconRegister.addSvgIcon('upload_solid', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/upload_solid.svg'));
        this._matIconRegister.addSvgIcon('visibility', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/visibility.svg'));
        this._matIconRegister.addSvgIcon('visibility_off', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/visibility_off.svg'));
        this._matIconRegister.addSvgIcon('computer', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/computer.svg'));
        this._matIconRegister.addSvgIcon('arrow-circle-right', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/arrow-circle-right.svg'));
        this._matIconRegister.addSvgIcon('arrow-circle-left', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/arrow-circle-left.svg'));
        this._matIconRegister.addSvgIcon('logo', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/logo.svg'));
        this._matIconRegister.addSvgIcon('sign_out', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/sign_out.svg'));
        this._matIconRegister.addSvgIcon('caret_down', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/caret_down.svg'));
        this._matIconRegister.addSvgIcon('notification', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/notification.svg'));
        this._matIconRegister.addSvgIcon('info', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/info.svg'));
        this._matIconRegister.addSvgIcon('eye', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/eye.svg'));
        this._matIconRegister.addSvgIcon('download', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/download.svg'));
        this._matIconRegister.addSvgIcon('search_solid', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/search_solid.svg'));
        this._matIconRegister.addSvgIcon('print', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/print.svg'));
        this._matIconRegister.addSvgIcon('image', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/image.svg'));
        this._matIconRegister.addSvgIcon('upload', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/upload.svg'));
        this._matIconRegister.addSvgIcon('update_password', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/update_password.svg'));
        this._matIconRegister.addSvgIcon('update', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu/update.svg'));
        this._matIconRegister.addSvgIcon('star-regular', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/star-regular.svg'));
        this._matIconRegister.addSvgIcon('star-solid', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/star-solid.svg'));
    }
}