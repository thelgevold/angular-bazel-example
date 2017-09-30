
import { Cmp8007Component } from './cmp';
describe('Cmp8007Component', () => {
  it('should add', () => {
    expect(new Cmp8007Component().add8007(1)).toBe(8008);
  });
});