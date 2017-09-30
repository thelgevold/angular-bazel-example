
import { Cmp1128Component } from './cmp';
describe('Cmp1128Component', () => {
  it('should add', () => {
    expect(new Cmp1128Component().add1128(1)).toBe(1129);
  });
});