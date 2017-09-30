
import { Cmp8534Component } from './cmp';
describe('Cmp8534Component', () => {
  it('should add', () => {
    expect(new Cmp8534Component().add8534(1)).toBe(8535);
  });
});