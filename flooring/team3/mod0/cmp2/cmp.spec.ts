
import { Cmp5302Component } from './cmp';
describe('Cmp5302Component', () => {
  it('should add', () => {
    expect(new Cmp5302Component().add5302(1)).toBe(5303);
  });
});