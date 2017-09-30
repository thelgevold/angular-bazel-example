
import { Cmp9410Component } from './cmp';
describe('Cmp9410Component', () => {
  it('should add', () => {
    expect(new Cmp9410Component().add9410(1)).toBe(9411);
  });
});