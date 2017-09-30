
import { Cmp8687Component } from './cmp';
describe('Cmp8687Component', () => {
  it('should add', () => {
    expect(new Cmp8687Component().add8687(1)).toBe(8688);
  });
});