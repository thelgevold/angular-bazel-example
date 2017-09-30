
import { Cmp1254Component } from './cmp';
describe('Cmp1254Component', () => {
  it('should add', () => {
    expect(new Cmp1254Component().add1254(1)).toBe(1255);
  });
});