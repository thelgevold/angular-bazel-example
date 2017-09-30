
import { Cmp5772Component } from './cmp';
describe('Cmp5772Component', () => {
  it('should add', () => {
    expect(new Cmp5772Component().add5772(1)).toBe(5773);
  });
});