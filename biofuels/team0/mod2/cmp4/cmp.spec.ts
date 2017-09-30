
import { Cmp1024Component } from './cmp';
describe('Cmp1024Component', () => {
  it('should add', () => {
    expect(new Cmp1024Component().add1024(1)).toBe(1025);
  });
});