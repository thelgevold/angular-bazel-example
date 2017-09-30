
import { Cmp4620Component } from './cmp';
describe('Cmp4620Component', () => {
  it('should add', () => {
    expect(new Cmp4620Component().add4620(1)).toBe(4621);
  });
});