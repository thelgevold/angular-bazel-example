
import { Cmp8448Component } from './cmp';
describe('Cmp8448Component', () => {
  it('should add', () => {
    expect(new Cmp8448Component().add8448(1)).toBe(8449);
  });
});