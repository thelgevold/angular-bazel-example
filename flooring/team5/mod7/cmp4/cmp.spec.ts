
import { Cmp5574Component } from './cmp';
describe('Cmp5574Component', () => {
  it('should add', () => {
    expect(new Cmp5574Component().add5574(1)).toBe(5575);
  });
});