
import { Cmp8635Component } from './cmp';
describe('Cmp8635Component', () => {
  it('should add', () => {
    expect(new Cmp8635Component().add8635(1)).toBe(8636);
  });
});