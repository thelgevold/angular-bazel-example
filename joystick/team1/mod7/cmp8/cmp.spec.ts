
import { Cmp9178Component } from './cmp';
describe('Cmp9178Component', () => {
  it('should add', () => {
    expect(new Cmp9178Component().add9178(1)).toBe(9179);
  });
});