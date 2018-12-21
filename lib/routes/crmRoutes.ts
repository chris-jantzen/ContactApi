import { Request, Response } from 'express';
import { ContactController } from '../controllers/crmController';

export class Routes {
  public contactController: ContactController = new ContactController();

  public routes(app: any): void {
    app.route('/')
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: 'GET request successfulll!!!!'
        });
      });

    // Contact Routes
    // Don't need to pass anything because both
    // of those functions have no parameters.
    app.route('/contact')
      .get(this.contactController.getContacts)
      // Can also use the following for an easier to read version
      // .get((req: Request, res: Response) => this.contactController.getContacts(req, res))
      .post(this.contactController.addNewContact);

    // Contact detail for specific contact
    app.route('/contact/:contactId')
      .get(this.contactController.getContactWithID)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact);
  }
}