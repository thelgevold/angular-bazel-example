
import { Cmp9070Component } from './cmp';
describe('Cmp9070Component', () => {
  it('should add', () => {
    expect(new Cmp9070Component().add9070(1)).toBe(9071);
  });
});