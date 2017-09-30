
import { Cmp5410Component } from './cmp';
describe('Cmp5410Component', () => {
  it('should add', () => {
    expect(new Cmp5410Component().add5410(1)).toBe(5411);
  });
});