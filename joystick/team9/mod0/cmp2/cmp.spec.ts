
import { Cmp9902Component } from './cmp';
describe('Cmp9902Component', () => {
  it('should add', () => {
    expect(new Cmp9902Component().add9902(1)).toBe(9903);
  });
});