
import { Cmp9293Component } from './cmp';
describe('Cmp9293Component', () => {
  it('should add', () => {
    expect(new Cmp9293Component().add9293(1)).toBe(9294);
  });
});