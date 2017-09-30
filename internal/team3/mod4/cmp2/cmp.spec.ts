
import { Cmp8342Component } from './cmp';
describe('Cmp8342Component', () => {
  it('should add', () => {
    expect(new Cmp8342Component().add8342(1)).toBe(8343);
  });
});