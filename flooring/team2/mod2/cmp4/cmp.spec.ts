
import { Cmp5224Component } from './cmp';
describe('Cmp5224Component', () => {
  it('should add', () => {
    expect(new Cmp5224Component().add5224(1)).toBe(5225);
  });
});