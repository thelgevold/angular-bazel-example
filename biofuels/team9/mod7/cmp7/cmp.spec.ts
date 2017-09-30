
import { Cmp1977Component } from './cmp';
describe('Cmp1977Component', () => {
  it('should add', () => {
    expect(new Cmp1977Component().add1977(1)).toBe(1978);
  });
});