
import { Cmp9007Component } from './cmp';
describe('Cmp9007Component', () => {
  it('should add', () => {
    expect(new Cmp9007Component().add9007(1)).toBe(9008);
  });
});