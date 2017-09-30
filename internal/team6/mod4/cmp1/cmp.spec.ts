
import { Cmp8641Component } from './cmp';
describe('Cmp8641Component', () => {
  it('should add', () => {
    expect(new Cmp8641Component().add8641(1)).toBe(8642);
  });
});