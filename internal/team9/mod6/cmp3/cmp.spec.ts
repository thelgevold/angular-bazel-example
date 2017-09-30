
import { Cmp8963Component } from './cmp';
describe('Cmp8963Component', () => {
  it('should add', () => {
    expect(new Cmp8963Component().add8963(1)).toBe(8964);
  });
});