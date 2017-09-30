
import { Cmp8326Component } from './cmp';
describe('Cmp8326Component', () => {
  it('should add', () => {
    expect(new Cmp8326Component().add8326(1)).toBe(8327);
  });
});