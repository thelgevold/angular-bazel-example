
import { Cmp8031Component } from './cmp';
describe('Cmp8031Component', () => {
  it('should add', () => {
    expect(new Cmp8031Component().add8031(1)).toBe(8032);
  });
});