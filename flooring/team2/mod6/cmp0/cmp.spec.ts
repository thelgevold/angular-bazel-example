
import { Cmp5260Component } from './cmp';
describe('Cmp5260Component', () => {
  it('should add', () => {
    expect(new Cmp5260Component().add5260(1)).toBe(5261);
  });
});