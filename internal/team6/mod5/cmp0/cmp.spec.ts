
import { Cmp8650Component } from './cmp';
describe('Cmp8650Component', () => {
  it('should add', () => {
    expect(new Cmp8650Component().add8650(1)).toBe(8651);
  });
});