
import { Cmp1023Component } from './cmp';
describe('Cmp1023Component', () => {
  it('should add', () => {
    expect(new Cmp1023Component().add1023(1)).toBe(1024);
  });
});