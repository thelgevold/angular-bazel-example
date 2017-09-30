
import { Cmp8194Component } from './cmp';
describe('Cmp8194Component', () => {
  it('should add', () => {
    expect(new Cmp8194Component().add8194(1)).toBe(8195);
  });
});