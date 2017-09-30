
import { Cmp5780Component } from './cmp';
describe('Cmp5780Component', () => {
  it('should add', () => {
    expect(new Cmp5780Component().add5780(1)).toBe(5781);
  });
});