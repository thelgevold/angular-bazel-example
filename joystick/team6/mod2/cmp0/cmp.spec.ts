
import { Cmp9620Component } from './cmp';
describe('Cmp9620Component', () => {
  it('should add', () => {
    expect(new Cmp9620Component().add9620(1)).toBe(9621);
  });
});