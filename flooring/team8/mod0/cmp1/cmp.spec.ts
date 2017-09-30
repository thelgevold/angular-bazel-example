
import { Cmp5801Component } from './cmp';
describe('Cmp5801Component', () => {
  it('should add', () => {
    expect(new Cmp5801Component().add5801(1)).toBe(5802);
  });
});