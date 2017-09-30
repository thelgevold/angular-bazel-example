
import { Cmp1350Component } from './cmp';
describe('Cmp1350Component', () => {
  it('should add', () => {
    expect(new Cmp1350Component().add1350(1)).toBe(1351);
  });
});