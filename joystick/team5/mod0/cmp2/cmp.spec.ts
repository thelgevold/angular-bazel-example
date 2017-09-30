
import { Cmp9502Component } from './cmp';
describe('Cmp9502Component', () => {
  it('should add', () => {
    expect(new Cmp9502Component().add9502(1)).toBe(9503);
  });
});