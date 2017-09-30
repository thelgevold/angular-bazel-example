
import { Cmp5433Component } from './cmp';
describe('Cmp5433Component', () => {
  it('should add', () => {
    expect(new Cmp5433Component().add5433(1)).toBe(5434);
  });
});