
import { Cmp8264Component } from './cmp';
describe('Cmp8264Component', () => {
  it('should add', () => {
    expect(new Cmp8264Component().add8264(1)).toBe(8265);
  });
});