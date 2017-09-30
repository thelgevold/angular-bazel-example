
import { Cmp9812Component } from './cmp';
describe('Cmp9812Component', () => {
  it('should add', () => {
    expect(new Cmp9812Component().add9812(1)).toBe(9813);
  });
});