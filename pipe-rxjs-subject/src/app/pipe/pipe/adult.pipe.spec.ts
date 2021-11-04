import { AdultPipe } from './adult.pipe';

describe('AdultPipe', () => {
  it('create an instance', () => {
    const pipe = new AdultPipe();
    expect(pipe).toBeTruthy();
  });
});
