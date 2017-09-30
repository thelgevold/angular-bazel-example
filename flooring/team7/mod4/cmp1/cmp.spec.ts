
import { Cmp5741Component } from './cmp';
describe('Cmp5741Component', () => {
  it('should add', () => {
    expect(new Cmp5741Component().add5741(1)).toBe(5742);
  });
});