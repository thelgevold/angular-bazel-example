
import { Cmp5620Component } from './cmp';
describe('Cmp5620Component', () => {
  it('should add', () => {
    expect(new Cmp5620Component().add5620(1)).toBe(5621);
  });
});