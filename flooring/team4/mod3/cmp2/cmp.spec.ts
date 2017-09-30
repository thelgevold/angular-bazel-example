
import { Cmp5432Component } from './cmp';
describe('Cmp5432Component', () => {
  it('should add', () => {
    expect(new Cmp5432Component().add5432(1)).toBe(5433);
  });
});