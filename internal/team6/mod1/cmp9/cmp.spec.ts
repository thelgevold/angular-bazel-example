
import { Cmp8619Component } from './cmp';
describe('Cmp8619Component', () => {
  it('should add', () => {
    expect(new Cmp8619Component().add8619(1)).toBe(8620);
  });
});