
import { Cmp5599Component } from './cmp';
describe('Cmp5599Component', () => {
  it('should add', () => {
    expect(new Cmp5599Component().add5599(1)).toBe(5600);
  });
});