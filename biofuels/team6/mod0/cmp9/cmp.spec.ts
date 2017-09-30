
import { Cmp1609Component } from './cmp';
describe('Cmp1609Component', () => {
  it('should add', () => {
    expect(new Cmp1609Component().add1609(1)).toBe(1610);
  });
});