
import { Cmp8879Component } from './cmp';
describe('Cmp8879Component', () => {
  it('should add', () => {
    expect(new Cmp8879Component().add8879(1)).toBe(8880);
  });
});