
import { Cmp8801Component } from './cmp';
describe('Cmp8801Component', () => {
  it('should add', () => {
    expect(new Cmp8801Component().add8801(1)).toBe(8802);
  });
});