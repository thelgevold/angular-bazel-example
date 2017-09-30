
import { Cmp9511Component } from './cmp';
describe('Cmp9511Component', () => {
  it('should add', () => {
    expect(new Cmp9511Component().add9511(1)).toBe(9512);
  });
});