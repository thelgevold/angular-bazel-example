
import { Cmp5253Component } from './cmp';
describe('Cmp5253Component', () => {
  it('should add', () => {
    expect(new Cmp5253Component().add5253(1)).toBe(5254);
  });
});