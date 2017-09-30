
import { Cmp8259Component } from './cmp';
describe('Cmp8259Component', () => {
  it('should add', () => {
    expect(new Cmp8259Component().add8259(1)).toBe(8260);
  });
});