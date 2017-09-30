
import { Cmp8865Component } from './cmp';
describe('Cmp8865Component', () => {
  it('should add', () => {
    expect(new Cmp8865Component().add8865(1)).toBe(8866);
  });
});