
import { Cmp8701Component } from './cmp';
describe('Cmp8701Component', () => {
  it('should add', () => {
    expect(new Cmp8701Component().add8701(1)).toBe(8702);
  });
});