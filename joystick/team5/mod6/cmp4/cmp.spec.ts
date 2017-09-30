
import { Cmp9564Component } from './cmp';
describe('Cmp9564Component', () => {
  it('should add', () => {
    expect(new Cmp9564Component().add9564(1)).toBe(9565);
  });
});