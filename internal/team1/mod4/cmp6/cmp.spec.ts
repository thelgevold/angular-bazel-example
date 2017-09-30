
import { Cmp8146Component } from './cmp';
describe('Cmp8146Component', () => {
  it('should add', () => {
    expect(new Cmp8146Component().add8146(1)).toBe(8147);
  });
});