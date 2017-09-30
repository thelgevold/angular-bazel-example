
import { Cmp9103Component } from './cmp';
describe('Cmp9103Component', () => {
  it('should add', () => {
    expect(new Cmp9103Component().add9103(1)).toBe(9104);
  });
});