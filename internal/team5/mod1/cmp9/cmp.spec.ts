
import { Cmp8519Component } from './cmp';
describe('Cmp8519Component', () => {
  it('should add', () => {
    expect(new Cmp8519Component().add8519(1)).toBe(8520);
  });
});