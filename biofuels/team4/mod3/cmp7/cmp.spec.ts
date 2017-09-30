
import { Cmp1437Component } from './cmp';
describe('Cmp1437Component', () => {
  it('should add', () => {
    expect(new Cmp1437Component().add1437(1)).toBe(1438);
  });
});