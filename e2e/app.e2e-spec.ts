import { AssQuoteRanksPage } from './app.po';

describe('ass-quote-ranks App', () => {
  let page: AssQuoteRanksPage;

  beforeEach(() => {
    page = new AssQuoteRanksPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
