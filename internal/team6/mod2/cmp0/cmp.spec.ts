
import { Cmp8620Component } from './cmp';
describe('Cmp8620Component', () => {
  it('should add', () => {
    expect(new Cmp8620Component().add8620(1)).toBe(8621);
  });
});