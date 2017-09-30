
import { Cmp1825Component } from './cmp';
describe('Cmp1825Component', () => {
  it('should add', () => {
    expect(new Cmp1825Component().add1825(1)).toBe(1826);
  });
});