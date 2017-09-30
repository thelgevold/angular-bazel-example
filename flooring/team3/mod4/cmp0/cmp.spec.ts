
import { Cmp5340Component } from './cmp';
describe('Cmp5340Component', () => {
  it('should add', () => {
    expect(new Cmp5340Component().add5340(1)).toBe(5341);
  });
});