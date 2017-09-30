
import { Cmp9362Component } from './cmp';
describe('Cmp9362Component', () => {
  it('should add', () => {
    expect(new Cmp9362Component().add9362(1)).toBe(9363);
  });
});