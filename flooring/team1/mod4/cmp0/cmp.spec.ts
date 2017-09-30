
import { Cmp5140Component } from './cmp';
describe('Cmp5140Component', () => {
  it('should add', () => {
    expect(new Cmp5140Component().add5140(1)).toBe(5141);
  });
});