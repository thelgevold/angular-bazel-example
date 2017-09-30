
import { Cmp8582Component } from './cmp';
describe('Cmp8582Component', () => {
  it('should add', () => {
    expect(new Cmp8582Component().add8582(1)).toBe(8583);
  });
});