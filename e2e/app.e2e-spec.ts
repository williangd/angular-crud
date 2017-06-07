import { AngularCrudPage } from './app.po';

describe('angular-crud App', () => {
  let page: AngularCrudPage;

  beforeEach(() => {
    page = new AngularCrudPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
