
import { Cmp8541Component } from './cmp';
describe('Cmp8541Component', () => {
  it('should add', () => {
    expect(new Cmp8541Component().add8541(1)).toBe(8542);
  });
});