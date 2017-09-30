
import { Cmp9752Component } from './cmp';
describe('Cmp9752Component', () => {
  it('should add', () => {
    expect(new Cmp9752Component().add9752(1)).toBe(9753);
  });
});