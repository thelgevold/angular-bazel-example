
import { Cmp8640Component } from './cmp';
describe('Cmp8640Component', () => {
  it('should add', () => {
    expect(new Cmp8640Component().add8640(1)).toBe(8641);
  });
});