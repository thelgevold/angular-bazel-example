
import { Cmp9017Component } from './cmp';
describe('Cmp9017Component', () => {
  it('should add', () => {
    expect(new Cmp9017Component().add9017(1)).toBe(9018);
  });
});