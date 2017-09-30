
import { Cmp9210Component } from './cmp';
describe('Cmp9210Component', () => {
  it('should add', () => {
    expect(new Cmp9210Component().add9210(1)).toBe(9211);
  });
});