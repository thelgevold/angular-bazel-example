
import { Cmp8609Component } from './cmp';
describe('Cmp8609Component', () => {
  it('should add', () => {
    expect(new Cmp8609Component().add8609(1)).toBe(8610);
  });
});