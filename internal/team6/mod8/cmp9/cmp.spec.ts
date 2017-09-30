
import { Cmp8689Component } from './cmp';
describe('Cmp8689Component', () => {
  it('should add', () => {
    expect(new Cmp8689Component().add8689(1)).toBe(8690);
  });
});