
import { Cmp9780Component } from './cmp';
describe('Cmp9780Component', () => {
  it('should add', () => {
    expect(new Cmp9780Component().add9780(1)).toBe(9781);
  });
});