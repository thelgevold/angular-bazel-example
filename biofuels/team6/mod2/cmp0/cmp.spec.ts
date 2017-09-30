
import { Cmp1620Component } from './cmp';
describe('Cmp1620Component', () => {
  it('should add', () => {
    expect(new Cmp1620Component().add1620(1)).toBe(1621);
  });
});