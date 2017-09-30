
import { Cmp1559Component } from './cmp';
describe('Cmp1559Component', () => {
  it('should add', () => {
    expect(new Cmp1559Component().add1559(1)).toBe(1560);
  });
});