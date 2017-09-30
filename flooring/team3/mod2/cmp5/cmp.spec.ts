
import { Cmp5325Component } from './cmp';
describe('Cmp5325Component', () => {
  it('should add', () => {
    expect(new Cmp5325Component().add5325(1)).toBe(5326);
  });
});