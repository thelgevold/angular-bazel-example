
import { Cmp8255Component } from './cmp';
describe('Cmp8255Component', () => {
  it('should add', () => {
    expect(new Cmp8255Component().add8255(1)).toBe(8256);
  });
});