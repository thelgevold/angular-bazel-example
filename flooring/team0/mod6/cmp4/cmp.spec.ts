
import { Cmp5064Component } from './cmp';
describe('Cmp5064Component', () => {
  it('should add', () => {
    expect(new Cmp5064Component().add5064(1)).toBe(5065);
  });
});