/**
 * Import the Component styles
 */
import './contact-list.component.scss';

class ContactListController {
    contacts: { name: string }[];
    contactRemoved: ($event: { $event: { contact: { name: string } } }) => void;

    remove(contact: { name: string }) {
        this.contactRemoved({
            $event: {
                contact
            }
        });
    }
}

export class ContactList implements angular.IComponentOptions {
    template: string;
    bindings: any;
    controller: any;

    constructor() {
        this.bindings = {
            contacts: '<',
            contactRemoved: '&'
        };
        this.controller = ContactListController;
        this.template = require('./contact-list.component.html');
    }
}
