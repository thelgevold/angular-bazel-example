
import { Cmp8382Component } from './cmp';
describe('Cmp8382Component', () => {
  it('should add', () => {
    expect(new Cmp8382Component().add8382(1)).toBe(8383);
  });
});