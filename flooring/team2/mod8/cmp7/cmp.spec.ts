
import { Cmp5287Component } from './cmp';
describe('Cmp5287Component', () => {
  it('should add', () => {
    expect(new Cmp5287Component().add5287(1)).toBe(5288);
  });
});