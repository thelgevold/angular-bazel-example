
import { Cmp9003Component } from './cmp';
describe('Cmp9003Component', () => {
  it('should add', () => {
    expect(new Cmp9003Component().add9003(1)).toBe(9004);
  });
});