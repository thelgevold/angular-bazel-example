
import { Cmp8081Component } from './cmp';
describe('Cmp8081Component', () => {
  it('should add', () => {
    expect(new Cmp8081Component().add8081(1)).toBe(8082);
  });
});