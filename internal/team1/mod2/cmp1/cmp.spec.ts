
import { Cmp8121Component } from './cmp';
describe('Cmp8121Component', () => {
  it('should add', () => {
    expect(new Cmp8121Component().add8121(1)).toBe(8122);
  });
});