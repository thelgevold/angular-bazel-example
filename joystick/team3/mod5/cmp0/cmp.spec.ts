
import { Cmp9350Component } from './cmp';
describe('Cmp9350Component', () => {
  it('should add', () => {
    expect(new Cmp9350Component().add9350(1)).toBe(9351);
  });
});