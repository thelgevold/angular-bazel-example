
import { Cmp8674Component } from './cmp';
describe('Cmp8674Component', () => {
  it('should add', () => {
    expect(new Cmp8674Component().add8674(1)).toBe(8675);
  });
});