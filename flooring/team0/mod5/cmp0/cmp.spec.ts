
import { Cmp5050Component } from './cmp';
describe('Cmp5050Component', () => {
  it('should add', () => {
    expect(new Cmp5050Component().add5050(1)).toBe(5051);
  });
});